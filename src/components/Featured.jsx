// Featured.jsx

import React from 'react'
import { useNavigate } from "react-router-dom";

import img1 from "../assets/Singapore_feat.jpg";
import img2 from "../assets/Andaman_feat.jpg";
import img3 from "../assets/Kashmir_feat.jpg";
import img4 from "../assets/Malaysia_feat.jpg";
import img5 from "../assets/Maldives_feat.jpg";
import img6 from "../assets/Switzerland_feat.jpg";

import "../stylesheet/Featured.css";

export default function Featured() {

  const navigate = useNavigate();

  /* =========================
     DESTINATION COLLECTION
  ========================= */

  const destinations = [

    {
      id: 1,
      title: "Singapore",
      image: img1,
      description: "Gardens, skyscrapers, and everything in between"
    },

    {
      id: 2,
      title: "Andaman",
      image: img2,
      description: "Escape to the turquoise paradise of the Andaman Islands."
    },

    {
      id: 3,
      title: "Kashmir",
      image: img3,
      description: "Heaven on Earth"
    },

    {
      id: 4,
      title: "Malaysia",
      image: img4,
      description: "Rainforests, city skylines, and street food heaven."
    },

    {
      id: 5,
      title: "Maldives",
      image: img5,
      description: "A slice of heaven."
    },

    {
      id: 6,
      title: "Switzerland",
      image: img6,
      description: "Lost in the majestic grandeur of the Swiss Alps."
    }

  ];

  return (

    <div className="featured">

      <h2>Featured Destinations</h2>

      <div className='featured-card-container'>

        {
          destinations.map((item) => (

            <div key={item.id}
              className='featured-card'

              onClick={() =>
                navigate(`/details/${item.id}`)
              }
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))
        }

      </div>

    </div>
  )
}