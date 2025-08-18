import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div className='flex-column d-flex justify-content-center align-items-center'>
      <h4>Page Not Found</h4>
      <h6>Sorry,we couldn't find the page.</h6>
      <Link to={'/'}><button className="btn-primary">Go to Homepage</button></Link>
    </div>
    </>
  )
}

export default PageNotFound