import React from 'react';
import Child from './Child';
import Snapshot from './Snapshot'

class Father extends React.Component {
  // 组件初始化(initialization)阶段
  // Father类继承了react Component这个基类，也就继承这个react的基类，才能有render(),生命周期等方法可以使用，这也说明为什么函数组件不能使用这些方法的原因。
  //   super(props)用来调用基类的构造方法( constructor() ), 也将父组件的props注入给子组件，功子组件读取(组件中props只读不可变，state可变)。
  // 而constructor()用来做一些组件的初始化工作，如定义this.state的初始内容。
  constructor(props) {
    super(props);
    this.state = {
      fatherAge: 1,
      age: 24,
      name: 'king',
    };
  }
  static getDerivedStateFromProps(nextProps,prevState) {
    // console.log(this, '----father----getDerivedStateFromProps------nextProps');
    if ('name' in nextProps) {
      return {
        // ...(nextProps.== || {}),
        name: nextProps.name,
      };
    }
    return {age:26,name:'ddas',cc:11};
  }

  componentDidMount() {
    
    this.setState({
      fatherAge: 123,
    },()=>{
      console.log('setState1==========',this.state.fatherAge)
    });
    console.log('setState1==========后',this.state.fatherAge)

    this.setState({
      fatherAge: 124,
    },()=>{
      console.log('setState2==========',this.state.fatherAge)

    });
    console.log('setState2==========后',this.state.fatherAge)
  }

  // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.log('----father----shouldComponentUpdate------');
    return true;
  }

  render() {
    const { name, age, fatherAge } = this.state;
    console.log(this.state,'----father----render------');
    return (
      <div className="app">
        <h1 onClick={()=>{alert(11)}}> 我是父组件{fatherAge}</h1>
        <Child name={name} age={age} />
        <Snapshot/>
      </div>
    );
  }
}
export default Father;
