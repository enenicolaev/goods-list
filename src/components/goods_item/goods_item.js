import {connect} from "react-redux";
import {del} from "../../redux/actions";
import "./goods_item.scss";

const GoodsItem = (props) => {
  const {name, amount, id, del} = props;
  return (
    <div 
      className="goods-item"
      data-name={name}
      data-amount={amount}>
        <div className="goods-item__name">{name}</div>
        <div className="goods-item__amount"> x{amount}</div>
        <button
          className="goods-item__btn goods-item__edit">
            Edit
        </button>
        <button
          className="goods-item__btn goods-item__del"
          onClick={() => del(id)}>
            Delete
        </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    del: (id) => dispatch(del()),
  }
}

export default connect(null, mapDispatchToProps)(GoodsItem);