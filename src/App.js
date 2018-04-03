import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Column from './components/column';
import Header from './components/header';

class App extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.plusCard = this.plusCard.bind(this);

  }

  onClick(direction) {

  }

  plusCard() {
    debugger;
    this.refs.column.addCard();
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.plusCard}>hello</div>
        <Header />
        <div className="content">
          <Column clsName="column1" name="winnie" />
          <Column clsName="column2" name="bob" />
          <Column clsName="column3" name="thomas" />
          <Column clsName="column4" name="george" />
        </div>
      </div>
    );
  }
}

export default App;
