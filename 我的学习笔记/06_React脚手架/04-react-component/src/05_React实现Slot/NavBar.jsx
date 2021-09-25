import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    );
  }
}

export default NavBar;