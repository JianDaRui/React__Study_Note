import React, { Children, Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { children } = this.props
    return (
      <div>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    );
  }
}

export default NavBar;