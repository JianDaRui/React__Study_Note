import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      mouse: false
    }
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  // 勾选、取消勾选
  handleCheck = (id) => {
    return (e) => {
      console.log(e.target.checked)
      const { updateToDo } = this.props
      updateToDo(id, e.target.checked)
    }
  }
  handleDelete = (id) => {
    if(window.confirm('Are you sure ?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { name, done, id } = this.props;
    const { mouse } = this.state
    return (
      <li 
        style={{backgroundColor: mouse ? '#add' : '#fff'}} 
        onMouseEnter={this.handleMouse(true)} 
        onMouseLeave={this.handleMouse(false)} 
        >
        <label>
          <input type="checkbox" checked={ done } onChange={this.handleCheck(id)} />
          <span>{ name }</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'inline-block' :'none' }}>删除</button>
      </li>
    )
  }
}
