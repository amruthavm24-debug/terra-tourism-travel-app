// Hero.jsx

import React from "react";
import Background from '../assets/Hero_Background.jpg'
import "../stylesheet/Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (

    <div className="hero" style={{ backgroundImage: `url(${Background})` }} >

      <div className="hero-content">
        <h1>Explore the World 🌍</h1>
        <p> Discover amazing places with Terra Tourism & Travel</p>

        <button className="explore-btn" onClick={() => navigate("/booking")}> Book Now </button>

        <div className="search-box">
          <input type="text" placeholder="Search destinations..." />
          <button className="search-btn"> 🔍 </button>
        </div>

      </div>

    </div>
  );
}