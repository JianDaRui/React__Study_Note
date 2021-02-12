import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
  render() {
    const { users, isLoading, isFirst, error } = this.props
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
