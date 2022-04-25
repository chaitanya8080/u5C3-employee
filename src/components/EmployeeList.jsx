

import {useEffect} from "react"
import {useState} from "react"
import {useParams} from "react-router-dom"
import {axios} from "axios";
export const EmployeeList = () => {

    const {id } = useParams();
     
     const [employee , setEmployee]=useState({})
    useEffect(()=>{
       getData();
      
    },[])
    
    const getData = ()=>{
        axios.get(`http://localhost:8080/employee/${id}`)
        .then( ( data)=>{
         
          console.log(data.data);
          setEmployee(data.data);
        })
    }

    return (
      <div className="list_container" >
        {/* {employee.map((e)=>( */}

    <div className="employee_card" key={employee.id} >
    <img className="employee_image" src={employee.image} />
    <span className="employee_name">{employee.employee_name}</span>
    <span className="employee_title">{employee.title}</span>
     
        </div>
        ))
      </div>
    );
  };