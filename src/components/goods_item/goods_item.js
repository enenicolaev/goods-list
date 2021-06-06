import "./goods_item.scss";

const GoodsItem = (props) => {
  const {name, amount, id, onDelete, onEdit} = props;
  return (
    <div 
      className="goods-item"
      data-name={name}
      data-amount={amount}>
        <div className="goods-item__name">{name}</div>
        <div className="goods-item__amount"> x{amount}</div>
        <button
          className="goods-item__btn goods-item__edit"
          onClick={() => onEdit(id)}>
            Edit
        </button>
        <button
          className="goods-item__btn goods-item__del"
          onClick={() => onDelete(id)}>
            Delete
        </button>
    </div>
  )
}

export default GoodsItem;