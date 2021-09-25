import React, { Component } from 'react';

// setState 同步更新
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <button id="button">button</button>
      </div>
    )
  }

  componentDidMount() {
    // 情况二： 原始dom监听中 是同步的
    // React 中的事件合成机制
    document.getElementById("button").addEventListener("click", e =>   {
      this.setState({
        message: "你好啊,李银河"
      })
      console.log(this.state.message);
    })
  }

  changeText() {
    // 情况一 定时器中执行是同步
    setTimeout(() => {
      this.setState({
        message: "你好啊,李银河"
      })
      console.log(this.state.message);
    }, 0)
  }
}
