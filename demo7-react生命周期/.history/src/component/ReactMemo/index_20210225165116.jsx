import React,{memo} from 'react';

class TestC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count === nextState.count) {
            return false
        }
        return true
    }
    
    render() {
        console.log('render')
        return (
            <div >
            {this.state.count}
            <button onClick={()=>this.setState({count: 1})}>Click Me</button>
            </div>
        );
    }
}
export default TestC;