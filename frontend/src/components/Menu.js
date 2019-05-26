import React, { Component } from 'react'
import { Menu, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MyShelf from './MyShelf'


export default class NavBar extends Component {
  state = {
    name:""
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit = (e) => {
    const {name} = this.state
    e.preventDefault()
    console.log("submit");
    fetch('http://localhost:3001/api/v1/users', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    .then(res=>res.json())
    .then(data => {this.props.addUser(data)})
    this.setState(this.state)
  }

  render() {
    console.log(this.props.users);
    const { activeItem } = this.state

    return (
      <Menu className="inverted menu" display="none">
        <Link to="/library">
          <Menu.Item
            name='library'
            active={activeItem === 'library'}
            >
              Library
          </Menu.Item>
        </Link>
        <Link to="/bookshelf">
        <Menu.Item
          name='library'
          active={activeItem === 'bookshelf'}>
            BookShelf
        </Menu.Item>
        </Link>
        <Link to="/newbook">
          <Menu.Item
            name='addToShelf'
            active={activeItem === 'AddToShelf'}>
            Add a Book
          </Menu.Item>
        </Link>
        <Link to="/profile">
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}>
            Profile
          </Menu.Item>
        </Link>
          {this.props.currentUser ?
          <div onClick={this.props.handleLogout}>
            <Menu.Item
              floated='right'
              name='logout'
              active={activeItem === 'logout'}>
              Logout
            </Menu.Item>
          </div>
          :
          <Link to="/login">
          <Menu.Item
          floated='right'
          name='login'
          active={activeItem === 'login'}>
          Login
          </Menu.Item>
          </Link>
        }
        {
            this.props.currentUser ?
            <div className="">
              {`Welcome ${this.props.currentUser.name}`}
            </div>
            :
            <div className="">
              {`Welcome!`}
            </div>
          }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input placeholder='name' />
        </Form>
      </Menu>
    )
  }
}

// {
