import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import Edit from './Edit';
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'
import {addDownloadHistoryAPI} from '../services/allAPI'



function Preview({ userInput, finish }) {
  // console.log(userInput);

  const [downloadStatus,setDownloadStatus]=useState(false)

   const downloadCV=async()=>{
    //get element for taking screenshot
    //alert('download stated')

    const input=document.getElementById('result')
    const canvas=await html2canvas(input,{scale:2})
    const imgURL=canvas.toDataURL('image/png')
    //console.lof(imgURL);
    const pdf=new jsPDF()
    const pdfWidth=pdf.internal.pageSize.getWidth()
    const pdfHeight=pdf.internal.pageSize.getHeight()

    pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')


    //get date
    const localTimeData=new Date()
    const timeStamp=`${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
    // console.log(timeStamp);
    

    //add download cv to json using api call
    try{
      const result =await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
      console.log(result);
       
    }
    catch(err){
      console.log(err);
     
    }

 setDownloadStatus(true)
   }


  return (
    <>

      {
        userInput.personalData.name != "" &&
        <div className='d-flex flex-column'>
         { finish && <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }} style={{marginTop:'100px'}}>
            <Stack direction={'row'} sx={{ alignItems: 'center' }}>

              {/* download */}
              <button className='btn fs-2 text-primary' onClick={downloadCV}><IoIosDownload /></button>
             
             
        { 
        downloadStatus &&     
          <>
                {/* edit */}
                <Edit />
                {/* history */}
                <Link to={'/history'}>
                  <button className='btn fs-3 text-primary'><MdHistory /></button>
  
                </Link>
              </>
              }


              {/* back */}
              <Link to={'/resume'}>
                <button className='btn text-primary'>Back</button>

              </Link>
            </Stack>
          </Stack>}


          <Box component="section" >
            <Paper id="result" elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
              <h5>{userInput.personalData.name}</h5>
              <h6>{userInput.personalData.jobTitle}</h6>
              <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>

              <p>
                <Link href={userInput.personalData.github}>Github</Link> |
                <Link href={userInput.personalData.linkedin}>Linkedin</Link> |
                <Link href={userInput.personalData.portfolio}>Portfolio</Link>
              </p>
              <Divider sx={{ fontSize: '18px' }}>Summary</Divider>
              <p className='text-start'>{userInput.summary}</p>
              <Divider sx={{ fontSize: '18px', marginBottom: '10px' }}>Education</Divider>
              <h6>{userInput.education.course}</h6>
              <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>

              <Divider sx={{ fontSize: '18px' }}>Professional Experience</Divider>
              <p className='text-start'>{userInput.experience.jobRole}</p>

              <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>

              <Divider sx={{ fontSize: '18px' }}>Skills</Divider>
              <Stack spacing={2} direction="row" flexWrap='wrap' className='m-3' sx={{ gap: '10px' }}>

                {
                  userInput.skills?.map(item => (
                    <Button variant="contained">{item}</Button>
                  ))
                }


              </Stack>
            </Paper>
          </Box>
        </div>

      }


    </>
  )
}

export default Preview