import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';


function Preview() {
  return (
    <>
     <Box component="section" >
      <Paper elevation={3} sx={{ p: 2,textAlign:'center' }}>
                <h5>Name</h5>
                <h6>Job Title</h6>
                <p><span>location</span> | <span>Email</span> | <span>Phone</span></p>

           <p>
                    <Link href={""}>Github</Link> |
                    <Link href={""}>Linkedin</Link> | 
                    <Link href={""}>Portfolio</Link> 
           </p>
            <Divider>Summary</Divider>
            

        </Paper>
    </Box>
    </>
  )
}

export default Preview