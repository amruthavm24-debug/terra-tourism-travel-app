import React from 'react'

import Bali from '../assets/Gallary_Bali.jpg'
import Dubai from '../assets/Gallary_Dubai.jpg'
import Japan from '../assets/Gallary_Japan.jpg'
import Kashmir from '../assets/Gallary_Kashmir.jpg'
import Maldives from '../assets/Gallary_Maldives.jpg'
import Paris from '../assets/Gallary_Paris.jpg'
import Rajastan from '../assets/Gallary_Rajastan.jpg'
import Rome from '../assets/Gallary_Rome.jpg'
import Santorini from '../assets/Gallary_Santorini.jpg'
import Switzerland from '../assets/Gallary_Switzerland.jpg'
import Tajmahal from '../assets/Gallary_Tajmahal.jpg'

import "../stylesheet/Gallary.css";

export default function Gallary() {

  /* GALLERY DATA */
  const galleryData = [

    {
      id: 1,image: Bali,title: "Bali, Indonesia",category: "Beach"
    },

    {
      id: 2,image: Dubai,title: "Dubai, UAE",category: "City"
    },

    {
      id: 3,image: Japan,title: "Japan",category: "Culture"
    },

    {
      id: 4,image: Kashmir,title: "Kashmir, India",category: "Mountain"
    },

    {
      id: 5,image: Maldives,title: "Maldives",category: "Beach"
    },

    {
      id: 6,image: Paris,title: "Paris, France",category: "City"
    },

    {
      id: 7,image: Rajastan,title: "Rajastan, India",category: "Desert"
    },

    {
      id: 8,image: Rome,title: "Rome, Italy",category: "Historical"
    },

    {
      id: 9,image: Santorini,title: "Santorini, Greece",category: "Beach"
    },

    {
      id: 10,image: Switzerland,title: "Switzerland",category: "Mountain"
    },

    {
      id: 11,image: Tajmahal,title: "Tajmahal, India",category: "Historical"
    },

  ];

  return (

    <div className='gallary'>

      <h2>Explore Our Gallery 🌍</h2>

      <p>
        Discover breathtaking destinations and unforgettable
        travel experiences around the world.
      </p>

      {/* GALLERY GRID */}
      <div className='gallary-card-container'>

        {galleryData.map((item) => (

          <div className='gallary-card' key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            {/* OVERLAY */}
            <div className='gallary-overlay'>

              <h3>{item.title}</h3>

              <span>{item.category}</span>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}