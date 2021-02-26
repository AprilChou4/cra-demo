import React from 'react';
import Mouse from './Mouse'
class MouseTracker extends React.Component {
    render() {
      return (
        <>
          <h1>移动鼠标!</h1>
          <Mouse render={()=>{
              return <img src={kingImg} alt="鼠标跟随" style={{position:'absolute',top:y,left:x,transform:'translate(-50%,-50%)'}}/>
          }}/>
        </>
      );
    }
  }
export default MouseTracker;