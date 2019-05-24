import React, { Component } from 'react';
import MyShelf from './MyShelf'

class Bookshelf extends Component {

  render(){
    return (
        <div className="ui segment inverted purple link cards">
          <div className="ui five column grid">
            <div className="row bot-army-row">
            <center><h1>  Your BookShelf </h1></center>
              {/*...and here...*/
                this.props.books.map(book => {
                    return <MyShelf key={book.id} books={book}/>
                })
                }
            </div>
          </div>
        </div>
      );
  }
}

export default Bookshelf
