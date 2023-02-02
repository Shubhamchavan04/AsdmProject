import React, { Component } from 'react'

class ColorList extends Component {
   
   constructor(props) {
    super(props)
   
    this.state = {
         color:[
            {id:1,name:"red"},
            {id:2,name:"Green"},
            {id:1,name:"Blue"},
            {id:1,name:"Pink"},
            {id:1,name:"Orange"},
        ]
    }
   }
    render() {
        const {color} = this.state;
        return (
            <div>
                <h2>Color is Component</h2>
                <ul>
                    {color.map((val,index)=>{
                        return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ColorList
