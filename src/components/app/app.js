import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./app.scss";

import Header from "../header";
import Container from "../container";
import ErrorMessage from "../error_message";
import GoodsList from "../goods_list";

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
      return <ErrorMessage/>
    }


    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
            <Route path = "/" exact component = {GoodsList}/>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
