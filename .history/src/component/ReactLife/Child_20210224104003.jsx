import React, { Component } from 'react';
class Child extends Component {
  render() {
    const { name, age } = this.prps;
    return (
      <div>
        <h3>我是child组件</h3>
      </div>
    );
  }
}
export default Child;
