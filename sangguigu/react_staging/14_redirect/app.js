
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About/index'
import Home from './pages/Home/index'
import Header from './components/Header/index'
import MyNavLink from './components/MyNavLink/index.jsx'
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {
              /* 
                <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> 
              */
              }
                <MyNavLink 
                  to="./about" 
                  activeClassName="active" 
                  className="list-group-item">
                  About
                </MyNavLink>
                <MyNavLink 
                  to="./home"
                  activeClassName="active" 
                  className="list-group-item">
                    Home
                </MyNavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 
                  Switch 匹配成功即不再继续往下匹配--高效
                  path---component是一一对应的关系
                  Switch 可以提高路由匹配的效率————单一匹配
                */}
                {/* 
                  exact开启严格匹配
                */}
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route exact={ true } path="/home" component={Home}></Route>
                  {/* 路由重定向 */}
                  <Redirect to="about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
