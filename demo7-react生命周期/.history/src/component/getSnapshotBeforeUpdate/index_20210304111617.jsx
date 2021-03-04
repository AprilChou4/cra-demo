import React from 'react'
import ScrollingList from './ScrollingList'
class Index extends React.Component {
    constructor(props) {
      super(props);
     this.state={
         list:[]
     }
    }
  
    
  componentDidMount(){
      this.setState({
          list:[1,2,3]
      })
  }
    render() {
        const {list} =this.state;
      return (
        <ScrollingList list={list}/>
      );
    }
  }

  export default Index