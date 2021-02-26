 
import React, { PureComponent } from 'react'
 
class App extends PureComponent {
 
      state = {
 
        items: [1, 2, 3]
 
      }
      shouldComponentUpdate(nextProp,nextState){
        if(nextState!==this.state){
          return true
        }else{
          alert(!)
          return false
        }
      }
 
      handleClick = () => {
 
        const { items } = this.state
 
        items.pop()
 
        this.setState({ items })
 
      }
 
      render () {
 
        console.log('render-----')
        return (<div>
 
          <ul>
 
            {this.state.items.map(i => <li key={i}>{i}</li>)}
 
          </ul>
 
          <button onClick={this.handleClick}>delete</button>
 
        </div>)
 
      }
 
    }
 export default App;