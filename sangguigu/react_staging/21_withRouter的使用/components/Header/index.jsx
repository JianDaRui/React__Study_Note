import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class Header extends Component {
  // withRouter解决在一般组件中使用路由API的问题
  
  render() {
    console.log(this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
      </div>
    )
  }
}
export default withRouter(Header)