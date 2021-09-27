const redux = require ('redux');

// store
// 初始化状态
const initialState = {
  counter: 0,
};
// 创建Store
const store = redux.createStore(reducer);

// reducer
// 创建reducer函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NUMBER":
     return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
     return { ...state, counter: state.counter - action.num };
  }
}
// actions
const increment = { type: "INCREMENT"};
const decrement = { type: "DECREMENT"};

const increment_num = { type: "ADD_NUMBER", num: 5};
const decrement_num = { type: "SUB_NUMBER", num: 12};

// dispatch action
store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(increment_num);
store.dispatch(decrement_num);

// 订阅state的修改
store.dispatch(() => {
  console.log("state 发生了变化")
})