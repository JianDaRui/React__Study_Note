import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  // 可以用于模拟一些生命周期的函数
  useEffect(() => {
    document.title = count;
  })

  return (
    <div>
      当前技术：{ count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;