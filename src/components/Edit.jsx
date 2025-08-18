import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';



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


function Edit() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />
                        </div>
                        {/*contact details  */}
                        <h4 className='mt-4'>Contact Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-email" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Protfolio Link" variant="standard" />

                        </div>
                        {/* Education details */}
                        <h4 className='mt-4'>Education Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Corse Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" />
                            <TextField id="standard-basic-university" label="University" variant="standard" />
                            <TextField id="standard-basic-year" label="Year of passout" variant="standard" />
                        </div>
                        {/* professional details */}
                        <h4 className='mt-4'>Professional Details</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-jobrole" label="Job or Internship" variant="standard" />
                            <TextField id="standard-basic-companyname" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-companylocation" label="Company Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>
                        {/* skills */}
                        <h4>Skills</h4>

                        <div className="d-flex align-item-center justify-content-between p-3">
                            <TextField className='w-75' id="standard-basic-skill" label="Add Skills" variant="standard" />
                            <Button variant="text">Add</Button>
                        </div>
                        <h6>Added Skills :</h6>
                        <div className='d-flex flex-wrap justify-content-between my-3'> <span className='btn btn-outline-primary d-flex align-items-center justify-content-center'>REACT<button className='btn text-light'>X</button></span></div>

                        {/* summary */}
                        <h4 className='mt-4'>Professional Summary</h4>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} variant="standard" />

                        </div>
                    </Typography>
                    <div className='text-center mt-4'><button className="btn btn-outline-dark ">Update</button></div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit