import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import {  } from 'semantic-ui-react'


import Books from './Books'
import BookShelf from './BookShelf'
import LoginPage from './LoginPage'
import AddBook from '../components/AddBook'
import Profile from '../components/Profile'
import Messages from '../components/Messages'
import EditProfile from '../components/EditProfile'

class Main extends Component {

  state = {
    books: [],
    myBooks: [],
    library: [],
    search: '',
    title: '',
    users: [],
    shelves: [],
    genre: [],
    currentId: ""
  }

  componentDidMount(){
    // const token = localStorage.getItem("token")
    // if (token) {
    //   this.props.history.push("login")
    // } else {
      fetch(`http://localhost:3001/api/v1/books`)
      .then(res => res.json())
      .then(data => this.setState({books:data}))

      fetch(`http://localhost:3001/api/v1/users`)
      .then(res => res.json())
      .then(data => this.setState({users:data}))

      fetch(`http://localhost:3001/api/v1/book_shelves`)
      .then(res => res.json())
      .then(data => this.setState({shelves:data}))

    }


  /**********************/
  //  Filter Search     //
  /**********************/

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
    const newBook = this.state.books.filter(book => {
      return book.genre === genre
    })
    this.setState({books: newBook})
  }

  /**********************/
  //  End Filter Search //
  /**********************/

  /**********************/
  //       Library      //
  /**********************/

  handleClick = (book) => {
    console.log("book id", book.id)
    // if(!this.state.myBooks.includes(book))
    // this.setState({myBooks: [...this.state.myBooks, book]})
    const cId = this.props.currentUser.id
    // const userBooks = this.props.userBooks.map(book => book.book_id)
    // const filtered = this.state.books.filter(book => {
    //   if(!userBooks.includes(book.id)){
    //     return book
    //   }
    // })

    console.log("id", cId);
    this.state.users.filter(user => {
      if(user.id === cId){
        fetch('http://localhost:3001/api/v1/book_shelves', {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
             book_id: book.id, user_id: cId,
           })
        })
        .then(res=>res.json())
        .then(data => {
          this.setState({shelves: [...this.state.shelves, data]}, console.log("new book",this.state.shelves))
        })
        .then(()=> this.props.fetchUserbooks())
      }
    })
  }

  getTitle = (e) => {
    console.log("TITLE:",e.target.value)
    this.setState({title: e.target.value})
  }

  libraryBooks = () => {
    // const bookId = this.state.shelves.map(shelf => {
    //   if(shelf.user_id === this.props.id){
    //     return shelf.book_id
    //   }})
    // const filteredBooks = this.state.books.filter(book => {
    //   if(!bookId.includes(book.id) ){
    //     return book
    //   }})
    // this.setState({library:filteredBooks})
  }
  /**********************/
  //    End Library     //
  /**********************/

  /**********************/
  //      BookShelf     //
  /**********************/

  returnBook = (book) => {
    const selectedShelf = this.state.shelves.find(shelf => shelf.book_id === book.id && shelf.user_id === this.props.id)
    fetch(`http://localhost:3001/api/v1/book_shelves/${selectedShelf.id}`, {
      method: "delete"
    })
      .then(()=> this.props.fetchUserbooks())
  }

  /**********************/
  //   End Bookshelf    //
  /**********************/

  /**********************/
  //     Add Books      //
  /**********************/

  addBooks = book => {
    console.log('in addBooks', book);
    console.log('this is what a book is supposed to look like', this.state.books[0]);
    this.setState({ books: [...this.state.books, book] })
  }

  /**********************/
  //    End Add Books   //
  /**********************/

  /**********************/
  //     Add Users      //
  /**********************/

  addUsers = user => {
    this.setState({ users: [...this.state.users, user] })
  }

  /**********************/
  //    End Add Users   //
  /**********************/

  /**********************/
  //   Add To Shelf     //
  /**********************/

  addUserBook = book => {
    this.setState({ shelves: [...this.state.shelves, book] })
  }
  /**********************/
  //  End Add To Shelf  //
  /**********************/

  render(){


    console.log("library", this.state.library)
    const genre = this.state.books.map(book => book.genre)
    /**********************/
    // Library Book Filter//
    /**********************/
    const currentUser = this.props.currentUser

    let id = currentUser ? currentUser.id : null

    const bookId = this.state.shelves.map(shelf => {
      if(shelf.user_id === id){
        return shelf.book_id
      }})

    const filteredBooks = this.state.books.filter(book => {
      if(!bookId.includes(book.id) ){
        // console.log("?", book.title);
        return book.title.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })

    console.log('USER BOOKS THING',
    this.props.userBooks)

      return(
        <>
          <Route path="/login" render={() => {
            return <LoginPage  handleUserLogin={this.props.handleUserLogin}  handleLogout={this.props.handleLogout} addUsers={this.addUsers} users={this.state.users} currentUser={this.props.currentUser}/>}}/> <br />

          <Route path="/library" render={(props) =>
            <Books {...props}
              books={filteredBooks}
              myBooks={this.state.myBooks}
              addBook={this.handleClick}
              titles={this.handleTitleSort}
              authors={this.handleAuthorSort}
              genres={this.handleGenreSort}
              genreArr={this.state.genre}
              onSearchChange={this.handleSearch}
              getTitle={this.getTitle}
              shelf={this.state.bookshelf} addUserBook={this.addUserBook} currentUser={this.props.currentUser}
              genre={genre}
          />} />

          <Route path="/bookshelf" render={(props) =>
            <BookShelf {...props}
              books={this.props.userBooks}
              remove={this.returnBook}
              onClick={this.handleClick}
              titles={this.handleTitleSort}
              authors={this.handleAuthorSort}
              onSearchChange={this.handleSearch}
              currentUser={this.props.currentUser}
              genre={genre}
              />} />

          <Route path="/newbook" render={(props) => <AddBook {...props} addBooks={this.addBooks}/>} />

          <Route path="/profile" render={(props) => <Profile {...props} currentUser={this.props.currentUser} users={this.state.users} fetchUserData={this.props.fetchUserData}/>}/>

          <Route path="/messages" render={(props) => <Messages {...props} title={this.state.title}/>}/>

          <Route path="/editProfile" render={(props) => <EditProfile {...props} currentUser={this.props.currentUser} users={this.state.users}/>}/>
        </>
      )
  }
}

export default withRouter(Main)
