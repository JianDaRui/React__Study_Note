import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink/index'
import Message from './Message/index'
import News from './News/index'
export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   // console.log(props)
  // }
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink 
              to="/home/news">
              News
            </MyNavLink>
          </li>
          <li>
            <MyNavLink 
              to="/home/message">
                Message
            </MyNavLink>
          </li>
        </ul>
        {/* 
          <Message />
          <News /> 
        */}
        <Switch>
          <Route path="/home/news" component={ News }></Route>
          <Route path="/home/message" component={ Message }></Route>
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </div>
    )
  }
}
