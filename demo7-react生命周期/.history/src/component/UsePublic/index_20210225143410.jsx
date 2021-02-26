// import React from 'react';
// import Mouse from './Mouse'
// import MouseHoc from './Mouse'
// import kingImg from './mouse.png';
// import meImg from './mouse1.png';

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

import React from 'react';
import Mouse from './Mouse'
import MouseHoc from './Mouse'
import kingImg from './mouse.png';
import meImg from './mouse1.png';

class MouseTracker extends React.Component {
    render() {
      return (
        <>
          <h1>移动鼠标!</h1>
          {/* render props */}
          <Mouse render={({x,y})=>{
              return <img src={kingImg} alt="鼠标跟随" style={{position:'absolute',top:y,left:x,transform:'translate(-50%,-50%)'}}/>
          }}/>
        </>
      );
    }
  }
export default MouseHoc(MouseTracker);