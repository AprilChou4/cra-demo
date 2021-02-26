import React, { useState, memo, useMemo, useCallback } from 'react'
import ChildClass from './ChildClass'
const Child = (props) => {
    const date = new Date()
  
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  };
const Child1 = memo((props) => {
    const date = new Date()
  console.log(props,'render--------')
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  })

const Parent = () => {
  const [count, setCount] = useState(0)
console.log('parent----render')
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => {
        setCount(1)
      }}>+1</button>
      <h3>ChildClass</h3><ChildClass/>
      <h3>noMemo:</h3> <Child count={count}/>
      <h3>withMemo:</h3><Child1 count={count}/>
    </div>
  )
}

function App() {
  return <div><Parent /></div>
}

export default App