import React, { Component } from 'react'
// 引入store
import store from '../../redux/store'
// 引入action
import  {createDecrementAction,createIncrementAction} from '../../redux/count_action'
export default class Count extends Component {
  constructor(params) {
    super(params)
    this.state = {
      carName: { name: "玛莎拉蒂910"}
    }
  }
  // 放在入口文件监听 store中state的变化
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  // 加
  increment = () => {
    let { value } = this.selectName
    // 通知redux加value
    console.log(store)
    store.dispatch(createIncrementAction( value*1))
  }
  // 减
  decrement = () => {
    let { value } = this.selectName
    store.dispatch(createDecrementAction(value*1))
  }
  // 奇数加
  oddIncrement = () => {
    let { value } = this.selectName
    const count= store.getState()
    if(count%2) {
      store.dispatch(createIncrementAction( value*1))
    }
    
  }
  // 异步加
  asyncIncrement = () => {
    let { value } = this.selectName
    setTimeout(() => {
      store.dispatch(createIncrementAction( value*1))
    }, 1000)
  }
  render() {
    // const { count } = this.state
    return (
      <div>
        <h1>当前求和的值{ store.getState() } </h1>
        <select ref={(c) => this.selectName = c} id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={ this.increment }>+</button>&nbsp;
        <button onClick={ this.decrement }>-</button>&nbsp;
        <button onClick={ this.oddIncrement }>和为奇数再加</button>&nbsp;
        <button onClick={ this.asyncIncrement }>异步加</button>&nbsp;
      </div>
    )
  }
}
