import GoodsStorage from "../services/goods_storage";

const goodsStorage = new GoodsStorage();
const startGoods = goodsStorage.getGoods();
const defaultGoods = goodsStorage.getDefaultGoods();

const initialState = {
  goods: startGoods ? startGoods : defaultGoods,
  error: false,
}

const reducer = (state = initialState, action) => {
  const {type, newGoods} = action;
  console.log(newGoods)
  switch (type){
    case 'NEW_GOODS_LIST':
      goodsStorage.setGoods(newGoods);
      return {
        goods: newGoods,
        erroe: false,
      };
    case 'GOODS_ERROR':
      return { 
        state: state,
        error: true,
      };
    default:
      return state;
  }
}

export default reducer;