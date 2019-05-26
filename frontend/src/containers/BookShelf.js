import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react'

import MyShelf from '../components/MyShelf'
import FilterOptions from '../components/FilterOptions'

class Bookshelf extends Component {

  render(){
    return (
        <div>
        <center><span className="textMedium">  Your BookShelf </span></center><br />
        <FilterOptions titles={this.props.titles} authors={this.props.authors} books={this.props.books}  onSearchChange={this.props.onSearchChange}/> <br />
          <div className="ui inverted link cards">
          <div className="ui five column grid">
            <div className="row bot-army-row">
              {/*...and here...*/
                this.props.books.map(book => {
                    return <MyShelf key={book.id} books={book} remove={this.props.remove}/>
                })
                }
            </div>
          </div>
        </div>
      </div>

      );
  }
}

export default Bookshelf
