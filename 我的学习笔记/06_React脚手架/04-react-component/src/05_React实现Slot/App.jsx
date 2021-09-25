import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { children } = this.props;
    return (
      <div>
        App
        <NavBar />
        <NavBar />
        <NavBar />
      </div>
    );
  }
}
 
export default App;