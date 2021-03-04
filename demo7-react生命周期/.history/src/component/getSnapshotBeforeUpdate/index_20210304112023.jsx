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
      const {list}=this.state;
      document.addEventListener('scroll',function(){
          console.log('1111')
          this.setState({
            list:list.push(5)
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