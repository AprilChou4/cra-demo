import React,{Component, useContext,} from 'react';
import myContext from './index';
const Child1=()=> {
    const {num}=useContext(myContext)
    return <div>{num}</div>
}
export default Child1;