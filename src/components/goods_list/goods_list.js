import React, { Component } from "react";
import store from "../../redux/store";
import GoodsItem from "../goods_item";
import "./goods_list.scss";

class GoodsList extends Component {

  state = {
    goods: [],
    error: false,
  }

  componentDidMount() {
    this.setState((state) => {
      const newGoods = store.getState().goods;
      return {
        goods: newGoods,
        error: false,
      }
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState((state) => {
  //     const newGoods = store.getState().goods;
  //     if (prevState.goods !== newGoods) return;
  //     return {
  //       goods: newGoods,
  //       error: false,
  //     }
  //   });
  // }

  renderItems(arr) {
    return arr.map(item => {
      const {id} = item;
      return (
        <GoodsItem key={id} {...item}/>
      )
    });
  }

  render() {
    const goodsArr = this.state.goods;
    const items = this.renderItems(goodsArr)

    return (
      <div className="goods-list">
        <div className="goods-list__title">Список товаров</div>
        { items }
      </div>
    )
  }
}

export default GoodsList;