import React, { Component } from 'react';


class CounterButton extends Component {
  render() {
    const {onClick} = this.props;
    return <button onClick={() => onClick(5)}>+5</button>
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  increment(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        <CounterButton onClick={val => this.increment(val)} name="why"/>
      </div>
    )
  }
}
