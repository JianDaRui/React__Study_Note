// 该文件用于创建reducer
// 接受两个状态一个preState, action
const initState = 0;
function countReducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState;
  }
}

export default countReducer
