import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheet/NavBar.css"
import icon from '../assets/icon.jpg'

export default function NavBar() {
  return (
    <div className='navbar'>

      <h1 className='iconText'>
                <img src={icon} className="iconImg" alt="logo"></img>
                Terra <br/> Tourism & Travel
        </h1>
      
      <div className='navLinks'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/gallary">Gallary</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  )
}
