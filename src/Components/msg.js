import React, { Component } from 'react'

 class msg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLogin: false
             
        }
    }
    
    render() {

        const { isLogin } = this.state;
        let data = "";
        //2.if else
        if(isLogin){
            return "Admin Login";
        }else{
            return "User Login";
        }





        return (
            <div>
                
            </div>
        )
    }
}

export default msg
