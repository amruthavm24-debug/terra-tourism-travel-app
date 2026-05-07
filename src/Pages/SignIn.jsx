import React from 'react'
import "../stylesheet/SignIn.css";
import bg from '../assets/SignIn_Background.jpg'

export default function SignIn() {
  return (
    <div className='signin' >

      <div className="blur-bg" style={{ backgroundImage: `url(${bg})` }}></div>

        <div className='signin-container'>                

        <div className="signin-image">
            <img src={bg} alt="travel" />

            <div className="signin-text">
              <h2>ENJOY THE WORLD</h2>
              <p>Explore amazing destinations with us.</p>
            </div>
          </div>

          <div className="signin-form">
            <h2>Welcome Back ✈️</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <label>Password must be at least 6 characters</label> */}
            <input type="password" placeholder="Confirm Password" />
            <button>Sign In</button>

            <div className="or-section">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>

            <button> Register </button>

          </div>
      </div>
    </div>
  )
}
