import React, {Component} from 'react';
import Header3 from '../header3/header3.js';
import './createbin.css';

export default class CreateBin extends Component {



  render() {
    
    return(
      <div>
        <Header3 letter={this.props.letter} binNum={this.props.binNum}/>
        <div className="create-bin-container">
          <span className="Create__data_title">Name</span>
          <input className="Create__data_input" /> <br />
          <span className="Create__data_title">Price</span>
          <input className="Create__data_input" value="$"/> <br />
          <button className="Create__data_btn">+ Add to Inventory</button>
        </div>
      </div>
    ) 

  }
}