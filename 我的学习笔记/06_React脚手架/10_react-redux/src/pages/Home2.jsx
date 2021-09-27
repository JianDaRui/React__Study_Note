import React, { Component } from 'react';

import store from '../store';
import connect from '../utils'
import {
  addAction,
  incAction
} from '../store/actionCreators'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
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
const mapStateToProps = state => {
  return {
    count: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    decrement:function() {
      dispatch(incAction())
    },
    subNumber: function(num) {
      dispatch(addAction(num))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);