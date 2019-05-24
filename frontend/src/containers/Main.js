import React, { Component } from 'react';

import Books from './Books'
import { Search } from 'semantic-ui-react'
import FilterOptions from '../components/FilterOptions'

class Main extends Component {

  state = {
    books: [],
    myBooks: [],
    search: ''
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

  render(){
    const filtered = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })

      return(
        <><br />
          <center>
            <Search onSearchChange={this.handleSearch} showNoResults={false} /><br />
            <FilterOptions titles={this.handleTitleSort} authors={this.handleAuthorSort} books={this.state.books}/>
          </center>
            <Books books={filtered} myBooks={this.state.myBooks} addToShelf={this.handleShelf} onClick={this.handleClick}/>
        </>
      )
  }
}

export default Main
