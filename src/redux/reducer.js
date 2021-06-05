import GoodsStorage from "../services/LocalStorageHandler";

const goodsStorage = new GoodsStorage();
const startGoods = goodsStorage.getGoods();
const defaultGoods = goodsStorage.getDefaultGoods();

const initialState = {
  goods: startGoods ? startGoods : defaultGoods,
  error: false,
}

const reducer = (state = initialState, action) => {
  const {type,  goods} = action;
  switch (type){
    case 'EDIT_GOOD':
      return {
        goods,
        erroe: false,
      };
    case 'ADD_GOOD':
      return {
        goods,
        erroe: false,
      };
    case 'DELETE_GOOD':
      return {
        goods,
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