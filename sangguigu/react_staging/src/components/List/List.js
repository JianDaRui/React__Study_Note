import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './index.css'
export default class List extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  static propTypes = {
    updateToDo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }
  render() {
    const { todos, updateToDo, deleteTodo } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return (
              <Item { ...item } key ={item.id} updateToDo={ updateToDo } deleteTodo={deleteTodo} />
            )
          })
        }
        
      </ul>
    )
  }
}
