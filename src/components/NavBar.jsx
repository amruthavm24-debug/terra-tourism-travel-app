import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../stylesheet/NavBar.css"
import logo from '../assets/icon.jpg'

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

      <div className="iconText">

        <img src={logo} alt="" className="iconImg" />

        <div className="logoText">
          
          <h2>
            <span className="terra">TERRA</span>
          </h2>

          <p>Tourism & Travel</p>

        </div>

      </div>
      
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
