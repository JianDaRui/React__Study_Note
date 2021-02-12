import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      mouse: false
    }
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
          <input type="checkbox" defaultChecked={ done } onChange={this.handleCheck(id)} />
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'inline-block' :'none' }}>删除</button>
      </li>
    )
  }
}
