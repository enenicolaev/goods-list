import store from "./store";
import { deleteGood, addGood, editGoods } from "../utils/goods_utils";

export const edit = ({field, value, id}) => {
  const state = store.getState();
  return {
    type: 'EDIT_GOOD',
    goods: editGoods({state, field, value, id}),
  }
};

export const add = ({name, amount}) => {
  const state = store.getState();
  return {
    type: 'ADD_GOOD',
    goods: addGood({state, name, amount}),
  }
};

export const del = (id) => {
  const state = store.getState();
  return {
    type: 'DELETE_GOOD',
    goods: deleteGood({state, id}),
  };
};

export const errorGoods = () => ({
  type: 'GOODS_ERROR'
});

