import React,{Component,} from 'react';
import {myContext} from './util';
 
class Child2 extends Component {
    static contextType=myContext
    render(){
        return <div>我是child2：{this.context.num}</div>
    }
}
export default Child2;