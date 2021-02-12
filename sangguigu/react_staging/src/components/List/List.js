import React, { Component } from 'react'
import Item from '../Item/Item'
import './index.css'
export default class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return (
              <Item { ...item } key ={item.id} />
            )
          })
        }
        
      </ul>
    )
  }
}
