import React from 'react';
import Child from './Child';

class Father extends React.Component {
  // 组件初始化(initialization)阶段
  // Father类继承了react Component这个基类，也就继承这个react的基类，才能有render(),生命周期等方法可以使用，这也说明为什么函数组件不能使用这些方法的原因。
  //   super(props)用来调用基类的构造方法( constructor() ), 也将父组件的props注入给子组件，功子组件读取(组件中props只读不可变，state可变)。
  // 而constructor()用来做一些组件的初始化工作，如定义this.state的初始内容。
  constructor(props) {
    super(props);
    this.state = {
      fatherAge: 3123,
      age: 24,
      name: 'king',
    };
  }

  // 在组件挂载到DOM前调用，且只会被调用一次，在这边调用this.setState不会引起组件重新渲染，也可以把写在这边的内容提前到constructor()中，所以项目中很少用。
  componentWillMount() {
    console.log('----father----componentWillMount------');
    this.setState({
      fatherAge: 123,
    });
  }

  componentDidMount() {
    console.log('----father----componentDidMount------');
    this.setState({
      fatherAge: 123,
      age: 25,
      name: 'kings',
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log('----father----componentWillReceiveProps------');
  }
  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.log('----father----shouldComponentUpdate------');
    return true;
  }

  render() {
    const { name, age, fatherAge } = this.state;
    console.log('----father----render------');
    return (
      <div className="app">
        <h1> 我是父组件{fatherAge}</h1>
        <Child name={name} age={age} />
      </div>
    );
  }
}
export default Father;
