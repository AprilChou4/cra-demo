import React,{Component, useContext,} from 'react';
import Child1 from './index'
const Child1=()=> {
    const {num}=useContext(Child1)
    return <div>{num}</div>
}
export default Child1