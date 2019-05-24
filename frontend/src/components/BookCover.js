import React, { Component } from 'react';
import BookInfo from './BookInfo'
import { Button, Card, Image } from 'semantic-ui-react'

class BookCover extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render(){
      const { title, author, genre, image, id } = this.props.books
      if(this.state.details === false){
      return(
        <center>
          <Card.Group itemsPerRow={2}>
            <Card raised image={image}>
              <div id={id} className="card two wide column">
                  <Image class="ui image" src={image} alt={title} onClick={this.toggleDetails} />
              </div>
            </Card>
          </Card.Group>
        </center>
      )}
      else if (this.state.details === true){
        return(
          <center>
            <Card>
             <Card.Content>
               <Image floated='right' size='mini' src={image} />
               <Card.Header>{title}</Card.Header>
               <Card.Meta>{author}</Card.Meta>
               <Card.Description>
                 {genre}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button basic color='green' onClick={() =>this.props.onClick(this.props.books)} positive>
                   Add To BookShelf
                 </Button>
                 <Button.Or />
                 <Button basic color='red' onClick={this.toggleDetails}>
                   Cancel
                 </Button>
               </div>
             </Card.Content>
           </Card>
          </center>
        )
      }
  }
}

export default BookCover
