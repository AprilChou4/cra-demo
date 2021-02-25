import React,{Component, useContext,} from 'react';
import myContext from './index';
console.log(myContext,'---------myContext')
const Child1=()=> {
    const {num}=useContext(myContext);
    return <div>我是child1：{num}</div>
}
export default Child1;