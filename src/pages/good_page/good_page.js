import React, {Component} from "react";
import GoodsStorageContext from "../../context/goods_storage_context";
import PropTypes from 'prop-types';

import "./good_page.scss";

class GoodPage extends Component {

  findGood(id) {
    const goods = this.context.getGoods();
    console.log(id)
    return goods.find(elem => elem.id === id);
  }

  render() {
    const id = this.props.selectedGoodId;
    // console.log(this.findGood(id))
    // console.log(id)
    const {name, amount} = this.findGood(id);

    return (
      <div className="goods-page">
        <div 
          className="goods-item"
          data-name={name}
          data-amount={amount}
          >
            <div className="goods-item__name">{name}</div>
            <div className="goods-item__amount"> x{amount}</div>
        </div>
      </div>
    );
  }
}

GoodPage.propTypes = {
  selectedGoodId: PropTypes.string,
}

GoodPage.contextType = GoodsStorageContext;

export default GoodPage;