import React,{useState,memo} from 'react';

const TestC = memo((props) => {
    console.log(`Rendering TestC :`, props)
    return ( 
        <div {...props}>
            {props.count}
        </div>
    )
})

// App.js
const App=()=>{
    const [count,setCount]=useState(5)
    const onClick=()=>{
        setCount(6)
    }
    return <TestC count={count} onClick={onClick}/>
}
export default App