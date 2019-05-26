import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'

import NavBar from './Menu'

class Header extends Component {

  render() {
    return (
      <header>
        <br /><br />
        <center> <Icon className="icon" name="book" size="xx-large"/><span className="textLarge">BookWyrm  </span><Icon className="icon" name="book" size="xx-large"/></center><br />
        <NavBar currentUser={this.props.currentUser} users={this.props.users} addUser={this.props.addUser}/>
      </header>
    );
  }

}

export default Header;
