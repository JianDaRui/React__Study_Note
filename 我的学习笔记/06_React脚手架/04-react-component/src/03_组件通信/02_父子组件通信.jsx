import React, { Component } from 'react';


class ChildCpn extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    console.log(this.props, "componentDidMount");
  }

  render() {
    // console.log(this.props, "render");
    const {name, age, height} = this.props;
    return (
      <h2>子组件展示数据: {name + " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="daRui" age="18" height="1.88"/>
        <ChildCpn name="Amos" age="20" height="1.98"/>
      </div>
    )
  }
}
