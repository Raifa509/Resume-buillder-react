import React from 'react'
import { Link } from 'react-router-dom'

function ResumeGenerator() {
  return (
    <>
      <h5 className='text-center mt-4'>Create a job-winning Resume in minutes</h5>
      <div className='container-fluid'>
        <div className='row justify-content-center align-items-center'>

          <div className="col-12 col-md-4 border shadow box d-flex justify-content-center align-items-center flex-column">
            <h5>Add your information</h5>
            <p>Add pre-written examples to each section</p>
            <h6>Step 1</h6>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-4 border shadow box d-flex justify-content-center align-items-center flex-column">
            <h5>Download your Resume</h5>
            <p>Download and start applying</p>
            <h6>Step 2</h6>
          </div>
    
        </div>
      </div>
     <Link to={'/form'}> <button className="btn-success">Let's Start</button></Link>
    </>
  )
}

export default ResumeGenerator