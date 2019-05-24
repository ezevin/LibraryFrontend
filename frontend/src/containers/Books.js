import React, { Component } from 'react';
import { Button, Card, Image, Grid } from 'semantic-ui-react'

import BookCover from '../components/BookCover'
import BookShelf from '../components/BookShelf'



class Books extends Component {

  render(){
    console.log(this.props.myBooks);
      return (
        <div>
          <center><h2>Books</h2></center>
          <div className="ui segment inverted link cards">
            <div className="ui five column grid">
              <div className="row bot-army-row">
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
            </div>
          </div>
      </div>
      )
  }
}

export default Books
