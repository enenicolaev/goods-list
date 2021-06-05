function findGoodById(arr, id) {
  if (!id || !Array.isArray(arr)) return null;
  return arr.find(elem => elem.id === id);
}

function editGoods({state, field, id, value}) {
  const goodsArr = state.goods;
  const good = findGoodById(goodsArr, id);
  if (!good) return goodsArr;
  good[field] = value;
  goodsArr[id] = good;
  return goodsArr;
}

function addGood({state, name, amount}) {
  const goodsArr = state.goods;
  const good = {
    id: goodsArr.length,
    name,
    amount,
  }
  goodsArr.push(good);
  return goodsArr;
}

function deleteGood({state, id}) {
  const goodsArr = state.goods;
  const index = goodsArr.findIndex(elem => elem.id === id);
  if (index === -1) return goodsArr;
  return goodsArr.splice(index, 1);
}

export {
  editGoods,
  addGood,
  deleteGood,
}