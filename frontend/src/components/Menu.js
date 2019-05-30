import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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
    // console.log(this.props.users);
    const { activeItem } = this.state

    return (
      <Menu className="inverted menu" display="none">
        <Link to="/library">
          <Menu.Item
            name='library'
            active={activeItem === 'library'}
            >
            <Icon className="icon" name="book" />  Library
          </Menu.Item>
        </Link>
        <Link to="/bookshelf">
        <Menu.Item
          name='library'
          active={activeItem === 'bookshelf'}>
            <Icon className="icon" name="book" />BookShelf
        </Menu.Item>
        </Link>
        <Link to="/newbook">
          <Menu.Item
            name='addToShelf'
            active={activeItem === 'AddToShelf'}>
            <Icon  bordered className="icon" name="book" />Add a Book
          </Menu.Item>
        </Link>
        <Link to="/profile">
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}>
            <Icon  bordered className="icon" name="address card outline" />Profile
          </Menu.Item>
        </Link>
          {
            this.props.currentUser &&
            <div className="">
            <span>  {`Welcome ${this.props.currentUser.username}!`} </span>
            </div>
          }
          {this.props.currentUser ?
          <div onClick={this.props.handleLogout}>
            <Menu.Item
              float='right'
              name='logout'
              active={activeItem === 'logout'}>
              <Icon  bordered className="icon" name="user secret" />Logout
            </Menu.Item>
          </div>
          :
          <Link to="/login">
          <Menu.Item
          float='right'
          name='login'
          active={activeItem === 'login'}>
            <Icon  bordered className="icon" name="user secret" />Login
          </Menu.Item>
          </Link>
        }
      </Menu>
    )
  }
}

// {




// <Form onSubmit={this.handleSubmit}>
//   <Form.Input placeholder='name' />
// </Form>
