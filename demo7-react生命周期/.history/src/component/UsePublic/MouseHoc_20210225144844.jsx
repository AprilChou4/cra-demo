import React from 'react';
import Mouse from './Mouse'
function withMouse(Component){
    // return class extends React.Component {
    //     constructor(props){
    //         super(props);
    //         this.state={
    //             x:0,
    //             y:0,
    //         }
    //         this.handleMouseMove=this.handleMouseMove.bind(this);
    //     }
    //     handleMouseMove(e){
    //         this.setState({
    //             x:e.clientX,
    //             y:e.clientY
    //         })
    //     }
    //     render(){
    //         return (<div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
    //             鼠标的位置:({this.state.x},{this.state.y})
    //            {/* <Component {...this.props} mouse={this.state}/> */}
    //         </div>)
    //     }
    // }
    return class extends React.Component {
        render() {
          return (
            <Mouse render={mouse => (
              <Component {...this.props} mouse={mouse} />
            )}/>
          );
        }
      }
}

export default withMouse;