import React, { Component } from 'react'

import store from '../store'
import { 
  subAction,
  decrement
} from "../store/actionCreators";

import connect from '../utils/connect'
class About extends Component {
  constructor(props) {
    super(props);
    console.log(store)
    this.state = {
      count: store.getState().counter
    }
  }
  decrement(num) {
    store.dispatch(subAction(num));
  }

  subNumber(num) {
    store.dispatch(subAction(num));
  }
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        count: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unSubscribe();
  }


  render() { 
    const { count } = this.state
    return ( 
      <div>
        <h1>About</h1>
        <h2>当前计数：{ count }</h2>
        <button onClick={() => this.decrement(-3)}>-3</button>
        <button onClick={() => this.subNumber(-5)}>-5</button>
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
      dispatch(decrement)
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);