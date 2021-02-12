
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      isFirst: true, // 是否是第一次打开
      isLoading: false, // 是否处于加载中
      error: '', // 请求是否失败
    }
  }
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={ this.updateAppState }/>
        <List { ...this.state }/>
      </div>
    )
  }
}
