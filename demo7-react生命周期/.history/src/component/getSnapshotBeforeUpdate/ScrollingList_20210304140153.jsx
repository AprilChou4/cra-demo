import React from 'react'
class ScrollingList extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps,this.props.list,'--prevProps, prevState')
      // 捕获滚动的位置，以便后面进行滚动 注意返回的值
      if (prevProps.list.length < this.props.list.length) {
        const list = this.listRef.current;
        console.log(list.scrollHeight , list.scrollTop,'-----getSnapshotBeforeUpdate----')
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(prevProps, prevState, snapshot,'------componentDidUpdate-----')
      // 如果有 snapshot 会进行滚动的调整，这样子就不会立即将之前的内容直接弹上去
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <div ref={this.listRef} style={{height:'100px'}}>大叔大婶大所</div>
      );
    }
  }

  export default ScrollingList