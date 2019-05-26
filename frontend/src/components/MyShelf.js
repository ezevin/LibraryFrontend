import React, { Component } from 'react';
import { Button, Card, Image, Label } from 'semantic-ui-react'

class MyShelf extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  // onDrag = (e, this.props.books) => {
  //   e.preventDefault()
  //   this.setState({draggedTask: this.props.books})
  //
  // }

  render(){
      const { title, author, genre, image, id } = this.props.books
      if(this.state.details === false){
      return(
        <center>
            <Card raised image={image}>
              <div id={id} className="card two wide column" onDrag={(e) => {console.log("drag")}}>
                  <Image class="ui image" src={image} alt={title} onClick={this.toggleDetails} />
              </div>
            </Card>
        </center>
      )}
      else if (this.state.details === true){
        return(
          <center>
            <Card onClick={this.toggleDetails}>
             <Card.Content>
               <Image floated='right' size='mini' src={image} />
               <Card.Header>{title}</Card.Header>
               <Card.Meta>{author}</Card.Meta>
               <Card.Description>
                 {genre}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='two buttons'>

                 <Button color='red' onClick={()=>this.props.remove(this.props.books)}>
                   Remove From BookShelf
                 </Button>
                 <Button.Or />
                 <Button basic color='brown'>
                    I've Read This
                 </Button>
               </div>
             </Card.Content>
           </Card>
          </center>
        )
      }
  }
}

export default MyShelf
