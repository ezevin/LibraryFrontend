import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AddBook extends Component {

  state = {
    title: "",
    author: "",
    genre: "",
    description: "",
    image: ""
  }

  handleChange = (e, {name}) => {
    const target = e.target.name
    const value = e.target.value
    console.log("target", target, "value", value);
    if (target === 'title'){
      this.setState({title: value},console.log(this.state))
      console.log(this.state)
    } else if (target ==="author"){
      // console.log("author", e.target.value)
      this.setState({author: value})
    }else if (target ==="genre"){
      // console.log("genre", e.target.value)
      this.setState({genre: value})
    } else if (target ==="description"){
      // console.log("description", e.target.value)
      this.setState({description: value})
    } else if (target ==="image"){
      // console.log("image", e.target.value)
      this.setState({image: value})
    }
  }

  handleSubmit = (e) => {
    // debugger
    const {title, author, genre, description, image} = this.state
    // e.preventDefault()
    console.log("submit", this.state);
    fetch('http://localhost:3001/api/v1/books', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title, author, genre, description, image
       })
    })
    .then(res=>res.json())
    .then(data => {this.props.addBooks(data)})
    this.props.history.push("library")
  }


  render(){
    console.log("final", this.state);
    return (
      <center>
      <span className="textMedium">Add A Book To The Library:</span><br /><br />
      <Form onSubmit={this.handleSubmit}>
        <Grid className="">
          <Grid.Column  width={8} className="">
            <label className="color">Title:</label>
             <Form.Input  placeholder='Title' name="title"  onChange={this.handleChange} />
             <label className="color">Genre:</label>
             <Form.Input placeholder='Genre'  name="genre" onChange={this.handleChange} />
          </Grid.Column>
          <Grid.Column width={8} className="">
             <label className="color">Author:</label>
             <Form.Input placeholder='Author' name="author" onChange={this.handleChange} />
             <label className="color">Book Cover (.jpg):</label>
             <Form.Input placeholder='Image' name="image" onChange={this.handleChange} />
         </Grid.Column>
         <Grid.Column width={12}>
         <label className="color">Description:</label>
         <Form.TextArea width={12} placeholder='Description...' name='description' onChange={this.handleChange}/>
         </Grid.Column>
        </Grid><br />
          <Button type='submit' onClick={this.library} color="black">Add Book</Button>
     </Form><br />
     </center>
    )
  }
}

export default AddBook

// <Form.Field placeholder='Description' name="description" control='textarea' onChange={this.handleChange} width={6}/>
