import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from "./redux/store";
import GoodsStorage from "./services/goods_storage";
import GoodsStorageContext from "./components/goods_storage_context";
import ErrorBoundary from "./components/error_boundary";

import "./styles/null_style.scss";

const goodsStorage = new GoodsStorage();
if (!goodsStorage.getGoods()) {
  goodsStorage.setDefaultGoods();
}

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundary>
      <GoodsStorageContext.Provider value={goodsStorage}>
        <App />
      </GoodsStorageContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);