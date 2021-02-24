import React, { Component } from 'react';
class Child extends Component {
  componentDidMount() {
    console.log('----child----componentDidMount------');
  }
  render() {
    const { name, age } = this.props;
    console.log('----child----render------');

    return (
      <div>
        <h3>
          我是child组件
          <div>
            我叫:{name},今年{age}岁
          </div>
        </h3>
      </div>
    );
  }
}
export default Child;
