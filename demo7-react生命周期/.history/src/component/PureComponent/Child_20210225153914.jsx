import React, { Component } from 'react';
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
    };
  }
 
  componentDidMount() {
    console.log('----child----componentDidMount------');
    window.addEventListener(
      'resize',
      (this.resize = () => {
        // 函数防抖
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          console.log('timer')
        }, 100);
      }),
    );
  }
 
 
  shouldComponentUpdate(nextProps) {
    console.log('----child----shouldComponentUpdate------');
    return true;
  }
  // 此方法在组件更新后被调用，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state
  componentDidUpdate(prevProps,prevState){

    
  }
  componentWillUnmount(){
    // 此方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清楚组件中使用的定时器，清楚componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。
    window.removeEventListener('resize', this.resize);
    clearTimeout(this.timer);
    alert(111)
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
