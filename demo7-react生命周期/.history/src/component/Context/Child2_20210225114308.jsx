import React,{Component,} from 'react';
import {myContext} from './util';
 
class Child2 extends Component {
    static contentType=myContext
    render(){
        return <div>{this.props.num}</div>
    }
}
export default Child2;