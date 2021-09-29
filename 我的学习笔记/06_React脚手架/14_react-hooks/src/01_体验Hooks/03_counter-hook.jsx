import React, { Component, useState } from 'react'

function Counter(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <div>当前计数：{counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Counter;