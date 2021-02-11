- 以组件的方式考虑页面的组建工作

## 理解React组件
Props + State  === 》 View

1. React 组件一般不提供方法，而是某种状态机
2. React 组件可以理解为一个纯函数
3. 单向数据绑定

## 创建一个组件

- 创建静态UI
- 考虑组件的状态组成
- 考虑组件的交互方式

## 受控组件 VS 非受控组件
受控组件：状态来自外部，例 input
非受控组件：状态来自内部，有内部维护

## 创建组件原则：单一职责原则
- 每个组件只做一件事情
- 如果组件变得复杂，那么应该拆分成小组件

## 数据状态管理： DRY原则
- 能计算得到的状态就不要单独存储
- 组件尽量无状态，所需数据通过props获取