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
            this.setState({
                name:'111'
            })
        });  
    }
        
       
    componentDidMount() {
        Promise.resolve().then(() => {
            this.setState({
                name:'333'
            })
        });  
        this.setState({
            name:'2222'
        })
        
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
        const {list,name} =this.state;
        console.log(list,'-----list')

      return (
        <div>
            <ScrollingList list={list}/>
            {name}
        </div>
      );
    }
  }

  export default Index