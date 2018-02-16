import React, {Component} from 'react';
import Header from '../header/header.js';
import Shelf from '../shelf/shelf.js';


export default class Home extends Component {


  render() {

    return (
      <div>
        <Header />

        <div className="shelf-container-parent">
            <Shelf shelfName="Shelf A" linkTo="/bins/A"/>
            <Shelf shelfName="Shelf B" linkTo="/bins/B"/>
            <Shelf shelfName="Shelf C" linkTo="/bins/C"/>
            <Shelf shelfName="Shelf D" linkTo="/bins/D"/>
        </div>
      </div>
    )
  }
}