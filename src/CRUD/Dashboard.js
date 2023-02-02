import React,{useEffect,useState,initialstate} from 'react'
import axios from 'axios';



const Dashboard = () => {
    const [employees, setemployees] = useState({});

    useEffect(() => {
        fetchData();
    },[]);

   const  fetchData = () =>{
            axios.get("http://localhost:8888/employees").then((res)=>{
                console.log(res)
            })
    }
    return (
        <div>
            <h2>This is Dashboard Components</h2>
        </div>
    )
}

export default Dashboard
