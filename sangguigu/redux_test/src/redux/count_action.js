// import store from './store'
import {
  DECREMENT,
  INCREMENT
} from '../../src/redux/constant'
// 用于生成action
export function createIncrementAction(data) {
  return {
    type: INCREMENT,
    data
  }
}

export function createDecrementAction(data) {
  return {
    type: DECREMENT,
    data
  }
}
// 所谓的异步Action 就是指action的值为函数
export const createIncrementAsyncAction = (data, wait = 300) => {
  return (disptach) => {
    setTimeout(() => {
      disptach(createIncrementAction(data))
    },wait)
  }
  
}