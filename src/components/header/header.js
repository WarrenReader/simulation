import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import logo from './assets/logo.png';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {

    return (
      <header className="header1">
        <div className="logo-box">
          <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
          <span className="header-font open-sans-bold ">SHELFIE</span>
        </div>
      </header>
    )

  }
}