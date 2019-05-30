import React, { Component } from 'react';
import { Button, Card, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class BookCover extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  handleMessage = () => {
  }

  render(){
    // debugger
      const { title, author, genre, description, image, id } = this.props.books

      if(this.state.details === false){
      return(
        <center>
            <Card>
              <div id={id} className="card">
                  <Image className="ui image" src={image} alt={title} onClick={this.toggleDetails} />
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
                 <Button  color="brown"onClick={() =>this.props.onClick(this.props.books)} >
                   Add To BookShelf
                 </Button>
                 <Link to="/messages">
                  <Button value={title} onClick={this.props.getTitle}>Leave a Comment</Button>
                 </Link>
             </Card.Content>
           </Card>

          </center>
        )
      }
  }
}

export default BookCover
