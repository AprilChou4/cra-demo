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
      return (
        <ScrollingList list={[1,2]}/>
      );
    }
  }

  export default Index