
import React, { Component } from 'react';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome';

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
    </div>
    )
  }
}

export default App