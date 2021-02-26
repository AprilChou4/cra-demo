import React, { useState, memo, useMemo, useCallback } from 'react'
import ChildClass from './ChildClass'
const Child = (props) => {
    const date = new Date()
    console.log('Child-render--------')
  
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  };
const Child1 = memo((props) => {
    const date = new Date()
  console.log('Child1-render--------')
    return (
      <div>
        当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </div>
    )
  })

const Parent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(0)
console.log('parent----render')
  return (
    <div>
      <div>count: {count}:{age}</div>
      <button onClick={() => {
        setCount(1)
        setAge(age+1)
      }}>+1</button>
      <h3>ChildClass</h3><ChildClass/>
      <h3>noMemo:</h3> <Child count={count}/>
      <h3>withMemo:</h3><Child1 count={count}/>
    </div>
  )
}

function App() {
//   return <div><Parent /></div>
return <div class="container">
<div class="div">我是一个div</div>
<div class="div">我是一个很多字div</div>
<div class="div">我是一个更多字而且第三个div</div>
</div>
}

export default App