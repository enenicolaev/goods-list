import defaultGoods from "./default_goods";

class GoodsStorage {
  constructor() {
    this._storage = window.localStorage;
    this._goods = null;
  }

  setGoods(goods) {
    this._goods = goods;
    const serializedGoods = JSON.stringify(this._goods);
    this._storage.setItem("goods", serializedGoods);
  }

  getGoods() {
    const goods = this._storage.getItem("goods");
    if (!goods || !Array.isArray(goods)) {
      return null;
    }
    return JSON.parse(goods);
  }

  setDefaultGoods() {
    this.setGoods(defaultGoods);
  }

  getDefaultGoods() {
    return defaultGoods;
  }
}

export default GoodsStorage;