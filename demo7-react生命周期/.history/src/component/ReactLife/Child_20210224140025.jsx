import React, { Component } from 'react';
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
    };
  }
  componentWillMount() {
    console.log('----child----componentWillMount------');
  }
  componentDidMount() {
    console.log('----child----componentDidMount------');
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps,'----child----componentWillReceiveProps------');
    this.setState({
      sex:1
    })
  }
  shouldComponentUpdate(nextProps) {
    console.log('----child----shouldComponentUpdate------');
    return true;
  }
  render() {
    const { name, age } = this.props;
    console.log(name, age, '----child----render------');

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
