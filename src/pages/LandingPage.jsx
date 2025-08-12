import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section id='part1' className='w-100' style={{backgroundImage:"url('https://i0.wp.com/www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png?fit=2240%2C1260&ssl=1')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}>
      <div className="row pt-5">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 box border py-5 rounded my-5 text-center">
            <h3>Designed to get hired.</h3>
            <h4>Your skills,your story,your next job — all in one.</h4>
           <Link to={'/resume'}> <button className="btn btn-dark px-3 py-2 mt-4">Make Your Resume</button></Link>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </section>
    
    </>
  )
}

export default LandingPage
