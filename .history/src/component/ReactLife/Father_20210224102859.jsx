import React from 'react';
import Child from './Child';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="app">
        我是父组件
        <Child />
      </div>
    );
  }
}
export default Father;
