import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header2.css';
import logo from '../header/assets/logo.png';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {

    return (
      <header className="header-2">
        <div className="header-2-logo-box">
          <Link to='/'><img className="logo2" src={logo} alt="logo" /></Link>
        </div>
        <div className="shelf-name-wrapper">
          <span className="shelf-name-2 open-sans-bold">Shelf {this.props.letter}</span>
        </div>
      </header>
    )

  }
}