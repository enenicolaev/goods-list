import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from "./redux/store";
import GoodsStorage from "./services/goods_storage";

import "./styles/null_style.scss";

const goodsStorage = new GoodsStorage();
if (!goodsStorage.getGoods()) {
  goodsStorage.setDefaultGoods();
}

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);