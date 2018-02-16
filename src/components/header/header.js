import React, {Component} from 'react';
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
      <header>
        <div class="logo-box">
          <img className="logo" src={logo} alt="logo" />
          <span className="header-font open-sans-bold ">SHELFIE</span>
        </div>
      </header>
    )

  }
}