import React, { Component } from "react";

class ClickCounter extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    eventHandler = (data) => {
        alert('Good Morning $(data)');
    }
    incrementCounter=()=>{
        this.setState({count:this.state.count+1});
    }

    render(){
        const {myName}=this.props;
        const {count} = this.state;
        return<div>
            <h2>
                This is Click Counter Component
            </h2>
            <p>My Name is <strong>{myName}</strong></p>
            <p>Counter value is <strong>{this.state.count}</strong></p>
            <button type="button" onClick={()=>this.eventHandler("shubham")}>Greeting</button>
            <button type="button" onClick={this.incrementCounter}>Increment Counter</button>       
        </div>
    }
}
export default ClickCounter;

