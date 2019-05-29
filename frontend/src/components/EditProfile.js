import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

class EditProfile extends React.Component {

  state = {
    name: "",
    age: null,
    picture: "",
    about_me: ""
  }

  handleChange = (e, {name}) => {
    const value = e.target.value
    const target = e.target.name
    if(target === "name"){
      this.setState({name: value})
    }else if(target === "age"){
        this.setState({age: value})
    }else if(target === "picture"){
        this.setState({picture: value})
    }else if(target === "about"){
      this.setState({about_me: value})
    }
  }

  handleSubmit = (e) => {
    const user = this.props.currentUser
    const { name, age, picture, about_me } = this.state
    console.log("submit", this.state);
    e.preventDefault()
    fetch(`http://localhost:3001/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name, age, picture, about_me
       })
    })
    .then(res=>res.json())
    .then(data => {this.setState(data)})
    this.props.history.push("profile")
  }

  render(){
    return (
      <Form color="black" size="large" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Field
            width={6}
            control={Input}
            name="name"
            label='Name'
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Field
            width={6}
            control={Input}
            name="age"
            label='Age'
            placeholder='Age'
            onChange={this.handleChange}
          />
          <Form.Field
          width={10}
          id='form-input-control-last-name'
          control={Input}
          name="picture"
          label='Profile Picture'
          placeholder='Profile Picture'
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='About Me'
          name="about"
          placeholder='About Me' onChange={this.handleChange}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Update Profile'
        />
      </Form>
    )
  }
}

export default EditProfile
