# JSX
> 可以再JS代码中直接写HTML标记

- 本质：动态创建组件的语法糖
- React.createElement

## JSX表达式
- 本身就是表达式
- 属性中使用表达式
- 延展属性
- 表达式作为子元素

```js
const element = <h1>Hello world<h1>;
<MyComponent foo={1+2+3}/>
let obj = {}
<MyComponent2 foo={...obj}/>
```

优点：
- 声明式的方式创建界面
- 代码动态创建界面的灵活性
- 不需要学习新的模板语言

## 约定
- React认为小写的Tag是原生DOM节点，
- 大写字母开头认为是自定义组件
- JSX标记可以直接使用属性语法，例如 <menu.item />