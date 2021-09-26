import React, { PureComponent } from 'react';

import { EventEmitter } from 'events';

// 全局事件传递：使用 events 库

// 事件总线: event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    // 监听事件
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(num, message) {
    console.log(num, message);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emitEvent()}>点击了profile按钮</button>
      </div>
    )
  }

  emitEvent() {
    // 触发事件
    eventBus.emit("sayHello", 123, "Hello Home");
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}

