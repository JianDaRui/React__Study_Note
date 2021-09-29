import React, { Component, useState } from 'react';

// import CounterClass from './01_体验Hooks/01_counter-class'
import CounterHook from './01_体验Hooks/02_counter-hook'
import MultiHook from './02_useState的使用/01_多个状态的使用';
import MultiHook2 from './02_useState的使用/02_复杂状态的修改';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        {/* <CounterClass></CounterClass> */}
        <CounterHook></CounterHook>
        <MultiHook></MultiHook>
        <MultiHook2></MultiHook2>
      </div>
    );
  }
}

export default App;
