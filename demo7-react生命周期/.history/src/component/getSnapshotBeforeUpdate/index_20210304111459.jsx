import React from 'react'
import ScrollingList from './ScrollingList'
class Index extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState,'--prevProps, prevState')
      // 捕获滚动的位置，以便后面进行滚动 注意返回的值
      if (prevProps.list.length < this.props.list.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // 如果有 snapshot 会进行滚动的调整，这样子就不会立即将之前的内容直接弹上去
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <ScrollingList list={[1,2]}/>
      );
    }
  }

  export default Index