import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./app.scss";

import Header from "../header";
import Container from "../container";

class App extends Component {
  
  render() {

    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
            {/* <Route path = "/" component = {}/> */}
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
