import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import BookCover from '../components/BookCover'
import FilterOptions from '../components/FilterOptions'



class Books extends Component {

  render(){
    // console.log(this.props.books);
      return (
        <div className="">
            <center><span className="textLarge">Books</span></center>
            <FilterOptions
              titles={this.props.titles}
              authors={this.props.authors}
              genres={this.props.genres}
              books={this.props.books}  onSearchChange={this.props.onSearchChange}
              filter={this.props.filter} genre={this.props.genre}/><br /><br />
              <Grid columns={5} className="link cards ">
                    { this.props.books.map(book =>(
                      <>
                          <BookCover
                            key={book.id}
                            books={book}
                            toggleDetails={this.props.toggleDetails}
                            onClick={this.props.onClick}
                            getTitle={this.props.getTitle}/>
                      </>
                      ))
                    }
          </Grid>
        </div>
      )
  }
}

export default Books
