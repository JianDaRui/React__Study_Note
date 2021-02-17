import React, { PureComponent, StrictMode } from 'react'

class Demo extends PureComponent {
  UNSAFE_componentWillMount() {
    // 不安全的生命周期
  }
  render() {
    return (
      
      <>
        <div>
          Fragment
        </div>
        <div>
          Fragment
        </div>
      </>
    )
  }
}
export default class App extends PureComponent {
  render() {
    return (
      // 识别不安全的生命周期
      // 识别即将废弃的API
      // ref的字符串API
      // 检查意外的副作用
      // constructor 会被调用两次的情况
      // 检测过时的 context API
      <StrictMode>
        <Demo />
        <div>
          Fragment
        </div>
        <div ref="fragment">
          Fragment
        </div>
        <div>
          Fragment
        </div>
      </StrictMode>
    )
  }
}
