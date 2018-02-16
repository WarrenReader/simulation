import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Bin from './components//bin/bin.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="shelf-container-parent">
            <Bin shelfName="Shelf A"/>
            <Bin shelfName="Shelf B"/>
            <Bin shelfName="Shelf C"/>
            <Bin shelfName="Shelf D"/>
          </div>
      </div>
    );
  }
}

export default App;
