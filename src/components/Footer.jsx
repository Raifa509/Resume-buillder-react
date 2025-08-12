import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'black'}} className='d-flex justify-content-center align-items-center flex-column'>
      <div className='text-center text-light'>
        <h3>Contact Us</h3>
        <h4><MdEmail className='me-2'/>resumebuilder@gmail.com</h4>
        <h4><FaPhoneAlt className='me-2' />9845632125</h4>
        <div className="d-flex justify-content-evenly fs-4 mt-3">
      <FaWhatsapp />
      <FaFacebook />
      <FaInstagram />
        </div>
        <p className='mt-3'>Designed & build with ❤️ using react</p>
      </div>
    </div>
  )
}

export default Footer