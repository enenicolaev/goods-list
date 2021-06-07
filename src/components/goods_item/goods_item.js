import React from "react";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

import "./goods_item.scss";

const GoodsItem = (props) => {
  const {name, amount, id, onDelete, onEdit, history} = props;

  function onEditHandler(e, id) {
    e.stopPropagation();
    onEdit(id);
  }

  function onDeleteHandler(e, id) {
    e.stopPropagation();
    onDelete(id);
  }

  return (
    <div 
      className="goods-item"
      data-name={name}
      data-amount={amount}
      >
        <div
          className="goods-item__name"
          onClick={(e) => {
            e.stopPropagation();
            history.push(`/goods/${id}`);
          }}>
          {name}
        </div>
        <div className="goods-item__amount"> x{amount}</div>
        <button
          className="goods-item__btn goods-item__edit"
          onClick={(e) => onEditHandler(e, id)}>
            <span className="icon-pencil"></span>
        </button>
        <button
          className="goods-item__btn goods-item__del"
          onClick={(e) => onDeleteHandler(e, id)}>
            <span className="icon-bin"></span>
        </button>
    </div>
  )
}

GoodsItem.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
}

export default withRouter(GoodsItem);