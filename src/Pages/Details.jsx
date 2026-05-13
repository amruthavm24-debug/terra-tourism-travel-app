// Details.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";

import singapore1 from "../assets/Singapore_feat.jpg";
import singapore2 from "../assets/Singapore_details1.jpg";
import singapore3 from "../assets/Singapore_details2.jpg";
import singapore4 from "../assets/Singapore_details3.jpg";
import singapore5 from "../assets/Singapore_details4.jpg";

import "../stylesheet/Details.css";

export default function Details() {

  const { id } = useParams();

  /* =========================
     DESTINATIONS COLLECTION
  ========================= */

  const destinations = [

    {
      id: 1,

      title: "Singapore",

      places: [

        {
          image: singapore1,

          name: "Marina Bay Sands",

          location: "Singapore",

          price: "$280",

          rating: "4.9",

          description:
            "Luxury hotel with stunning skyline and infinity pool views.",

          map:
            "https://www.google.com/maps?q=Marina+Bay+Sands+Singapore&output=embed"
        },

        {
          image: singapore2,

          name: "Singapore Flyer",

          location: "Singapore",

          price: "$220",

          rating: "4.8",

          description:
            "The Singapore Flyer offers panoramic skyline views.",

          map:
            "https://www.google.com/maps?q=Singapore+Flyer&output=embed"
        },

        {
          image: singapore3,

          name: "Sentosa Island",

          location: "Singapore",

          price: "$300",

          rating: "5.0",

          description:
            "Beautiful island destination with beaches and entertainment.",

          map:
            "https://www.google.com/maps?q=Sentosa+Island+Singapore&output=embed"
        },

        {
          image: singapore4,

          name: "Gardens by the Bay",

          location: "Singapore",

          price: "$350",

          rating: "4.7",

          description:
            "Famous futuristic nature park with Supertree Grove.",

          map:
            "https://www.google.com/maps?q=Gardens+by+the+Bay+Singapore&output=embed"
        },

        {
          image: singapore5,

          name: "Merlion Park",

          location: "Singapore",

          price: "$180",

          rating: "4.6",

          description:
            "Iconic Singapore landmark with waterfront views.",

          map:
            "https://www.google.com/maps?q=Merlion+Park+Singapore&output=embed"
        }

      ]
    }

  ];

  /* =========================
     FIND DESTINATION
  ========================= */

  const selectedItem = destinations.find(
    (item) => item.id === Number(id)
  );

  /* =========================
     SAFETY CHECK
  ========================= */

  if (!selectedItem) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        Destination Not Found
      </h1>

    );
  }

  /* =========================
     STATE
  ========================= */

  const [currentIndex, setCurrentIndex] = useState(0);

  /* =========================
     NEXT IMAGE
  ========================= */

  const nextImage = () => {

    setCurrentIndex(

      currentIndex === selectedItem.places.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  /* =========================
     PREVIOUS IMAGE
  ========================= */

  const prevImage = () => {

    setCurrentIndex(

      currentIndex === 0
        ? selectedItem.places.length - 1
        : currentIndex - 1
    );
  };

  /* =========================
     CURRENT PLACE
  ========================= */

  const currentPlace =
    selectedItem.places[currentIndex];

  return (

    <div className="details-page">

      {/* TITLE */}

      <h1 className="hotel-title">

        Welcome to {selectedItem.title}

      </h1>

      {/* IMAGE SLIDER */}

      <div className="gallery-section">

        <div className="main-image-container">

          <img
            src={currentPlace.image}
            alt={currentPlace.name}
            className="main-image"
          />

          {/* LEFT */}

          <button
            className="gallery-arrow left-arrow"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* RIGHT */}

          <button
            className="gallery-arrow right-arrow"
            onClick={nextImage}
          >
            ❯
          </button>

          {/* DOTS */}

          <div className="slider-dots">

            {
              selectedItem.places.map((_, index) => (

                <span
                  key={index}

                  className={
                    currentIndex === index
                      ? "dot active-dot"
                      : "dot"
                  }
                ></span>

              ))
            }

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="content-section">

        {/* LEFT */}

        <div className="description-section">

          <h2>
            {currentPlace.name}
          </h2>

          <p className="location">
            📍 {currentPlace.location}
          </p>

          <p>
            {currentPlace.description}
          </p>

          {/* MAP */}

          <div className="map-section">

            <h3>
              Location Map
            </h3>

            <iframe
              src={currentPlace.map}
              title="map"
              className="location-map"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

          {/* FEATURES */}

          <div className="feature-grid">

            <div className="feature-card">

              <h3>
                ⭐ {currentPlace.rating}
              </h3>

              <p>Rating</p>

            </div>

            <div className="feature-card">

              <h3>
                {currentPlace.price}
              </h3>

              <p>Per Night</p>

            </div>

            <div className="feature-card">

              <h3>
                🏨 Premium
              </h3>

              <p>Luxury Stay</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="booking-card">

          <h3>
            Start Your Booking
          </h3>

          <h2>
            {currentPlace.price}

            <span> / per night</span>
          </h2>

          <label>
            Check In
          </label>

          <input type="date" />

          <label>
            Check Out
          </label>

          <input type="date" />

          <label>
            Room Type
          </label>

          <select>

            <option>Deluxe Room</option>

            <option>Luxury Room</option>

            <option>Family Suite</option>

          </select>

          <button className="book-btn">
            Continue to Book
          </button>

        </div>

      </div>

    </div>
  );
}