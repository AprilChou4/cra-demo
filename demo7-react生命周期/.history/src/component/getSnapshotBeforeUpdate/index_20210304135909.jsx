import React from 'react'
import ScrollingList from './ScrollingList'
class Index extends React.Component {
    constructor(props) {
      super(props);
     this.state={
         list:[]
     }
    }
    componentWillMount() {
        Promise.resolve().then(() => {
            console.log('111');
        });  
    }
        
       
    componentDidMount() {
        
        console.log('222');
        
    }
        
        
    
//   componentDidMount(){
//       const {list}=this.state;
//       const self=this;
//       document.addEventListener('scroll',function(){
        
//       })
//       list.push(5)
//           self.setState({
//             list
//         })
//   }
  componentWillUnmount(){
      document.removeEventListener('scroll')
      console.log('unMount--------')
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