import React from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import { Grid } from 'semantic-ui-react'


import Logo from './components/Logo'
import Main from './containers/Main'
import Friends from './components/Friends'

class App extends React.Component {

  state = {
    books: [],
    currentUser: null,
    userBooks: [],
    id: '',
    library: []
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    console.log("token", token);

      if(token) {
        fetch("http://localhost:3001/api/v1/current_user", {
          headers: {
            Authenticate: token
          }
        })
        .then(res => res.json())
        .then((user) => {
          if(!user.error){
            this.setState({currentUser: user})
          }
          let id = this.state.currentUser.id
            fetch(`http://localhost:3001/api/v1/users/${id}`)
            .then(res => res.json())
            .then(data => this.setState({userBooks:data.books}, console.log("UserBooks", this.state.userBooks)))

            this.setState({id: id})
        })
      }
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

  fetchUserbooks = () => {
    let id = this.state.currentUser.id
    fetch(`http://localhost:3001/api/v1/users/${id}`)
    .then(res => res.json())
    .then(data => this.setState({userBooks:data.books}, console.log("UserBooks", this.state.userBooks)))
  }

  // fetchBooks = () => {
  //   fetch(`http://localhost:3001/api/v1/books`)
  //   .then(res => res.json())
  //   .then(data => this.setState({books:data}))
  //
  //   const ub = this.state.userBooks.map(book => book.book_id)
  //   console.log(ub);
  //
  //   this.state.books.filter(book => {
  //     if(!ub.includes(book.id))
  //     return this.setState({library: book})
  //   })
  // }

  fetchUserData = () => {
    let id = this.state.currentUser.id
    fetch(`http://localhost:3001/api/v1/users/${id}`)
    .then(res => res.json())
    .then(data => this.setState({userBooks:data}))
  }

  render(){

    // <Friends />
    return (
      <>
        <Logo
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          addUser={this.addUser}
        />
          <Grid className="">
            <Grid.Column   width={5}>
            </Grid.Column>
            <Grid.Column width={11}>
              <Main
                fetchUserbooks={this.fetchUserbooks}
                fetchUserData={this.fetchUserData}
                fetchBooks={this.fetchBooks}
                handleLogout={this.handleLogout}
                handleUserLogin={this.handleUserLogin}
                currentUser={this.state.currentUser}
                users={this.state.users}
                userBooks={this.state.userBooks}
                id={this.state.id}
              />
            </Grid.Column>
          </Grid>
      </>
    )
  }
}

export default withRouter(App);
