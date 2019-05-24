import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'


import Books from './Books'
import { Search } from 'semantic-ui-react'
import FilterOptions from '../components/FilterOptions'
import Menu from '../components/Menu'
import BookShelf from '../components/BookShelf'
import BookCover from '../components/BookCover'
import Login from '../components/Login'


class Main extends Component {

  state = {
    books: [],
    myBooks: [],
    search: '',
    mine: false
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

  render(){
    const filtered = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })

      return(
        <>
          <br />
          <Menu mine={this.toggleDetails}/>
          <center>
          Search By Title:
          <Route path="/login" render={() => <Login />}/> <br />
          <Search onSearchChange={this.handleSearch} showNoResults={false} /><br />
          </center>
          <FilterOptions titles={this.handleTitleSort} authors={this.handleAuthorSort} books={this.state.books}/>
          <div>
          <Route path="/library" render={(props) => <Books {...props} books={filtered} myBooks={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick} />} />
          <Route path="/bookshelf" render={(props) => <BookShelf {...props} books={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick} />} />

          </div>
        </>
      )
  }
}

export default withRouter(Main)

// <Books books={filtered} myBooks={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick} />
