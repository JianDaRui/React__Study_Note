import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './index.css'
export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isFirst: true, // 是否是第一次打开
      isLoading: false, // 是否处于加载中
      error: '', // 请求是否失败
    }
  }
  componentDidMount() {
    console.log('订阅消息')
    PubSub.subscribe("state", (msg, data) => {
      console.log(data)

      this.setState(data)
    })
  }
  render() {
    const { users, isLoading, isFirst, error } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键，进行搜索</h2> :
          isLoading ?  <h2>正在加载......</h2> :
          error ? <h2 style={{color: "red"}}>{error}</h2> :
          users.map(user => {
            return (
              <div key={ user.id } className="card">
                <a rel="noreferrer" href={ user.html_url } target="_blank">
                  <img alt="avatar" src={ user.avatar_url } style={{ width: '100px' }} />
                </a>
                <p className="card-text">{ user.login }</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}
