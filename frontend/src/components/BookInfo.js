import React, { Component } from 'react';


class BookInfo extends Component {

  state = {
    details: true
  }

  toggleDetails = () =>{
    this.setState(prevState => ({details: !prevState.details}))
  }
  render(){
    const { title, author, genre, image, id } = this.props.books
    if(this.state.details){
      return(
        <div id={id} class="card">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{genre}</h3>
        </div>
      )
    }else {
      return <div id={id} className="card two wide column">
        <img src={image} alt={title} onClick={this.toggleDetails} />
      </div>
    }
  }
}

export default BookInfo
