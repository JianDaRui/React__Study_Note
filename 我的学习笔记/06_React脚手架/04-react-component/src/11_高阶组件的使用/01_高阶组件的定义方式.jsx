import React, { Component, PureComponent } from 'react'
// 高阶组件的学习
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>App</div>
     );
  }
}

function enhanceComponent(WrapperComponent) {
  return class extends PureComponent {
    render() {
      return (
        <WrapperComponent {...this.props}></WrapperComponent>
      )
    }
  }
}

function enhanceComponentFn(WrapperComponent) {
  return function (props) {
    return <WrapperComponent {...props}></WrapperComponent>
  }
}
const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;