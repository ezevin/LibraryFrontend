import React, { Component } from 'react';
import { Button, Card, Image, Dimmer, Header, Segment  } from 'semantic-ui-react'

class MyShelf extends Component {

  state = {
    details: false,
    read: false
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  handleRead = (e) => {
    console.log(e.target);
    const back = e.target.id
    e.preventDefault()
    this.setState({read: !this.state.read})
    if (this.state.read === true){
      return   e.target.className = "black"
    }
  }
  // onDrag = (e, this.props.books) => {
  //   e.preventDefault()
  //   this.setState({draggedTask: this.props.books})
  //
  // }

  render(){
      const { title, author, genre, image, description, id } = this.props.books

      const { active } = this.state

      if(this.state.details === false){
      return(
        <center>
            <Card >
            <div id={id} className="card" onDrag={(e) => {console.log("drag")}}>
              <Dimmer.Dimmable as={Segment} dimmed={active}>
                  <Image class="ui image" src={image} alt={title} onClick={this.toggleDetails} />
              <Dimmer active={active} onClickOutside={this.handleHide} />
              </Dimmer.Dimmable>
              </div>
            </Card>
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
                <Card.Meta>{genre}</Card.Meta>
               <Card.Description>
                 {description}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='two buttons'>
                 <Button color='red' onClick={()=>this.props.remove(this.props.books)}>
                   Return to Library
                 </Button>
                 <Button id={id} basic color='brown'
                    onClick={this.handleShow}>
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
