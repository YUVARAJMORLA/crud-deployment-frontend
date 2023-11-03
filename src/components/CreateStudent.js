import Axios from "axios";
import StudentForm  from "./StudentForm";
import { useState } from "react";

function CreateStudent()
{
    const [arr,setArr] = useState([]);


    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Creating a record...");
        const data = {name:arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("https://crud-deployment-backend-basic1.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added Successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    const getState = (out) => {
        setArr(out);
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                nameValue=""
                emailValue=""
                rollNoValue="">
                Create Student
            </StudentForm>

        </form>
    )
}

export default CreateStudent;