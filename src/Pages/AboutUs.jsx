import React from 'react'
import bg from '../assets/AboutUs_Background.jpg'
import img1 from '../assets/AboutUs_Image1.jpg'
import img2 from '../assets/AboutUs_Image2.jpg'
import img4 from '../assets/AboutUs_Image4.jpg'
import "../stylesheet/AboutUs.css";

export default function AboutUs() {
  return (

    <div
      className='about'
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className='about-card'>

        <div className='about-top'>
         
          <div className='about-content'>

            <h2>About Us</h2>

            <p>
              At Terra Tourism & Travel, we create unforgettable
              travel experiences by helping people explore beautiful
              destinations around the world with comfort, safety,
              and affordability.

              Our vision is to inspire people to discover the beauty
              of travel through memorable journeys, while our mission
              is to provide quality travel services, affordable
              packages, and exceptional customer experiences for
              every traveler.
            </p>

          </div>

          <div className="about-images">
            <img src={img1} alt="travel" className="img1"/>

            <img src={img2} alt="travel" className="img2"/>

            <img src={img4} alt="travel" className="img4" />
          </div>

        </div>

        <div className="choose-us">

          <h2>Why Choose Us</h2>
          <div className="choose-container">
            <div className="choose-card">
              <h3>✈️ Best Travel Experience</h3>
              <p>
                Enjoy unforgettable journeys with carefully planned tours.
              </p>
            </div>

            <div className="choose-card">
              <h3>💰 Affordable Packages</h3>
              <p>
                Travel the world with budget-friendly and flexible packages.
              </p>
            </div>

            <div className="choose-card">
              <h3>🌍 Worldwide Destinations</h3>
              <p>
                Explore beautiful destinations across the globe.
              </p>
            </div>

            <div className="choose-card">
              <h3>🛡️ Safe & Trusted</h3>
              <p>
                Your safety and comfort are always our top priorities.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  )
}