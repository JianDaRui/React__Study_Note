import React, { Component } from 'react';

import store from '../store';

import {
  addAction
} from '../store/actionCreators'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }
  increment() {
    store.dispatch(addAction(1));
  }

  addNumber(num) {
    store.dispatch(addAction(num));
  }
  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribue();
  }

  render() { 
    return ( 
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
     );
  }
}
 
export default Home;