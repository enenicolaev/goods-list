export const goodsLoaded = (newGoods) => {
  return {
    type: 'GOODS_LOADED',
    payload: newGoods,
  }
};

export const goodsRequested = () => {
  return {
    type: 'GOODS_REQUESTED',
  }
};

export const goodsError = () => {
  return {
    type: 'GOODS_ERROR',
  }
};


export const editGood = (goodParams) => {
  return {
    type: 'EDIT_GOOD',
    payload: goodParams,
  }
};

export const addGood = (params) => {
  return {
    type: 'ADD_GOOD',
    payload: params,
  }
};

export const delGood = (id) => {
  return {
    type: 'DEL_GOOD',
    payload: id,
  };
};

export const errorGoods = () => ({
  type: 'GOODS_ERROR',
});

export const onUpdateSearch = (searchTerm) => ({
  type: 'UPDATE_SEARCH',
  payload: {
    searchTerm,
  },
});