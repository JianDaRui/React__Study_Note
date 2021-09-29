import React, { useState } from 'react'

export default function ComplexHookState() {

  const [friends, setFrineds] = useState(["kobe", "lilei"]);
  const [students, setStudents] = useState([
    { id: 110, name: "why", age: 18 },
    { id: 111, name: "Amos", age: 30 },
    { id: 112, name: "lilei", age: 25 },
  ])

  function addFriend() {
    // 错误做法
    // 必须保证状态的不可变性
    friends.push("hmm");
    setFrineds(friends);
  }

  function incrementAgeWithIndex(index) {
    // 正确做法
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表:</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFrineds([...friends, "tom"])}>添加朋友</button>
      {/* 错误的做法 */}
      <button onClick={addFriend}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id}>
                <span>名字: {item.name} 年龄: {item.age}</span>
                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
