import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className='modal-root'
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
    // return this.props.children
  }
}

function Child() {
    // 这个按钮的点击事件会冒泡到父元素
    // 因为这里没有定义 'onClick' 属性
    return (
      <div className="modal">
        <button>Click</button>
      </div>
    );
  }

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    alert(11)
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
     <> <div onClick={this.handleClick} className="parent">
     <p>Number of clicks: {this.state.clicks}</p>
     <p>
       Open up the browser DevTools
       to observe that the button
       is not a child of the div
       with the onClick handler.
     </p>
     
   </div>
   <Modal>
   {/* <Child /> */}
 </Modal></>
    );
  }
}


export default Parent;
// ReactDOM.render(<Parent />, appRoot);