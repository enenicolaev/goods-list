import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import GoodsItem from "../goods_item";
import Loading from "../loading"
import GoodsStorageContext from "../../context/goods_storage_context";
import Modal from "../modal";
import "./goods_list.scss";

class GoodsList extends Component {

  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
    this.setContentAndOpenModal = this.setContentAndOpenModal.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmitModalHandler = this.onSubmitModalHandler.bind(this);
  }

  state = {
    isModalOpened: false,
    modalContent: null,
    nameModalValue: null,
    amountModalValue: null,
    idModalValue: null,
  }

  componentDidMount() {
    // analogue of working with the server
    try {
      this.props.goodsRequested();
      const goods = this.context.getGoods();
      this.props.goodsLoaded(goods);
    } catch(e) {
      this.props.goodsError();
      throw new Error(e);
    }
  }
  
  onNameChange(e) {
    const value = e.target.value;
    this.setState({
      nameModalValue: value,
    });
  }

  onAmountChange(e) {
    const value = e.target.value;
    this.setState({
      amountModalValue: value,
    });
  }

  setContentAndOpenModal(name, amount, id) {
    this.setState({
      nameModalValue: name,
      amountModalValue: amount,
      idModalValue: id,
    });
    const content = <div>
      <div className="modal__input-title">Название товара</div>
      <div>
        <input
          className="modal__input"
          placeholder="Название"
          defaultValue={name}
          onChange={this.onNameChange}
        />
      </div>
      <div className="modal__input-title">Количество товара</div>
      <div>
        <input
          className="modal__input"
          placeholder="Количество"
          type="text"
          defaultValue={amount}
          onChange={this.onAmountChange}
        />
      </div>
    </div>;
    this.setState({
      modalContent: content,
      isModalOpened: true,
    })
  }

  closeModal() {
    this.setState({
      isModalOpened: false,
      nameModalValue: null,
      amountModalValue: null,
      idModalValue: null,
    })
  }

  onSubmitModalHandler() {
    const {nameModalValue, amountModalValue, idModalValue} = this.state;
    if (!nameModalValue) {
      alert("Введите название товара");
      return;
    }
    if (!amountModalValue) {
      alert("Введите количесвто товара");
      return;
    }
    const params = {
      id: idModalValue,
      name: nameModalValue,
      amount: amountModalValue,
    }
    const agreement = window.confirm("Вы уверены, что хотите изменить товар?")
    if (agreement) {
      this.props.editGood(params);
      this.closeModal();
    }
  }

  filterGoods(goods) {
    let {searchTerm} = this.props;
    if (searchTerm.length === 0) return goods;
    searchTerm = searchTerm.toLowerCase();
    return goods.filter(item => {
      const name = item.name.toLowerCase();
      return name.indexOf(searchTerm) > -1;
    });
  }

  render() {
    const {loading, error} = this.props;
    if (loading) {
      return <Loading />
    }
    if (error) {
      throw new Error("error in 'goods_list' component, in render method")
    }
    const {goods, delGood} = this.props;
    const fiteredGoods = this.filterGoods(goods)
    return (
      <>
        <div className="goods-list">
          <div className="goods-list__title">Список товаров</div>
          {
            fiteredGoods.map(item => {
              const {id, amount, name} = item;
              return (
                <GoodsItem
                  key={id}
                  id={id}
                  name={name}
                  amount={+amount}
                  onDelete={() => delGood(id)}
                  onEdit={() => {
                    this.setContentAndOpenModal(name, amount, id);
                  }}/>
              )
            })
          }
        </div>
        <Modal
          title="Редактировать товар"
          isOpen={this.state.isModalOpened}
          onCancel={this.closeModal}
          onSubmit={this.onSubmitModalHandler}>
            {this.state.modalContent}
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

GoodsList.contextType = GoodsStorageContext;

export default connect(mapStateToProps, actions)(GoodsList);