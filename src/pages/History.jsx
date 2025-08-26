import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { getHistoryAPI } from '../services/allAPI';

function History() {

  const [resume,setResume]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    try{
      const result =await getHistoryAPI()
      // console.log(result);
      setResume(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
  }

  console.log(resume);
  
  return (
    <div>
     <div className=''>
        <h4 className='text-center my-5'>Resume Downloaded History</h4>
        <Link to={'/'} className='float-end me-5'>Back</Link>
     </div>
      <Box component="section" className='container-fluid' >
        <div className='row'>
        {  
          
          resume.length>0 ?
          resume?.map((item,index)=>(
             <div key={index} className='col-md-4'>
            <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
              <div className='d-flex justify-content-evenly align-items-center'>
                <h6 className='ms-5'>Review At : <br /> {item?.timeStamp}</h6>
                <button className='btn text-danger fs-5 ms-5'><MdDelete /></button>
              </div>
             <div className='border rounded p-3'>
              <img className='img-fluid' src={item?.imgURL} alt="" />
             </div>
            </Paper>
          </div>
          ))
          :
          <p>History is empty</p>

         
          
          }
        </div>
      </Box>
    </div>
  )
}

export default History