import React from 'react';
import Child from './Child';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fatherAge: 3123,
      age: 24,
      name: 'king',
    };
  }

 

  componentDidMount() {
    console.log('----father----componentDidMount------');
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
