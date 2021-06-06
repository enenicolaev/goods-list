import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./app.scss";

import Header from "../header";
import Container from "../container";
import ErrorBoundary from "../error_boundary";
import GoodsList from "../goods_list";
import GoodsBar from "../goods_bar";

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

    if (this.state.error) {
      return <ErrorBoundary/>
    }

    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
            <GoodsBar />
            <Route path = "/" exact component = {GoodsList}/>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
