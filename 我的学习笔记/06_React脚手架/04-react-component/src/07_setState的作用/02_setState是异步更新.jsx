import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "world"
    }
  }
  clickHandle() {
    this.setState({
      message: "hello"
    })
    console.log(this.state.message)
  }
  render() { 
    const { message } = this.state
    return ( 
      <div>
        <div>当前计数：{message}</div>
        <button onClick={() => {this.clickHandle}}>button</button>
      </div>
    );
  }
}

export default App;