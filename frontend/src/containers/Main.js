import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import {  } from 'semantic-ui-react'


import Books from './Books'
import BookShelf from './BookShelf'
import Login from '../components/Login'
import AddBook from '../components/AddBook'
import Profile from '../components/Profile'
import Messages from '../components/Messages'
import EditProfile from '../components/EditProfile'

class Main extends Component {

  state = {
    books: [],
    myBooks: [],
    search: '',
    title: ''
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/books`)
    .then(res => res.json())
    .then(data => this.setState({books:data}))
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
    // console.log(value)
  }

  handleChange = (e) => {
    this.setState({filters: {
      type: e.target.value
    }})
  }

  handleTitleSort = () => {
    this.setState({books: this.state.books.sort((a, b) =>{
      return a.title.localeCompare(b.title)}
    )})
  }

  handleAuthorSort = () => {
    this.setState({books: this.state.books.sort((a, b) =>{
      // console.log(a, b);
      return a.author.localeCompare(b.author)}
    )})
  }

  handleGenreSort = (e) => {
    const genre = e.target.value
    console.log("ill get you now", genre);
    this.state.books.filter(book => {
      if (book.genre === genre){
        // console.log(book);
        return book
      } else {
        // console.log("nuttin");
      }
    })
  }

  handleClick = (book) => {
    // console.log(book)
    if(!this.state.myBooks.includes(book))
    this.setState({myBooks: [...this.state.myBooks, book]})
  }

  handleShelf = (id) => {
    const filter = this.state.myBooks.filter(book => {
      return  book !== id})
    this.setState({myBooks: filter})
  }

  toggleDetails = () => {
    this.setState({mine: !this.state.mine})
  }

  filtered = (e) => {
      console.log(e);
      this.setState({value: e.target.value}, console.log("filter", this.state.value))
  }

  addBooks = book => {
    this.setState({ books: [...this.state.books, book] })
  }

  getTitle = (e) => {
    console.log("TITLE:",e.target.value)
    this.setState({title: e.target.value})
  }

  render(){
    // console.log(this.state.users);
    const mineId = this.state.myBooks.map(book => book.id)

    const filtered = this.state.books.filter(book => {
      if(!mineId.includes(book.id)){
        // console.log("state", this.state.newGenre, "book", book.genre);
        return                book.title.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })

      return(
        <>
          <Route path="/login" render={( ) => <Login handleUserLogin={this.props.handleUserLogin}  handleLogout={this.props.handleLogout}/>}/> <br />

          <Route path="/library" render={(props) => <Books {...props} books={filtered} myBooks={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick}   titles={this.handleTitleSort} authors={this.handleAuthorSort}
          genres={this.handleGenreSort} onSearchChange={this.handleSearch}
          filter={this.filter}
          getTitle={this.getTitle}
          />} />

          <Route path="/bookshelf" render={(props) => <BookShelf {...props} books={this.state.myBooks} remove={this.handleShelf} onClick={this.handleClick} titles={this.handleTitleSort} authors={this.handleAuthorSort}  onSearchChange={this.handleSearch} />} />

          <Route path="/newbook" render={(props) => <AddBook {...props} addBooks={this.addBooks}/>} />

          <Route path="/profile" component={Profile}/>

          <Route path="/messages" render={(props) => <Messages {...props} title={this.state.title}/>}/>

          <Route path="/editProfile" component={EditProfile}/>
        </>
      )
  }
}

export default withRouter(Main)
