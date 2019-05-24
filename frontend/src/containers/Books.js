import React, { Component } from 'react';

import BookCover from '../components/BookCover'
import BookShelf from '../components/BookShelf'



class Books extends Component {



  render(){
    console.log(this.props.myBooks);
      return (
        <div>
            <BookShelf  books={this.props.myBooks}/>
            <h2>Books</h2>
        { this.props.books.map(book =>(
            <>
              <BookCover
                key={book.id}
                books={book}
                toggleDetails={this.props.toggleDetails}
                addToShelf={this.props.addToShelf}
                onClick={this.props.onClick}/>
            </>
          ))
        }
      </div>
      )
  }
}

export default Books
