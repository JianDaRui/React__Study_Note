# React生命周期（新）

## 挂载时
- constructor
- getDerivedStateFromProps
- render
- React更新DOM和refs
- **componentDidMount**
  - 常用钩子
  - 场景：开启定时器、发送网络请求、订阅消息
- **componentWillUnmount**
  - 常用
  - 场景：做一些收尾的工作，关闭定时器、取消订阅消息

## 更新时

new Props、 setState、 forceUpdate 触发

- getDerivedStateFromProps：子组件接受props时触发，初次传递props不回触发
- shouldComonentUpdate：判断组件是否需要更新
- render
- getSnapshotBeforeUpdate
- React更新DOM和refs
- componentDidUpdate

## 卸载时

- componentWillUnmount

### 总结

