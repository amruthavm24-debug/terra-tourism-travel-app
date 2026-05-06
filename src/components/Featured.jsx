import React from 'react'
import img1 from "../assets/Singapore_feat.jpg";
import img2 from "../assets/Andaman_feat.jpg";
import img3 from "../assets/Kashmir_feat.jpg";
import img4 from "../assets/Malaysia_feat.jpg";
import img5 from "../assets/Maldives_feat.jpg";
import img6 from "../assets/Switzerland_feat.jpg";

import "../stylesheet/Featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <h2>Featured Destinations</h2>

      <div className='featured-card-container'>
        <div className='featured-card'>
            <img src={img1} alt="Singapore"></img>
            <h3>Singapore</h3>
            <p>Gardens, skyscrapers, and everything in between</p>
        </div>

        <div className='featured-card'>
            <img src={img2} alt="Andaman"></img>
            <h3>Andaman</h3>
            <p>Escape to the turquoise paradise of the Andaman Islands. </p>
        </div>

        <div className='featured-card'>
            <img src={img3} alt="Kashmir"></img>
            <h3>Kashmir</h3>
            <p>Heaven on Earth</p>
        </div>

        <div className='featured-card'>
            <img src={img4} alt="Malaysia"></img>
            <h3>Malaysia</h3>
            <p>"Lost in the charm of KL," "Malaysia: Truly Asia," or "Rainforests, city skylines, and street food heaven.</p>
        </div>

        <div className='featured-card'>
            <img src={img5} alt="Maldives"></img>
            <h3>Singapore</h3>
            <p> A slice of heaven.</p>
        </div>

        <div className='featured-card'>
            <img src={img6} alt="Switzerland"></img>
            <h3>Switzerland</h3>
            <p>Postcard feelings, real life, On mountain time, Having a Swiss-sational time, and Lost in the majestic grandeur of the Swiss Alps.</p>
        </div>

      </div>
    </div>
  )
}
