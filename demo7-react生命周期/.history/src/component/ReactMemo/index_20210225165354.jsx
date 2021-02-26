import React from 'react';

const TestC = (props) => {
    console.log(`Rendering TestC :`, props)
    return ( 
        <div>
            {props.count}
        </div>
    )
}

// App.js
const App=()=><TestC count={5} />
export default App