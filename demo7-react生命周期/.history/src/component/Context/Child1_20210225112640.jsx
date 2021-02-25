import React,{Component, useContext,} from 'react';
import {myContext} from './index';
console.log(myContext,'---------myContext')
const Child1=()=> {
    const ctx=useContext(myContext);
    console.log(ctx,'-------ctx------')
    return <div>我是child1：{ctx?.num}</div>
}
export default Child1;