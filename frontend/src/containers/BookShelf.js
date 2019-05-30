import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import MyShelf from '../components/MyShelf'
import FilterOptions from '../components/FilterOptions'

class Bookshelf extends Component {

  render(){
    console.log('BOOK SHELF props', this.props)
    return (
      <div>
        <center><h1 className="textLarge">Your BookShelf </h1></center><br />
        <FilterOptions titles={this.props.titles} authors={this.props.authors} books={this.props.books}  onSearchChange={this.props.onSearchChange} genre={this.props.genre}/> <br />
        <Grid columns={5} className="link cards  ">
          {/*...and here...*/
            this.props.books ? this.props.books.map(book => {
              return <MyShelf key={book.id} books={book} remove={this.props.remove}/>
            }) : null
          }
        </Grid>
      </div>
    );
  }
}

export default Bookshelf
