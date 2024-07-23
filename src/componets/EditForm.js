import axios from 'axios'
import React, { useState } from 'react'
import api from './axios'
import { useDispatch } from 'react-redux'
import { update } from './redux/FormSlice'

const EditForm = ({color,dis,title,id}) => {

    const [color1,setColor1]=useState(color)
    const [dis1,setDis1]=useState(dis)
    const [title1,setTitle1]=useState(title)
   

    const dispatch = useDispatch()

   
    

  return (
    <div>
       <div
           
            style={{
              border: 'solid',
              width: '200px',
         
              margin: '60px',
              marginTop: '60px',
            }}
          >
            <h2>Title</h2>
            <div><input value={title1} onChange={(e)=>setTitle1(e.target.value)}  type='text'/></div>
            <h2>Description</h2>
            <div><input value={dis1} onChange={(e)=>setDis1(e.target.value)} type='text'/></div><br></br>
            <div> <input value={color1} onChange={(e)=>setColor1(e.target.value)} type="color" id="favcolor" name="favcolor" />
            </div>
            <div>
              <br />
              <br />
              <button onClick={()=>dispatch(update({color1,dis1,title1,id}))} style={{ backgroundColor: 'lightblue' }}>Update</button>
             
              <br />
              <br />
            </div>
          </div>
    </div>
  )
}

export default EditForm
