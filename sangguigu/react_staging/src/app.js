
import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
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
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
