import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuList from './menuList.js';
import Summary from './summary.js'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <br/>
        <Container>
          <Row>
            <Col sm="3">
              {/* <cateGoies></MenuList> */}
            </Col>
            <Col sm="6">
              <MenuList></MenuList>
            </Col>
            <Col sm="3">
              <Summary></Summary>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
