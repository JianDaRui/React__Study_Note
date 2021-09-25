import React, { Component } from 'react';
import NavBar from './NavBar';
/** 
 * React 中的slot实现方式：
 * 直接在组件标签之间传递组件
 * 在组件中通过this.props.children获取传入的内容
 * 也可以直接通过 props传递
*/ 
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
        <NavBar>
          <div>Left</div>
          <div>Center</div>
          <div>Right</div>
        <NavBar/>
        <NavBar2 leftSlot={ <div>Left</div> }
                centerSlot={ <div>Center</div> }
                rightSlot={ <div>Right</div> }/>
      </div>
    );
  }
}
 
export default App;