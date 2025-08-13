import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


function Header() {
  
  const aboutToolTip="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
     <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:'#053d63ff'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" alt="logo" width={38} />
          </IconButton>
         
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'Libertinus Serif',fontSize:'25px' }}>
             <Link to={'/'} className='text-light text-decoration-none'> rBuilder</Link>
            </Typography>
      
          <Tooltip title={aboutToolTip}><Button sx={{fontSize:'15px'}} color="inherit">About us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header