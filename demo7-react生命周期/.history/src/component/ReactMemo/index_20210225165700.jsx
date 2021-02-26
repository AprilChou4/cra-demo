import React,{useState} from 'react';

const TestC = (props) => {
    console.log(`Rendering TestC :`, props)
    return ( 
        <div>
            {props.count}
        </div>
    )
}

// App.js
const App=()=>{
    const [count,setCount]=useState(5)
    const onClick=()=>{
        alert(!)
        setCount(6)
    }
    return <TestC count={count} onClick={onClick}/>
}
export default App