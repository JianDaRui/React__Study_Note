import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0
     }
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() { 
    const {counter} = this.state
    return (
      <>
        <div>当前计数：{counter}</div>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </>
    );
  }
}
 
export default Counter;