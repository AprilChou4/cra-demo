import React, { PureComponent } from 'react';
class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
    };
  }
  
  render() {

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
