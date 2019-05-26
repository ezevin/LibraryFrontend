import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'


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
    if (target === 'title'){
      console.log("title", e.target.value)
      this.setState({title: value})
    } else if (target ==="author"){
      console.log("author", e.target.value)
      this.setState({author: value})
    }else if (target ==="genre"){
      console.log("genre", e.target.value)
      this.setState({genre: value})
    } else if (target ==="description"){
      console.log("description", e.target.value)
      this.setState({description: value})
    } else if (target ==="image"){
      console.log("image", e.target.value)
      this.setState({image: value})
    }
  }

  handleSubmit = (e) => {
    const {title, author, genre, description, image} = this.state
    e.preventDefault()
    console.log("submit");
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
    this.setState(this.state)
  }

  render(){
    return (
      <center>
      <span className="textMedium">Add A Book To The Library:</span><br /><br />
      <Form onSubmit={this.handleSubmit}>
        <label className="color">Title</label>
         <Form.Input  placeholder='Title' name="title"  onChange={this.handleChange} width={6} />
         <label className="color">Author</label>
         <Form.Input placeholder='Author' name="author" onChange={this.handleChange} width={6} />
         <label className="color">Genre</label>
         <Form.Input placeholder='Genre'  name="genre" onChange={this.handleChange} width={6} />
         <label className="color">Description</label>
         <Form.Field placeholder='Description' name="description" control='textarea' onChange={this.handleChange} width={6}/>
         <label className="color">Book Cover (.jpg)</label>
         <Form.Input placeholder='Image' name="image" onChange={this.handleChange} width={6} />
        <Button type='submit' color="black">Add Book</Button>

     </Form><br />
     </center>
    )
  }
}

export default AddBook
