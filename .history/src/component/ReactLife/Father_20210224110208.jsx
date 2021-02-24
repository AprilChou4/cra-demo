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
  componentWillMount() {
    console.log('----father----componentWillMount------');
  }
  componentDidMount() {
    console.log('----father----componentDidMount------');
  }

  render() {
    const { name, age } = this.state;
    console.log('----father----render------');
    return (
      <div className="app">
        <h1> 我是父组件</h1>
        {/* <Child name={name} age={age} /> */}
      </div>
    );
  }
}
export default Father;
