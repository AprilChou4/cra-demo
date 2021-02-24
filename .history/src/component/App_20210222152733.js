/* eslint-disable */
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    externalData: null,
    prevId: this.props.id,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (nextProps.id !== prevState.prevId) {
      return {
        externalData: null,
        prevId: nextProps.id,
      };
    }

    // No state update necessary
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.externalData === null) {
      // this._loadData(this.props.id);
    }
  }

  componentDidMount() {
    // this._loadData(this.props.id);
  }

  render() {
    return 1111;
  }
}

export default App;
