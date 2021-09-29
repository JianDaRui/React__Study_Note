import React, { Component, useState } from 'react'

function MultiHookState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(["amos", "老樊"]);
  return (
    <div>
      <div>计数{count}</div>
      <div>年龄{age}</div>
      <ul>
        {
          friends.map(item => {
            return (
              <li kye={item}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default MultiHookState;