import React, { useState } from 'react'
import "../stylesheet/Register.css";
import bg from '../assets/SignIn_Background.jpg'
import { useNavigate } from 'react-router-dom';

export default function SigninForm() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleregister = ()=>{

    if(!name || !email || !password || !confirmPassword){
      alert("Please fill all fields");
      return;
    }

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const user ={name : name, email : email, password : password };

    localStorage.setItem("user",JSON.stringify(user));

    localStorage.setItem("isLoggedIn", "true" );

    alert("Registration Successful ✅");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

     navigate("/");
     window.location.reload();
  };

  return (
    <div 
          className='register'
          style={{backgroundImage:`url(${bg})`}}
        >
          <div className='register-overlay'>
            <div className='register-form'>
    
              <h2>Create Your Account</h2>
    
              <label>Full Name</label>
              <input type='text' placeholder='Your Name' 
              value={name} onChange={(e)=>setName(e.target.value)}></input>

              <label>Email Address</label>
              <input type='email' placeholder='Email Address'
              value={email} onChange={(e)=>setEmail(e.target.value)}></input>

              <label>Password</label>
              <input type="password" placeholder="Password" 
              value={password} onChange={(e)=>setPassword(e.target.value)}></input>

              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" 
              value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
    
              <button onClick={handleregister}>Sign Up</button>
            </div>
          </div>
        </div>
  )
}
