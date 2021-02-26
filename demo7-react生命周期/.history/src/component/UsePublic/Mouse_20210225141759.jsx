import React from 'react';
import kingImg from './mouse.png'
class Mouse extends React.Component {
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0,
        }
        this.handleMouseMove=this.handleMouseMove.bind(this);
    }
    handleMouseMove(e){
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render(){
        const {x,y}=this.state;
        return (<div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
            鼠标的位置:({this.state.x},{this.state.y})
            <img src="./mouse.png" alt="鼠标跟随" style={{position:'absolute',top:y,left:x}}/>
        </div>)
    }
}
export default Mouse;