import React, { PureComponent } from 'react';
class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
    };
  }
 
  componentDidMount() {
    console.log('----child----componentDidMount------');
 
  }
 
 
  shouldComponentUpdate(nextProps) {
    console.log('----child----shouldComponentUpdate------');
    return true;
  }
  // 此方法在组件更新后被调用，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state
  componentDidUpdate(prevProps,prevState){

  }
  
  render() {
    const { name, age } = this.props;
    console.log(name, age, '----child----render------');

    return (
      <div>
        <h3>
          我是child组件
          <div>
            我叫:{name},今年{age}岁{this.state.sex}
          </div>
        </h3>
      </div>
    );
  }
}
export default Child;
