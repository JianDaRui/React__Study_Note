// 该文件用于创建reducer
// 接受两个状态一个preState, action
import {DECREMENT, INCREMENT} from '../../src/redux/constant'
const initState = 0;
function countReducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case 'INCREMENT':
      return preState + data;
    case 'DECREMENT':
      return preState - data;
    default:
      return preState;
  }
}

export default countReducer
