import React, { Component } from 'react';
import { Button, Card, Image, Grid, Container, Reveal } from 'semantic-ui-react'

class BookCover extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render(){
    // debugger
      const { title, author, genre, description, image, id } = this.props.books

      if(this.state.details === false){
      return(
        <center>
            <Card raised image={image}>
              <div id={id} className="card two wide column">
                  <Image class="ui image" src={image} alt={title} onClick={this.toggleDetails} />
              </div>
            </Card><br />
        </center>
      )}
      else if (this.state.details === true){
        return(
          <center>
            <Card onClick={this.toggleDetails}>
             <Card.Content className="cardBack">
               <Image floated='right' size='mini' src={image} />
               <Card.Header>{title}</Card.Header>
               <Card.Meta>{author}</Card.Meta>
               <Card.Description>
                 {genre} - {description}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
                 <Button color="brown"onClick={() =>this.props.onClick(this.props.books)} >
                   Add To BookShelf
                 </Button>
             </Card.Content>
           </Card>
          </center>
        )
      }
  }
}

export default BookCover
