import React, {Component} from "react";
import {nanoid} from "nanoid";
import Modal from "../modal";
import {addGood} from "../../redux/actions";
import {connect} from "react-redux";

import "./goods_bar.scss";

class GoodsBar extends Component {

  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  closeModal() {
    this.setState({
      isModalOpened: false,
      nameModalValue: null,
      amountModalValue: null,
    })
  }

  openModal() {
    this.setState({
      isModalOpened: true,
    })
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

  onSubmitModalHandler() {
    const {nameModalValue, amountModalValue} = this.state;
    if (!nameModalValue) {
      alert("Введите название товара");
      return;
    }
    if (!amountModalValue) {
      alert("Введите количесвто товара");
      return;
    }
    const params = {
      id: nanoid(),
      name: nameModalValue,
      amount: amountModalValue,
    }
    console.log(params)
    this.closeModal();
    this.props.addGood(params);
  }

  render() {
    const {isModalOpened} = this.state;

    return (
      <>
        <div className="goods-bar">
          <input placeholder="Поиск" className="goods-bar__search"/>
          <button className="goods-bar__add-btn" onClick={this.openModal}>
            <span>Добавить</span>
          </button>
        </div>
        <Modal
          title="Добавить товар"
          isOpen={isModalOpened}
          onCancel={this.closeModal}
          onSubmit={this.onSubmitModalHandler}
        >
          <div>
            <div className="modal__input-title">Название товара</div>
            <div>
              <input
                className="modal__input"
                placeholder="Название"
                onChange={this.handleNameChange}
              />
            </div>
            <div className="modal__input-title">Количество товара</div>
            <div>
              <input
                className="modal__input"
                placeholder="Количество"
                onChange={this.handleAmountChange}
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGood: (param) => dispatch(addGood(param)), 
  }
}

export default connect(null, mapDispatchToProps)(GoodsBar);