# 声明周期
## 三个阶段
## Render
纯净且没有副作用，可能会被React暂停，中止或者重启
## Pre-commit阶段
可以读取DOM
## Commit阶段
可以使用DOM, 运行副作用，安排更新

## 三个时刻
创建时
componentDidMount
更新时
componentDidUpdate
卸载时
componentWillUnmount
资源释放

constructor
- 用于初始化内部状态，很少使用
- 唯一可以直接修改State的地方
getDerivedStateFromProps

- 典型场景：表单控件获取默认值
componentDidMount
