import React,{Component,createContext} from 'react';
import Child from './Child'
const myContext=createContext({num:0});
const {Provider,Consumer}=myContext;
class Index extends Component {

    render(){
        return <Provider value={{num:1}}>
            <Consumer>
                {(val)=><Child {...val}/>}
            </Consumer>
        </Provider>
    }
}
export default Index