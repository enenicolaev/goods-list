import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./app.scss";

import Header from "../header";
import Container from "../container";
import ErrorBoundary from "../error_boundary";
import GoodsList from "../goods_list";
import GoodsBar from "../goods_bar";

import GoodPage from "../../pages/good_page";

class App extends Component {

  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({
      error: true,
   })
  }
  
  render() {

    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
            <GoodsBar/>
            <ErrorBoundary message="Произошла ошибка, список товаров недоступен">
              <Route path = "/" exact component={GoodsList}/>
              <Route path="/goods/:id" render={({match}) => {
                const {id} = match.params;
                return <GoodPage selectedGoodId={id} />;
              }}/>
            </ErrorBoundary>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
