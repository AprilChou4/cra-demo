import React,{Component,createContext} from 'react';
import Child from './Child'
import Child1 from './Child1'
import Child2 from './Child2'
import {myContext} from './util';
//  const myContext=createContext({num:0});
const {Provider,Consumer}=myContext;
class Index extends Component {

    render(){
        return <Provider value={{num:1}}>
            <Consumer>
                {(val)=><Child {...val}/>}
            </Consumer>
            <Child1/>
            <Child2/>
        </Provider>
    }
}
export default Index;