import React, {Component} from 'react';
import './bin.css';

export default class Bin extends Component {
  constructor() {
    super();

    this.state = {

    }

  }


  render() {

    return (
      <div className="shelf-container-child">
        <span className="shelf-name open-sans-bold">{this.props.shelfName}</span>
      </div>
    )

  }
}