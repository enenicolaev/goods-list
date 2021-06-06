import defaultGoods from "./default_goods";

class GoodsStorage {
  constructor() {
    this._localStorage = window.localStorage;
    this._goods = null;
  }

  setGoods(goods) {
    this._goods = goods;
    const serializedGoods = JSON.stringify(this._goods);
    this._localStorage.setItem("goods", serializedGoods);
  }

  getGoods() {
    const goods = JSON.parse(this._localStorage.getItem("goods"));
    if (!goods || !Array.isArray(goods)) {
      return null;
    }
    return goods;
  }

  setDefaultGoods() {
    this.setGoods(defaultGoods);
  }

  getDefaultGoods() {
    return defaultGoods;
  }
}

export default GoodsStorage;