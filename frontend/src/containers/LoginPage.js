import React, { Component } from 'react';
import {  } from 'semantic-ui-react'

import Login from '../components/Login'
import Signup from '../components/Signup'



class LoginPage extends Component {

  state ={
    login: true,
  }

  onClick = () => {
    this.setState({login: false})
  }

  render(){
    if (this.state.login){
      return (

          <Login handleUserLogin={this.props.handleUserLogin}
          handleLogout={this.props.handleLogout}
          toggleClick={this.onClick} users={this.props.users}/>
      )} else {
        return (
          <Signup
            addUsers={this.props.addUsers}
            users={this.props.users}/>
      )}
  }
}

export default LoginPage
