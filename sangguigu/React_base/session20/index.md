# React生命周期

## 挂载时
- constructor
- componentWillMount
- render
- **componentDidiMount**
  - 常用钩子
  - 场景：开启定时器、发送网络请求、订阅消息
- **componentWillUnmount**
  - 常用
  - 场景：做一些收尾的工作，关闭定时器、取消订阅消息

## 父组件render

- componetWillReceiveProps：子组件接受props时触发，初次传递props不回触发
- shouldComonentUpdate：判断组件是否需要更新
- componentWillUpdate
- render
- componentDidUpdate
- **componentWillUnmount**

## setState

- shouldComonentUpdate
- componentWillUpdate
- render
- componentDidUpdate
- **componentWillUnmount**

## forceUpdate 强制更新

- componentWillUpdate
- render
- componentDidUpdate
- **componentWillUnmount**

### 总结

