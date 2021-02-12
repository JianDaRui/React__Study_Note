
import React, { Component } from 'react';
import axios from 'axios'
// import TODOList from './TODOList'
import './app.css'
class App extends Component{
  getData = () => {
    axios.get().then(
      response => {console.log("成功了", response.data)},
      error => {console.log('失败了', error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>过去数据</button>
      </div>
    )
  }
}

export default App