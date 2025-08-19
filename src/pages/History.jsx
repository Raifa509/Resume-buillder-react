import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
     <div className=''>
        <h4 className='text-center my-5'>Resume Downloaded History</h4>
        <Link to={'/'} className='float-end me-5'>Back</Link>
     </div>
      <Box component="section" className='container-fluid' >
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
              <div className='d-flex justify-content-evenly align-items-center'>
                <h6 className='ms-5'>Review At : <br /> 19/08/2025, 7:22:27 pm</h6>
                <button className='btn text-danger fs-5 ms-5'><MdDelete /></button>
              </div>
             <div className='border rounded p-3'>
                <h5>Name</h5>
                <h6>Job Title</h6>
                <p><span>location</span> | <span>Email</span> | <span>Phone</span></p>
  
                <p>
                  <Link href={""}>Github</Link> |
                  <Link href={""}>Linkedin</Link> |
                  <Link href={""}>Portfolio</Link>
                </p>
                <Divider sx={{ fontSize: '18px' }}>Summary</Divider>
                <p className='text-start'>User summary</p>
                <Divider sx={{ fontSize: '18px', marginBottom: '10px' }}>Education</Divider>
                <h6>User Education</h6>
                <p><span>College</span> | <span>University</span> | <span>Year</span></p>
  
                <Divider sx={{ fontSize: '18px' }}>Professional Experience</Divider>
                <p className='text-start'>User job</p>
                <Divider sx={{ fontSize: '18px', marginBottom: '10px' }}>Education</Divider>
                <h6>User Education</h6>
                <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
  
                <Divider sx={{ fontSize: '18px' }}>Skills</Divider>
                <Stack spacing={2} direction="row" flexWrap='wrap' className='m-3' sx={{ gap: '10px' }}>
  
                  <Button variant="contained">Skills</Button>
  
  
                </Stack>
             </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History