import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Main from './containers/Main'
import Login from './components/Login'

class App extends React.Component {

  state = {
    currentUser: null
  }

  // componentDidMount(){
  //   const token = localStorage.getItem('token')
  //
  //     if (!token) {
  //       this.props.history.push("login")
  //     } else {
  //       fetch("http://localhost:3001/api/v1/current_user", {
  //         headers: {
  //           Authenticate: token
  //         }
  //       })
  //       .then(res => res.json())
  //       .then((user) =>{
  //         if(!user.error){
  //           this.setState({currentUser: user})
  //         }
  //       })
  //     }
  //   }

  render(){
    return (
      <>
        <Header
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main />
      </>
    )
  }
}

export default withRouter(App);
