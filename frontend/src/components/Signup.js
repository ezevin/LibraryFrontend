import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Signup extends Component {

  state = {
    name: "",
    password: "",
    error: false
  }

  handleChange = (e, {name}) => {
    const target = e.target.name
    const value = e.target.value
    console.log("target", target, "value", value);
    if (target === "name"){
      this.setState({name: value}, console.log(this.state))
    }else if (target === "password"){
      this.setState({password: value}, console.log(this.state))
    }
  }

  handleLogin = e => {
    const { name, password } = this.state

    // e.preventDefault()
    fetch('http://localhost:3001/api/v1/auth',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
       })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error){
        this.setState({error: true})
        console.log(data);
      } else {
        this.props.handleUserLogin(data)
        this.props.history.push("/bookshelf")
        // console.log("data from api", data)
      }
    })
    // this.setState(initialState)
  };

  handleSubmit = (e) => {
    const {name, password} = this.state
     e.preventDefault()
     console.log('works');
     fetch('http://localhost:3001/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
       })
    })
    .then(res=> res.json())
    .then(data => {this.props.addUsers(data)})
    .then(data => this.handleLogin(e))
    // .then(()=> this.props.fetchUserData())
    // this.props.history.push("/bookshelf")
  }

  render(){
    console.log("final", this.state);
      return (
        <center>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid icon='user'
              name="name"
              iconPosition='left'
              label='User Name:'
              placeholder='username'
              onChange={this.handleChange} />
              <Form.Input fluid icon='lock'
              name="password"
              iconPosition='left'
              label='Password:'
              placeholder='password'
              type="password"
              onChange={this.handleChange}/>
            </Form.Group>

              <Button type="submit" color='black'>Create Account</Button>
          </Form>
        </center>
      )
  }
}

export default Signup
