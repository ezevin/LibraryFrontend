import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MyShelf from './MyShelf'


export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="inverted green">
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
        <Link to="/profile">
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}>
            Profile
          </Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item
            floated='right'
            name='login'
            active={activeItem === 'login'}>
            Login
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
