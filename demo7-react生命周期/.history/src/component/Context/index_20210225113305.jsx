import React,{Component,createContext} from 'react';
import Child from './Child'
import Child1 from './Child1'
//  const myContext=createContext({num:0});
const {Provider,Consumer}=myContext;
class Index extends Component {

    render(){
        return <Provider value={{num:1}}>
            <Consumer>
                {(val)=><Child {...val}/>}
            </Consumer>
            <Child1/>
        </Provider>
    }
}
export default Index;