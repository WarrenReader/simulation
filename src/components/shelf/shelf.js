import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './shelf.css';

export default class Bin extends Component {
  constructor() {
    super();

    this.state = {

    }

  }


  render() {

    return (
      <div className="shelf-container-child">
        <Link to={this.props.linkTo}><span className="shelf-name open-sans-bold">{this.props.shelfName}</span></Link>
      </div>
    )

  }
}