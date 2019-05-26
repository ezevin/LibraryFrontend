import React, { Component } from 'react';
import { Search, Button, Card, Image, Grid, Container } from 'semantic-ui-react'

import BookCover from '../components/BookCover'
import BookShelf from './BookShelf'
import FilterOptions from '../components/FilterOptions'



class Books extends Component {

  render(){
    console.log(this.props.myBooks);
      return (
        <div className="">
          <center><span className="textMedium">Books</span></center><br />
          <FilterOptions
            titles={this.props.titles}
            authors={this.props.authors}
            books={this.props.books}  onSearchChange={this.props.onSearchChange}
            filter={this.props.filter}/><br /><br />
            <Grid columns={5}>

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

          </Grid>

      </div>
      )
  }
}

export default Books

// <div className="ui inverted link cards">
// <div className="ui five column grid">
// <div className="row bot-army-row">

//     </div>
//   </div>
// </div>
