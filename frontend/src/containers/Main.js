import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Search, Container } from 'semantic-ui-react'


import Books from './Books'
import BookShelf from './BookShelf'
import FilterOptions from '../components/FilterOptions'
import Menu from '../components/Menu'
import BookCover from '../components/BookCover'
import Login from '../components/Login'
import AddBook from '../components/AddBook'
import Profile from '../components/Profile'


class Main extends Component {

  state = {
    books: [],
    myBooks: [],
    search: '',
    newGenre: ''
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/books`)
    .then(res => res.json())
    .then(data => this.setState({books:data}))
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
    console.log(value)
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
      console.log(a, b);
      return a.author.localeCompare(b.author)}
    )})
  }

  handleClick = (book) => {
    console.log(book)
    if(!this.state.myBooks.includes(book))
    this.setState({myBooks: [...this.state.myBooks, book]})
  }

  handleShelf = (id) => {
    const filter = this.state.myBooks.filter(book => {
      return  book !== id})
      console.log(filter);
    this.setState({myBooks: filter})
  }

  toggleDetails = () => {
    this.setState({mine: !this.state.mine})
  }

  filter = (e) => {
      this.setState({newGenre: e.target.value}, console.log("filter", this.state.newGenre))
  }

  addBooks = book => {
    this.setState({ books: [...this.state.books, book] })
  }

  render(){
    console.log(this.state.users);
    const mineId = this.state.myBooks.map(book => book.id)

    const filtered = this.state.books.filter(book => {
      if(!mineId.includes(book.id)){
        // console.log("state", this.state.newGenre, "book", book.genre);
        return                book.title.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })

      return(
        <>
          <Container>
          <br />
          <Route path="/login" render={( ) => <Login handleUserLogin={this.props.handleUserLogin}  handleLogout={this.props.handleLogout}/>}/> <br />

          <Route path="/library" render={(props) => <Books {...props} books={filtered} myBooks={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick}   titles={this.handleTitleSort} authors={this.handleAuthorSort}  onSearchChange={this.handleSearch}
          filter={this.filter}
          />} />

          <Route path="/bookshelf" render={(props) => <BookShelf {...props} books={this.state.myBooks} remove={this.handleShelf} onClick={this.handleClick} titles={this.handleTitleSort} authors={this.handleAuthorSort}  onSearchChange={this.handleSearch} />} />

          <Route path="/newbook" render={(props) => <AddBook {...props} addBooks={this.addBooks}/>} />

          <Route path="/profile" render={(props) => <Profile {...props} addBooks={this.addBooks}/>} />
          </Container>
        </>
      )
  }
}

export default withRouter(Main)
