import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview() {
  return (
    <div style={{marginTop:'100px'}}>
      <Box component="section" >
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
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
          <Stack spacing={2} direction="row" flexWrap='wrap' className='m-3' sx={{  gap: '10px' }}>

            <Button variant="contained">Skills</Button>
          

          </Stack>
        </Paper>
      </Box>
    </div>
  )
}

export default Preview