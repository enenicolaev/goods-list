import store from "./store";
import { deleteGood, addGood, editGoods } from "../utils/goods_utils";

export const edit = ({field, value, id}) => {
  const goodsArr = store.getState().goods;
  return {
    type: 'NEW_GOODS_LIST',
    newGoodsList: editGoods({goodsArr, field, value, id}),
  }
};

export const add = ({name, amount}) => {
  const goodsArr = store.getState().goods;
  return {
    type: 'NEW_GOODS_LIST',
    newGoodsList: addGood({goodsArr, name, amount}),
  }
};

export const del = (id) => {
  const goodsArr = [...store.getState().goods];
  console.log(goodsArr)
  const newGoods = deleteGood({goodsArr, id});
  return {
    type: 'NEW_GOODS_LIST',
    newGoods: [],
  };
};

export const errorGoods = () => ({
  type: 'GOODS_ERROR',
});

