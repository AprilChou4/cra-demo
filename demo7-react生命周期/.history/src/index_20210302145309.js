import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/ReactLife163';
// contex的通信
// import App from './component/Context';
// 组件的复用
// import App from './component/UsePublic';
// import App from './component/PureComponent';
// import App from './component/ReactMemo';
import App from './component/Portals';
// import './component/Promise'
import './component/new'
const arr=[1,99,88,2,7,66,5]
function bubble(arr){
  const len=arr.length;
 for(let i=0;i<len;i++){
   for(let j=0;j<len-1;j++){
     if(arr[j]>arr[j+1]){
      const temp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=temp;
     }
   }
 }
 return arr;
}
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
