import React,{Component, useContext,} from 'react';
import myContext form './index';
const Child1=()=> {
    const {num}=useContext(myContext)
    return <div>{num}</div>
}
export default Child1;