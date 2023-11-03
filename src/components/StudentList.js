import Axios from "axios";
import { useEffect,useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-basic1.onrender.com/studentRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () => {
        return arr.map((val,ind)=>{  //[{_id,name,email,rollno},{},{}]
            return <StudentListRow key={ind} obj={val}  />
        })
    }


    return (
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr  style={{backgroundColor:"forestgreen",fontFamily:"Griffy"}}>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
        <tbody>
            {ListItems()}
        </tbody>
        </table>
    )
}

export default StudentList;