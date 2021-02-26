import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = memo(() => {
  const date = new Date()

  return (
    <div>
      当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
    </div>
  )
})
const Child1 = memo(() => {
    const date = new Date()
  
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  })

const Parent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>+1</button>
      <Child />
    </div>
  )
}

function App() {
  return <div><Parent /></div>
}

export default App