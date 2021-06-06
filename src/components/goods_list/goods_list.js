import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
// import {delGood, editGood, goodsLoaded, goodsRequested, goodsError} from "../../redux/actions";
import GoodsItem from "../goods_item";
import Loading from "../loading"
import GoodsStorageContext from "../goods_storage_context";
import Modal from "../modal";
import "./goods_list.scss";

class GoodsList extends Component {

  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setModalContent = this.setModalContent.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
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
    }
  }
  
  handleNameChange(e) {
    const value = e.target.value;
    this.setState({
      nameModalValue: value,
    });
  }

  handleAmountChange(e) {
    const value = e.target.value;
    this.setState({
      amountModalValue: value,
    });
  }

  setModalContent(name, amount, id) {
    name = name ? name : "";
    amount = amount ? amount : "";
    const content = <div>
      <div className="modal__input-title">Название товара</div>
      <div>
        <input
          className="modal__input"
          placeholder="Название"
          defaultValue={name}
          onChange={this.handleNameChange}
        />
      </div>
      <div className="modal__input-title">Количество товара</div>
      <div>
        <input
          className="modal__input"
          placeholder="Количество"
          defaultValue={amount}
          onChange={this.handleAmountChange}
        />
      </div>
    </div>;
    this.setState({
      modalContent: content,
      idModalValue: id,
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

  openModal() {
    this.setState({
      isModalOpened: true,
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
      this.closeModal();
      this.props.editGood(params);
    }
  }

  render() {
    const {loading, error} = this.props;
    if (loading) {
      return <Loading />
    }
    if (error) {
      // not sure that it works
      this.componentDidCatch();
    }
    const {goods, delGood} = this.props;
    return (
      <>
        <div className="goods-list">
          <div className="goods-list__title">Список товаров</div>
          {
            goods.map(item => {
              const {id, amount, name} = item;
              return (
                <GoodsItem
                  key={id}
                  name={name}
                  amount={amount}
                  onDelete={() => delGood(id)}
                  onEdit={() => {
                    this.openModal();
                    this.setModalContent(name, amount, id);
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

function mapStateToProps({goods, loading, error}) {
  return {
    goods,
    loading,
    error,
  }
}

GoodsList.contextType = GoodsStorageContext;

export default connect(mapStateToProps, actions)(GoodsList);