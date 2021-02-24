import React from 'react';
import Child from './Child';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  render() {
    return (
      <div className="app">
        <h1> 我是父组件</h1>
        <Child />
      </div>
    );
  }
}
export default Father;
