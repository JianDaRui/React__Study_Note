import React, { PureComponent, Fragment } from 'react'

class Demo extends PureComponent {
  render() {
    return (
      /* 短语法 */
      // 如果遍历时 添加key属性 短语法不可以添加任何属性
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
// Fragment 可以解决 只有一个跟标签的问题
export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Demo />
        <div>
          Fragment
        </div>
        <div>
          Fragment
        </div>
        <div>
          Fragment
        </div>
      </Fragment>
    )
  }
}
