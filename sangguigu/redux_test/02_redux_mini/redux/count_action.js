import {DECREMENT, INCREMENT} from './constant'
// 用于生成action
export function createIncrementAction (data) {
  return {
    type: INCREMENT,
    data
  }
}

export function createDecrementAction (data) {
  return {
    type: DECREMENT,
    data
  }
}