// react 复用———— render prop
// import React from 'react';
// import Mouse from './Mouse'
// import kingImg from './mouse.png';
// class MouseTracker extends React.Component {
//     render() {
//       return (
//         <>
//           <h1>移动鼠标!</h1>
//           {/* render props */}
//           <Mouse render={({x,y})=>{
//               return <img src={kingImg} alt="鼠标跟随" style={{position:'absolute',top:y,left:x,transform:'translate(-50%,-50%)'}}/>
//           }}/>
//         </>
//       );
//     }
//   }
// export default MouseTracker;


// react组件复用———— HOC
import React from 'react';
import withMouse from './MouseHoc'
import kingImg from './mouse.png';

class MouseTracker extends React.Component {
    render() {
        const {x,y}=this.props.mouse;
      return (
        <>
          <h1>移动鼠标!</h1>
        <img src={kingImg} alt="鼠标跟随" style={{position:'absolute',top:y,left:x,transform:'translate(-50%,-50%)'}}/>
        </>
      );
    }
  }
export default withMouse(MouseTracker);