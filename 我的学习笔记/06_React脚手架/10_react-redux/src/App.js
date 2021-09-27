import React, { Component } from 'react';

import About from './pages/About'
import Home from './pages/Home'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <Home />
        <About/>
      </div>
    );
  }
}
 
export default App;

