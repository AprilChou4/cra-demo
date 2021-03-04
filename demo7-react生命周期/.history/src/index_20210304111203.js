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
// import App from './component/Portals';
// getSnapshotBeforeUpdate应用场景
import App from './component/getSnapshotBeforeUpdate';
// import './component/Promise'
// import './component/new'
// 继承
// import './component/inherit'
// 手写call bind
import './component/call'

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
