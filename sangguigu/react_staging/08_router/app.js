
import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import About from './page/About/index'
import Home from './page/Home/index'
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
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {
              /* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */
              }
                <Link  to="./about" className="list-group-item active">About</Link>
                <Link  to="./home" className="list-group-item active">Home</Link>
             
              
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
