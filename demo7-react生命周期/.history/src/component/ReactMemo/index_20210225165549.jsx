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
    const onClick=()=>{
        
    }
    return <TestC count={5} />
}
export default App