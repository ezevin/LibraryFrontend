import React, { Component } from 'react';
import Menu from './Menu'

class Header extends Component {

  render() {
    return (
      <header>
        <br />
        <center> <h1 className="text-center">BookWyrm</h1> </center>
        <Menu />
      </header>
    );
  }

}

export default Header;
