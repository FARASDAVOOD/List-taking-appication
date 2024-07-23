import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import api from './axios';
import { useDispatch } from 'react-redux';
import { submit } from './redux/FormSlice';

const Form = () => {
    const [title, setTitle] = useState("");
    const [dis, setDis] = useState("");
    const[color,setColor]=useState("");
    const navigate=useNavigate()

    const dispatch = useDispatch()
    const handleSubmit = () => {
        if(title!==""&&dis!==""&&color!==""){
    //         api.post("/values",{title:title,dis:dis,color:color,isEditing:false})
    // .then(()=>{setColor("");setDis("");setTitle("")})
    dispatch(submit({title,dis,color}))
     
    navigate("/")
       
    
        }else{
            alert("please fill all the form")
        }
    
    
    }
    return (
        <div style={{ display:"flex",justifyContent:"center",paddingTop:"100px" }}>
            <div style={{ border:"solid",width: "300px", padding:"40px" }}>
                <div>
                    <label style={{ width:"300px",height:"40px",marginTop:"20px" }}>Title</label>
                </div>
                <div>
                    <input
                        style={{ width:"300px",height:"40px",marginTop:"20px",marginBottom:"20px",fontSize: "20px" }}
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label style={{ width:"300px",height:"40px"}}>Description</label>
                </div>
                <div>
                    <input
                        style={{ width:"300px",height:"40px",marginTop:"20px",fontSize:"20px" }}
                        type='text'
                        value={dis}
                        onChange={(e) => setDis(e.target.value)}
                    />
                </div>
                <div>
                    <br />
                    <input type="color" id="favcolor" name="favcolor" onChange={(e)=>setColor(e.target.value)}/>
                </div> 
                <button onClick={handleSubmit} style={{ backgroundColor: "lightblue", marginTop: "20px", height: "40px", width: "100px" ,  }} >Submit</button>
            </div>
        </div>
    );
};

export default Form;
