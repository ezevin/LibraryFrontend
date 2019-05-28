import React from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import { Grid } from 'semantic-ui-react'


import Logo from './components/Logo'
import Main from './containers/Main'
import Friends from './components/Friends'

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
    // console.log(this.state.users);
    return (
      <>
        <Logo
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
          currentUser={this.state.currentUser}
          users={this.state.users}
          addUser={this.addUser}
        />
          <Grid className="">
            <Grid.Column   width={5}>
              <Friends />
            </Grid.Column>
            <Grid.Column width={11}>
              <Main
                handleLogout={this.handleLogout}
                handleUserLogin={this.handleUserLogin}
                currentUser={this.state.currentUser}
                users={this.state.users}
              />
            </Grid.Column>
          </Grid>
      </>
    )
  }
}

export default withRouter(App);
