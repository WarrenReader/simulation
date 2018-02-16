import React, {Component} from 'react';
import Header2 from '../header2/header2.js';
import {Link} from 'react-router-dom';
import './bin.css';

export default class Bin extends Component {


  render() {

    return(
      <div>
        <Header2 letter={this.props.letter}/>
        <div className="bins-container">
          <Link to='/create/A1'><div id="bin1" className="bin-text addInventory ">+ Add inventory to bin</div></Link>
          <Link to='/create/A2'><div id="bin2" className="bin-text addInventory">+ Add inventory to bin</div></Link>
          <Link to='/create/A3'><div id="bin3" className="bin-text addInventory">+ Add inventory to bin</div></Link>
          <Link to='/create/A4'><div id="bin4" className="bin-text addInventory">+ Add inventory to bin</div></Link>
          <Link to='/create/A5'><div id="bin5" className="bin-text addInventory">+ Add inventory to bin</div></Link>
        </div>
      </div>
    )
  }
}