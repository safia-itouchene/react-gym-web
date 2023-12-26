import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
       <img src={logo} className='logo' alt=""/>

       <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
       </ul>

       
    </div>
  )
}

export default Header
