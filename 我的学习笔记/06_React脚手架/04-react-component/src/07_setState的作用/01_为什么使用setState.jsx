import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  clickHandle() {
    this.setState({
      count: this.state.count + 1;
    })
  }
  render() { 
    const { count } = this.state
    return ( 
      <div>
        <div>当前计数：{count}</div>
        <button onClick={() => {this.clickHandle}}>button</button>
      </div>
    );
  }
}

export default App;