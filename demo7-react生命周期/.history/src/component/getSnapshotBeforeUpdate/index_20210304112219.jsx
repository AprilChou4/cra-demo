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
      const self=this;
      document.addEventListener('scroll',function(){
          console.log('1111')
          self.setState({
            list:list.push(5)
        })
      })
  }
  componentWillUnmount(){
      document.removeEventListener('scroll')
  }
    render() {
        const {list} =this.state;
        console.log(list,'-----list')

      return (
        <ScrollingList list={list}/>
      );
    }
  }

  export default Index