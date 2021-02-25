import React,{Component,createContext} from 'react';
const myContext=createContext({num:0});
const {Provider,Consumer}=myContext;
class Index extends Component {

    render(){
        return <Provider value={{num:1}}></Provider>
    }
}
export default Index