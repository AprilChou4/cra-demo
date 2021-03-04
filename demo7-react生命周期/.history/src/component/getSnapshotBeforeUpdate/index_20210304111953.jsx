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
      
      document.addEventListener('scroll',function(){
          console.log('1111')
          this.setState({
            list:[1,2,3]
        })
      })
  }
  componentWillUnmount(){
      document.removeEventListener('scroll')
  }
    render() {
        const {list} =this.state;
      return (
        <ScrollingList list={list}/>
      );
    }
  }

  export default Index