import React, { Component } from 'react';
import BookCover from './BookCover'

class Bookshelf extends Component {

  render(){
    return (
        <div className="ui segment inverted purple">
          <div className="ui five column grid">
            <div className="row bot-army-row">
              {/*...and here...*/
                this.props.books.map(book => {
                    return <BookCover key={book.id} books={book}/>
                })
                }
            <center><h1>  Your BookShelf </h1></center>
            </div>
          </div>
        </div>
      );
  }
}

export default Bookshelf
