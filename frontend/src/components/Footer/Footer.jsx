import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt=''/>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0901610273</li>
                <li>nguyenhoangphihung633@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
