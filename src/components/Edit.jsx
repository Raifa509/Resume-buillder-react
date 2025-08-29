import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';
import { getAResumeAPI,editResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Edit({ resumeId,setUpdateUserInput}) {

    const [userSkill,setUserSkill]=React.useState('') //input from text box is string
    const [userInput, setUserInput] = React.useState({})

    const [open, setOpen] = React.useState(false);
    console.log(resumeId);
    console.log(userInput);


    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])


    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeAPI(resumeId)
            setUserInput(result?.data)
        } catch (err) {
            console.log(err);

        }
    }

    //modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // button add
    const addSkill=()=>{
        if(userSkill){
            if(userInput.skills.includes(userSkill)){
                alert("Given skill is already existing!!! Add another...")
            }else{
                setUserInput({...userInput,skills:[...userInput.skills,userSkill]})
            }
            setUserSkill('')
        }
    }

    const removeSkill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}

const handleResumeUpdate=async()=>{
    try{

        const result=await editResumeAPI(userInput?.id,userInput)
        setUpdateUserInput(result?.data)
        swal("Success!", "Resume updated successfully!", "success");
        handleClose()//to close modal

        

    }catch(err)
    {
        console.log(err);
        
    }
}
    return (
        <>
            <button onClick={handleOpen} className='btn fs-3 text-primary'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}

                        <h4 className='mt-4'>Personal Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, name: e.target.value }
                            })} value={userInput?.personalData?.name} />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value }
                            })} value={userInput?.personalData?.jobTitle} />
                            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, location: e.target.value }
                            })} value={userInput?.personalData?.location} />
                        </div>
                        {/*contact details  */}
                        <h4 className='mt-4'>Contact Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, email: e.target.value }
                            })} value={userInput?.personalData?.email} />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, phone: e.target.value }
                            })} value={userInput?.personalData?.phone} />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, github: e.target.value }
                            })} value={userInput?.personalData?.github} />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value }
                            })} value={userInput?.personalData?.linkedin} />
                            <TextField id="standard-basic-portfolio" label="Protfolio Link" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value }
                            })} value={userInput?.personalData?.portfolio} />

                        </div>
                        {/* Education details */}
                        <h4 className='mt-4'>Education Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, education: { ...userInput.education, course: e.target.value }
                            })} value={userInput?.education?.course} />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, education: { ...userInput.education, college: e.target.value }
                            })} value={userInput?.education?.college} />
                            <TextField id="standard-basic-university" label="University" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, education: { ...userInput.education, university: e.target.value }
                            })} value={userInput?.education?.university} />
                            <TextField id="standard-basic-year" label="Year of passout" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, education: { ...userInput.education, year: e.target.value }
                            })} value={userInput?.education?.year} />
                        </div>
                        {/* professional details */}
                        <h4 className='mt-4'>Professional Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-jobrole" label="Job or Internship" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, experience: { ...userInput.experience, jobRole: e.target.value }
                            })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-companyname" label="Company Name" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, experience: { ...userInput.experience, company: e.target.value }
                            })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-companylocation" label="Company Location" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value }
                            })} value={userInput?.experience?.jobLocation} />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={(e) => setUserInput({
                                ...userInput, experience: { ...userInput.experience, duration: e.target.value }
                            })} value={userInput?.experience?.duration} />
                        </div>
                        {/* skills */}
                        <h4>Skills</h4>

                        <div className="d-flex align-item-center justify-content-between p-3">

            
                            <TextField onChange={e=>setUserSkill(e.target.value)} sx={{width:'400px'}} id='standard-basic-skill' label="Add Skills" variant='standard' value={userSkill}/>
                            <Button onClick={addSkill}  variant="text">Add</Button>
                        </div>

                        <h5>Added Skills :</h5>
                        <div className='d-flex flex-wrap justify-content-between my-3'>
                            {/* ADDING SKILL DISPLAY */}
                            {

                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (
                                    <span className='btn btn-primary d-flex align-items-center justify-content-center mb-3'>{item}<button onClick={() => removeSkill(item)} className='btn text-light' >X</button></span>
                                ))

                            }

                        </div>

                        {/* summary */}
                        <h4 className='mt-4'>Professional Summary</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} variant="standard" onChange={e=>setUserInput({
                                ...userInput,summary:e.target.value
                            })} value={userInput?.summary}/>

                        </div>
                    </Typography>
                    <div className='text-center mt-4'><button className="btn btn-outline-dark " onClick={handleResumeUpdate}>Update</button></div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit