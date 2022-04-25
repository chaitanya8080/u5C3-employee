

import {useEffect} from "react"
import {useState} from "react"
import {axios} from "axios";
export const EmployeeList = () => {
     const [employee , setEmployee]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/employee")
        .then( ( {data})=> {
         
          console.log(data.data);
          setEmployee(data.data);
        })
      
    },[])

    return (
      <div className="list_container" key={employee.id}>
        {employee.map((employee)=>(

    <div className="employee_card" >
    <img className="employee_image"/>
    <span className="employee_name">{employee.employee_name}</span>
    <span className="employee_title">{employee.title}</span>
        

     
        </div>
        ))}
      </div>
    );
  };