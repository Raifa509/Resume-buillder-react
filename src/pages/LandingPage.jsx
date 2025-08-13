import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section id='part1' className=' container-fluid w-100' style={{ backgroundImage: "url('https://i0.wp.com/www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png?fit=2240%2C1260&ssl=1')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box border py-5 rounded my-5 text-center shadow" style={{ backgroundColor: "rgb(225,225,225,0.4)" }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills,your story,your next job — all in one.</h4>
            <Link to={'/resume'}> <button className="btn btn-dark px-3 py-2 mt-4">Make Your Resume</button></Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* tools */}

      <section className='p-5'>
        <h2 className='text-center mt-4'>Tools</h2>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">

            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>

          </div>
          <div className="tool-img col-12 col-md-6">
            <img className='img-fluid w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@2x.png" alt="" />
          </div>
        </div>
      </section>

      <section className='w-100' style={{ backgroundImage: "url('https://i0.wp.com/www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png?fit=2240%2C1260&ssl=1')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}></section>

      {/* testimony */}
      <section className='p-5'>
        <h2 className='text-center mt-4'>Testimony</h2>
        <div className='row align-items-center'>
          <div className="col-12 col-md-6 p-5">

            <h4>Trusted by professionals worldwide.</h4>
            <p>At LiveCareer,we don't just help you land the job.Whether you're a seasoned professional or just starting out,our tools are designed to get results.</p>

            <p>In fact,users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p>Join thousands of job-seekers who've fast-tracked their carrers with a resume that truley stand out </p>


          </div>
          <div className="tool-img col-12 col-md-6">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oCwaM_GA0nkQKXeT0Q9iJV6q9fw-0UsQJo9EewXPOoffnrJ4-9QiigBxfaNbnQqPwVg&usqp=CAU" alt="" />

              </div>
               <div className="col-3">
                <img className='w-100' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
