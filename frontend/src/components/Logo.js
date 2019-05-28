import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import NavBar from './Menu'

class Logo extends Component {

  render() {
    return (
      <Header as='h1'>
        <br /><br />
        <center> <span className="textLarge">BookWyrm</span></center><br />
        <NavBar currentUser={this.props.currentUser} users={this.props.users} addUser={this.props.addUser}/>
      </Header>
    );
  }

}

export default Logo;
