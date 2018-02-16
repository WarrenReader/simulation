import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header3.css';
import logo from '../header/assets/logo.png';

export default class Header3 extends Component {


  render () {

    return(
      <div>
        <header className="header-2">
          <div className="header-3-logo-box">
            <Link to='/'><img className="logo2" src={logo} alt="logo" /></Link>
          </div>
          <div className="shelf-name-wrapper-3">
            <span className="shelf-name-2 open-sans-bold">Shelf {this.props.letter}</span>
          </div>
          <div className="header-bin-num-wrapper">
            <span className="bin-name-style open-sans-bold">Add to Bin {this.props.binNum}</span>
          </div>
        </header>
      </div>
    )
  }

}