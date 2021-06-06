import GoodsStorage from "../services/goods_storage";

const goodsStorage = new GoodsStorage();

const initialState = {
  goods: [],
  error: false,
  loading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOODS_LOADED':
      return {
        ...state,
        loading: false,
        goods: action.payload,
      }
    case 'GOODS_REQUESTED':
      return {
        ...state,
        loading: true,
        error: false,
      }
    case 'GOODS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      }
    case 'ADD_GOOD':
      const newGood = {...action.payload}
      const newGoodsArr = [
        ...state.goods,
        newGood,
      ];
      goodsStorage.setGoods(newGoodsArr);
      return {
        ...state,
        goods: newGoodsArr,
      };
    case 'DEL_GOOD':
      const id = action.payload;
      const itemIndex = state.goods.findIndex(item => item.id === id);
      console.log(itemIndex)
      if (itemIndex === -1) return {
        ...state,
      };
      const newGoods = [
        ...state.goods.slice(0, itemIndex),
        ...state.goods.slice(itemIndex + 1),
      ];
      console.log(newGoods)
      goodsStorage.setGoods(newGoods);
      return {
        ...state,
        goods: newGoods,
      };
    case 'EDIT_GOOD':
      const {name: editedName, amount: editedAmount, id: editedID} = action.payload;
      const index = state.goods.findIndex(item => item.id === editedID);
      console.log(index, {editedName, editedAmount, editedID})
      state.goods[index].name = editedName;
      state.goods[index].amount = editedAmount;
      goodsStorage.setGoods(state.goods);
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;