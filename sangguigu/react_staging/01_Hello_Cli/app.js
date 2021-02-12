
import React, { Component } from 'react';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome';
import Test from './components/Test/Test';

class App extends Component{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
    <div>
      <Hello></Hello>
      <Welcome></Welcome>
      <Test></Test>
    </div>
    )
  }
}

export default App