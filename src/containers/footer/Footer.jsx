import React from 'react'
import './footer.css'
import modernLogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='modernui__footer section__padding'>
      <div className='modernui__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className='modernui__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='modernui__footer-links'>
        <div className='modernui__footer-links_logo'>
          <img src={modernLogo} alt="logo"/>
          <p>Westlands, Nairobi, Kenya. P.O. BOX 123-00100, All rights reserved</p>
        </div>
        <div className='modernui__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Countries</p>
          <p>Contact</p>
        </div>
        <div className='modernui__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='modernui__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Westlands, Nairobi, Kenya. P.O. BOX 123-00100</p>
          <p>0729520665</p>
          <p>info@modernui.com</p>
        </div>
      </div>
      <div className='modernui__footer-copyright'>
        <p>&copy; 2022 ModernUI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer