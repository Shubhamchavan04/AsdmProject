import React,{memo} from 'react'

const ComponentTwo=({uname})=> {
    console.log("Component Two");
       
    return (
        <div>
             <h2>This is Component Two</h2>
             <p>My Name is <strong>{uname}</strong></p> 
        </div>
    )
}
export default React.memo(ComponentTwo)
