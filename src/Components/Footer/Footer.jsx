import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import instgram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
        <footer>
            <div className='social-footer'>
            <img src={instgram} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            </div>
            <div className='logo-f'>
                <img src={logo} alt="" />
            </div>
        </footer>
        <div className="blur blur-f"></div>
    </div>
  )
}

export default Footer
