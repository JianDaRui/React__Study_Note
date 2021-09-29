import React, { useState, useEffect } from 'react'

export default function EffectCancelDemo() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("订阅一些事件");
    return () => {
      console.log("取消一些事件")
    }
  }, [])

  return (
    <div>
      <h1>EffectCancelDemo</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 5)}>+</button>
    </div>
  )
}
