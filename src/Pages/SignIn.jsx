import React, { useState } from 'react'
import "../stylesheet/SignIn.css";
import bg from '../assets/SignIn_Background.jpg'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState(); 

  const handlesignin = ()=>{
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if(!storedUser){
      alert("No Account Found");
      return;
    }

    if(email === storedUser.email && password === storedUser.password) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful ✅");
      navigate("/");
      window.location.reload();
    }else{
      alert("Invalid Email or Password ❌");
    }
  };

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
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* <label>Password must be at least 6 characters</label> */}
            <input type="password" placeholder="Confirm Password" />
            <button onClick={handlesignin}>Sign In</button>

            <div className="or-section">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>

            <button  onClick={()=> navigate("/register")}>Register</button>

          </div>
      </div>
    </div>
  )
}
