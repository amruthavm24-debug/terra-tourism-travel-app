import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../stylesheet/NavBar.css"
import icon from '../assets/icon.jpg'

export default function NavBar() {

  const navigate = useNavigate();

  const isLoggedIn =
  localStorage.getItem("isLoggedIn");

  const handleLogout = ()=>{

    localStorage.removeItem("isLoggedIn");
     alert("Logged Out Successfully");
     navigate("/");
     window.location.reload();
  };

  return (
    <div className='navbar'>

      <h1 className='iconText'>
                <img src={icon} className="iconImg" alt="logo"></img>
                TERRA <br/> Tourism & Travel
        </h1>
      
      <div className='navLinks'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/gallary">Gallary</Link>
        <Link to="/contact">Contact</Link>
        {/* CONDITIONAL BUTTON */}
        {
          isLoggedIn ? 
          (<button className="logout-btn" onClick={handleLogout} > Sign Out </button> ) : (
            <Link to="/signin"> Sign In </Link>
          )

        }
      </div>
    </div>
  )
}
