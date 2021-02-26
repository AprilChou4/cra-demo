import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = () => {
    const date = new Date()
  
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  };
const Child1 = memo(() => {
    const date = new Date()
  console.log('render--------')
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  })

const Parent = () => {
  const [count, setCount] = useState(0)
const onClick=()=>{}
console.log('parent----render')
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => {
        setCount(1)
      }}>+1</button>
      <h3>noMemo:</h3> <Child />
      <h3>withMemo:</h3><Child1 count={count}/>
    </div>
  )
}

function App() {
  return <div><Parent /></div>
}

export default App