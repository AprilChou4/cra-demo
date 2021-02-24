import React from 'react';
import Child from './Child';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      age: 24,
      name: 'king',
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  render() {
    const { name, age } = this.state;
    return (
      <div className="app">
        <h1> 我是父组件</h1>
        <Child name={name} age={age} />
      </div>
    );
  }
}
export default Father;
