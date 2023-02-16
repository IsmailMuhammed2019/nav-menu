import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

 return (
  <>
  <nav>
   <div className="nav-center">
    <div className="nav-header">
     <img src={logo} alt="logo" />
     <button className="nav-toggele">
      <FaBars />
     </button>
    </div>
   </div>
  </nav>
  </>
    )
}
export default Navbar