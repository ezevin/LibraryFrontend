import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Main from './containers/Main'
import Login from './components/Login'

class App extends React.Component {

  state = {
    currentUser: null,
    users: []
  }

  componentDidMount(){
    // const token = localStorage.getItem('token')

      // if (!token) {
      //   this.props.history.push("login")
      // }
      // if(token) {
      //   fetch("http://localhost:3001/api/v1/current_user", {
      //     headers: {
      //       Authenticate: token
      //     }
      //   })
      //   .then(res => res.json())
      //   .then((user) =>{
      //     if(!user.error){
      //       this.setState({currentUser: user})
      //     }
      //   })
      // }
      fetch(`http://localhost:3001/api/v1/users`)
      .then(res => res.json())
      .then(data => this.setState({users:data}))
    }

  addUser = user => {
    this.setState({ users: [...this.state.users, user] })
  }

  handleUserLogin = (user) => {
    localStorage.setItem("token", user.token)
    this.setState({currentUser: user})
  }

  handleLogout = () => {
    localStorage.removeItem("token")

    this.setState({currentUser: null})
    this.props.history.push("login")
  }

  render(){
    console.log(this.state.users);
    return (
      <>
        <Header
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
          currentUser={this.state.currentUser}
          users={this.state.users}
          addUser={this.addUser}
        />
        <Main
          handleLogout={this.handleLogout}
          handleUserLogin={this.handleUserLogin}
          currentUser={this.state.currentUser}
          users={this.state.users}
        />
      </>
    )
  }
}

export default withRouter(App);
