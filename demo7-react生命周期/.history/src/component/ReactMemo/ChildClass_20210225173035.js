import React, {Component, PureComponent } from 'react';
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
    };
  }
  
  render() {
      console.log('ChildClass-----render')

    return (
      <div>
        <h3>
          我是child组件
          <div>
            我叫:{this.state.sex}
          </div>
        </h3>
      </div>
    );
  }
}
export default Child;
