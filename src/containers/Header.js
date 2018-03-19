import React, { Component } from 'react';
import logo from './../img/logo.svg';


class Header extends Component {
  render() {
    return (
      <header className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Pierre Neveu</h1>
        <h2>Présentation</h2>
      </header>
    )
  }
}

  export default Header;
