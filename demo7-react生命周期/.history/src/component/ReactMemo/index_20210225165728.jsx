import React,{useState} from 'react';

const TestC = (props) => {
    console.log(`Rendering TestC :`, props)
    return ( 
        <div {...props}>
            {props.count}
        </div>
    )
}

// App.js
const App=()=>{
    const [count,setCount]=useState(5)
    const onClick=()=>{
        alert(1)
        setCount(6)
    }
    return <TestC count={count} onClick={onClick}/>
}
export default App