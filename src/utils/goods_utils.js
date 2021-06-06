function findGoodById(arr, id) {
  if (!id || !Array.isArray(arr)) return null;
  return arr.find(elem => elem.id === id);
}

function editGoods({goodsArr, field, id, value}) {
  const good = findGoodById(goodsArr, id);
  if (!good) return goodsArr;
  good[field] = value;
  goodsArr[id] = good;
  return goodsArr;
}

function addGood({goodsArr, name, amount}) {
  const good = {
    id: goodsArr.length,
    name,
    amount,
  }
  goodsArr.push(good);
  return goodsArr;
}

function deleteGood({goodsArr, id}) {
  const index = goodsArr.findIndex(elem => elem.id === id);
  if (index === -1) return goodsArr;
  return goodsArr.splice(index, 1);
}

export {
  editGoods,
  addGood,
  deleteGood,
}