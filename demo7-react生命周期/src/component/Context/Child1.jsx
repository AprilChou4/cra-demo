import React,{ useContext,} from 'react';
import {myContext} from './util';
import useMouse from '../hooks/useMouse'
console.log(myContext,'---------myContext')
const Child1=()=> {
    const ctx=useContext(myContext);
    const [x,y]=useMouse()
    console.log(ctx,x,y,'-------ctx------')
    return <div>我是child1：{ctx?.num}</div>
}
export default Child1;