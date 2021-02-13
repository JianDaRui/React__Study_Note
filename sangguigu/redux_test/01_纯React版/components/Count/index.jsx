import React, { Component } from 'react'

export default class Count extends Component {
  constructor(params) {
    super(params)
    this.state = {
      count: 0
    }
  }
  // 加
  increment = () => {
    let { value } = this.selectName
    const { count } = this.state
    this.setState({
      count: count + value*1
    })
  }
  // 减
  decrement = () => {
    let { value } = this.selectName
    const { count } = this.state
    this.setState({
      count: count - value*1
    })
  }
  // 奇数加
  oddIncrement = () => {
    let { value } = this.selectName
    const { count } = this.state
    if(count%2) {
      this.setState({
        count: count + value*1
      })
    }
    
  }
  // 异步加
  asyncIncrement = () => {
    let { value } = this.selectName
    const { count } = this.state
    setTimeout(() => {
      this.setState({
        count: count + value*1
      })
    }, 1000)
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和的值{count} </h1>
        <select ref={(c) => this.selectName = c} id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={ this.increment }>+</button>&nbsp;
        <button onClick={ this.decrement }>-</button>&nbsp;
        <button onClick={ this.oddIncrement }>和为奇数再加</button>&nbsp;
        <button onClick={ this.asyncIncrement }>异步加</button>&nbsp;
      </div>
    )
  }
}
