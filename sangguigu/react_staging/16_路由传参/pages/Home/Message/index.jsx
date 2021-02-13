import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/index'
export default class Message extends Component {
  constructor(params) {
    super(params)
    this.state = {
      messageArr: [
        {id: '01', title: 'message01'},
        {id: '02', title: 'message02'},
        {id: '03', title: 'message03'}
      ]
    }
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>
                  {/* 携带params参数 */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{ item.title } </Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收parmas参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    )
  }
}
