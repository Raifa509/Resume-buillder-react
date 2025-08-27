import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState,useRef } from 'react';
import { addResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

//global variable
const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps({userInput,setUserInput,setFinish,setResumeId}) {

  const skillSuggestionArray = ['NODE JS', 'EXPRESS', 'MONGODB', 'REACT', 'ANGULAR', 'NEXT JS', 'BOOTSTRAP', 'TAILWIND', 'CSS', 'GIT', 'PYTHON']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // state for storing input data
  // const [userInput, setUserInput] = React.useState({
  
  //   personalData: {
  //     name: '',
  //     jobTitle: '',
  //     location: '',
  //     email: '',
  //     phone: '',
  //     github: '',
  //     linkedin: '',
  //     portfolio: ''

  //   },
  //   education: {
  //     course: '',
  //     college: '',
  //     university: '',
  //     year: ''
  //   },
  //   experience: {
  //     jobRole: '',
  //     company: '',
  //     jobLocation: '',
  //     duration: ''
  //   },
  //   skills: [],
  //   summary: ''

  // })
  // moved from here to its parent for data sharing

  // for skills 
  const userSkillRef=React.useRef()
  

  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // add skill
  const addSkill=(inputSkill)=>{
    if(inputSkill){
      if(userInput.skills.includes(inputSkill))
    {
      alert('Skill already exisiting!! add another..')
    }
    else{
        // userInput.skills.push(inputSkill) dont use like this,we are changing the state,so need to update the state
        setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})
    }

    }
  }

  // remove skill
const removeSkill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}

  //render the content corresponding to array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3 className='mt-4'>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,name:e.target.value}
            })} value={userInput.personalData.name} />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}
            })}  value={userInput.personalData.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,location:e.target.value}
            })}  value={userInput.personalData.location} />
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3 className='mt-4'>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,email:e.target.value}
            })}  value={userInput.personalData.email}/>
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,phone:e.target.value}
            })}  value={userInput.personalData.phone}/>
            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,github:e.target.value}
            })}  value={userInput.personalData.github}/>
            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}
            })}  value={userInput.personalData.linkedin}/>
            <TextField id="standard-basic-portfolio" label="Protfolio Link" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}
            })}  value={userInput.personalData.portfolio}/>

          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3 className='mt-4'>Education Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,education:{...userInput.education,course:e.target.value}
            })}  value={userInput.education.course}/>
            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,education:{...userInput.education,college:e.target.value}
            })} value={userInput.education.college}/>
            <TextField id="standard-basic-university" label="University" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,education:{...userInput.education,university:e.target.value}
            })} value={userInput.education.university}/>
            <TextField id="standard-basic-year" label="Year of passout" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,education:{...userInput.education,year:e.target.value}
            })} value={userInput.education.year}/>
          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3 className='mt-4'>Professional Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-jobrole" label="Job or Internship" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,experience:{...userInput.experience,jobRole:e.target.value}
            })} value={userInput.experience.jobRole}/>
            <TextField id="standard-basic-companyname" label="Company Name" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,experience:{...userInput.experience,company:e.target.value}
            })} value={userInput.experience.company}/>
            <TextField id="standard-basic-companylocation" label="Company Location" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,experience:{...userInput.experience,jobLocation:e.target.value}
            })} value={userInput.experience.jobLocation}/>
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={(e)=>setUserInput({
              ...userInput,experience:{...userInput.experience,duration:e.target.value}
            })} value={userInput.experience.duration} />
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3 className='mt-4'>Skills</h3>
          <div className="d-flex align-item-center justify-content-between p-3">
            {/* <TextField className='w-75' id="standard-basic-skill" label="Add Skills" variant="standard" value={userInput.skills} /> */}
            <input ref={userSkillRef} type="text" className="form-control" placeholder='Add Skills' />
            <Button onClick={()=>addSkill(userSkillRef.current.value)} variant="text">Add</Button>
          </div>
          <h5>Suggestions:</h5>
          {/* duplicating */}
          <div className="d-flex justify-content-between my-3 flex-wrap">
            {
              skillSuggestionArray.map((item) => (
                <Button onClick={()=>addSkill(item)} key={item} variant="outlined" className='m-1'>{item}</Button>
              ))
            }
          </div>
          <h5>Added Skills :</h5>
          <div className='d-flex flex-wrap justify-content-between my-3'> 
            {/* ADDING SKILL DISPLAY */}
           {
            
            userInput.skills.length>0?
            userInput.skills.map(item=>(
               <span className='btn btn-primary d-flex align-items-center justify-content-center mb-3'>{item}<button onClick={()=>removeSkill(item)} className='btn text-light' >X</button></span>
            ))
              :
              <span>NIL</span>
           }
           
           </div>
        </div>
      )
      case 5: return (
        <div>
          <h3 className='mt-4'>Professional Summary</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} defaultValue={'Highly motivated and detail-oriented IT professional with a strong foundation in troubleshooting, system administration, and technical support. Demonstrates excellent problem-solving skills, adaptability, and a commitment to delivering reliable technology solutions. Skilled at working independently or in a team, with strong communication and time-management abilities. Dedicated to continuous learning and staying current with evolving industry trends.'} variant="standard" onChange={(e)=>setUserInput({
              ...userInput,summary:e.target.value
            })}/>

          </div>
        </div>
      )
      default: return null


    }
  }

  
  //addResume
  const handleAddResume=async ()=>{
    // make api call
    //all content of resume is in userInput
    const {name,jobTitle,location}=userInput.personalData
    if(name && jobTitle && location)
    {
      // alert('API called')
      try{
       const result= await addResumeAPI(userInput)
      //  console.log(result);

      setResumeId(result?.data?.id)
      // console.log(result?.data?.id);
      
       swal("Success!", "Resume added successfully!", "success");
       setFinish(true)
      }
      catch(err){
        console.log(err);
        swal("Error!", "Resume added failed!", "error");
        setFinish(false)

        
      }
    }
    else{
      alert('fill the form first')
    }
 
  }


  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {/* view of each step */}
            <Box>
              {renderStepArrayContent(activeStep)}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              
              {activeStep === steps.length - 1 ?<Button onClick={handleAddResume}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}

         
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default Steps