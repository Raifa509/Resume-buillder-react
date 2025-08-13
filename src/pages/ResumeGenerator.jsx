import React from 'react'
import { Link} from 'react-router-dom'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function ResumeGenerator() {
  return (
    <>
     <div className='container-fluid'>
      <h4 className='text-center py-4 mt-4'>Create a job-winning Resume in minutes</h4>
      <div className="row p-5 justify-content-center align-items-center">
        <div className="col-4 box border p-5 text-center shadow">
          <IoDocumentTextSharp className='text-primary fs-2 mb-3' />
          <h5 className='fw-bold'>Add your information</h5>
          <p>Add pre-written examples tp each section</p>
          <h6 className='fw-medium'>Step 1</h6>
        </div>
        <div className="col-1"></div>
        <div className="col-4 box border p-5 text-center shadow">
          <FaFileDownload  className='text-danger fs-2 mb-3' />
          <h5 className='fw-bold'>Download your Resume</h5>
          <p>Download and start applying</p>
          <h6 className='fw-medium'>Step 2</h6>
        </div>
      </div>
<div className='text-center mt-3 mb-5 py-2'>
 <Link to={'/form'}><button className="btn btn-outline-primary">LET'S START</button></Link>
  
</div>
      </div>
    </>
  )
}

export default ResumeGenerator