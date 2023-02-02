import React, { Component } from 'react'
import ChildComponents from './ChildComponents'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

 class Parent extends Component {
   constructor(props) {
    super(props)
   
    this.state = {
        count : 0,
        uname:"Shubham"
         
    }
   }
   incrementCounter = () =>{
    // this.setState((prevstate)=>({count:prevstate.count+1}));
    this.setState({uname:"Shubham"});
    
   }
    render() {
        console.log("Parent Component")
        const {count,uname} = this.state;
        return (
            <div>
                <h2>This is Parent Component</h2>
                <p>Counter Value is <strong>{count}</strong></p> 
                <p>My Name is {uname}</p> 
            <hr/>
                <h2 onMouseOver={this.incrementCounter}>hover on me to increment</h2>
                <button type="button" onClick={this.incrementCounter}>Click on me</button>
            <hr/>
                <ChildComponents count={count}></ChildComponents>
                <ComponentOne uname={uname}></ComponentOne>  
                <ComponentTwo uname={uname}></ComponentTwo>
            <hr/>
            </div>
        )
    }
}

export default Parent