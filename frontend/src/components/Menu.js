import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Library'
          active={activeItem === 'library'}
          onClick={this.handleItemClick}
        >
          Library
        </Menu.Item>

        <Menu.Item name='bookshelf' active={activeItem === 'bookshelf'} onClick={this.handleItemClick}>
          BookShelf
        </Menu.Item>

        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
      </Menu>
    )
  }
}
