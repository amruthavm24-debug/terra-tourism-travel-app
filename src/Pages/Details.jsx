// Details.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";

/* =========================
   SINGAPORE IMAGES
========================= */

import singapore1 from "../assets/Singapore_feat.jpg";
import singapore2 from "../assets/Singapore_details1.jpg";
import singapore3 from "../assets/Singapore_details2.jpg";
import singapore4 from "../assets/Singapore_details3.jpg";
import singapore5 from "../assets/Singapore_details4.jpg";

/* =========================
   ANDAMAN IMAGES
========================= */

import andaman1 from "../assets/Andaman_feat.jpg";
import andaman2 from "../assets/Andaman_detail1.jpg";
import andaman3 from "../assets/Andaman_detail2.jpg";
import andaman4 from "../assets/Andaman_detail3.jpg";
import andaman5 from "../assets/Andaman_detail4.jpg";

/* =========================
   KASHMIR IMAGES
========================= */

import Kashmir1 from "../assets/Kashmir_feat.jpg";
import Kashmir2 from "../assets/Kashmir_detail1.jpg";
import Kashmir3 from "../assets/Kashmir_detail2.jpg";
import Kashmir4 from "../assets/Kashmir_detail3.jpg";
import Kashmir5 from "../assets/Kashmir_detail4.jpg";

/* =========================
   MALAYSIA IMAGES
========================= */

import Malaysia1 from "../assets/Malaysia_feat.jpg";
import Malaysia2 from "../assets/Malaysia_details1.jpg";
import Malaysia3 from "../assets/Malaysia_details2.jpg";
import Malaysia4 from "../assets/Malaysia_details3.jpg";
import Malaysia5 from "../assets/Malaysia_details4.jpg";

/* =========================
   MALDIVES IMAGES
========================= */

import Maldives1 from "../assets/Maldives_feat.jpg";
import Maldives2 from "../assets/Maldives_details1.jpg";
import Maldives3 from "../assets/Maldives_details2.jpg";
import Maldives4 from "../assets/Maldives_details3.jpg";
import Maldives5 from "../assets/Maldives_details4.jpg";

/* =========================
   SWITZERLAND IMAGES
========================= */

import Switzerland1 from "../assets/Switzerland_feat.jpg";
import Switzerland2 from "../assets/Switzerland_details1.jpg";
import Switzerland3 from "../assets/Switzerland_details2.jpg";
import Switzerland4 from "../assets/Switzerland_details3.jpg";
import Switzerland5 from "../assets/Switzerland_details4.jpg";

import "../stylesheet/Details.css";

export default function Details() {

  const { id } = useParams();

  /* =========================
     DESTINATIONS COLLECTION
  ========================= */

  const destinations = [

    /* =========================
       SINGAPORE
    ========================= */

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
    },

    /* =========================
       ANDAMAN
    ========================= */

    {
      id: 2,

      title: "Andaman",

      places: [

        {
          image: andaman1,
          name: "Elephant Beach",
          location: "Andaman",
          price: "$240",
          rating: "4.9",
          description:
            "Popular for snorkeling and exciting water sports.",
          map:
            "https://www.google.com/maps?q=Elephant+Beach+Andaman&output=embed"     
        },

        {
          image: andaman2,
          name: "Cellular Jail",
          location: "Port Blair",
          price: "$260",
          rating: "4.8",
          description:
            "Historic colonial prison with light and sound shows.",
            map:
"https://www.google.com/maps?q=Cellular+Jail+Port+Blair&output=embed"
        },

        {
          image: andaman3,
          name: "Radhanagar Beach",
          location: "Andaman",
          price: "$190",
          rating: "4.7",
          description:
            "Beautiful white sand beach with crystal clear water.",
            map:
"https://www.google.com/maps?q=Radhanagar+Beach+Andaman&output=embed"
        },

        {
          image: andaman4,
          name: "Ross Island",
          location: "Andaman",
          price: "$210",
          rating: "4.6",
          description:
            "Island famous for British-era ruins and greenery.",
            map:
"https://www.google.com/maps?q=Ross+Island+Andaman&output=embed"
        },

        {
          image: andaman5,
          name: "Baratang Island",
          location: "Andaman",
          price: "$230",
          rating: "4.8",
          description:
            "Known for limestone caves and mangrove forests.",
            map:
"https://www.google.com/maps?q=Baratang+Island+Andaman&output=embed"
        }

      ]
    },

    /* =========================
       KASHMIR
    ========================= */

    {
      id: 3,

      title: "Kashmir",

      places: [

        {
          image: Kashmir1,
          name: "Dal Lake",
          location: "Kashmir",
          price: "$260",
          rating: "4.9",
          description:
            "Dal Lake is famous for houseboats and beautiful mountain views.",
            map:
"https://www.google.com/maps?q=Dal+Lake+Kashmir&output=embed"
        },

        {
          image: Kashmir2,
          name: "Gulmarg",
          location: "Kashmir",
          price: "$320",
          rating: "4.8",
          description:
            "Popular hill station known for skiing and snow mountains.",
            map:
"https://www.google.com/maps?q=Gulmarg+Kashmir&output=embed"
        },

        {
          image: Kashmir3,
          name: "Pahalgam",
          location: "Kashmir",
          price: "$280",
          rating: "4.7",
          description:
            "Peaceful valley destination with rivers and pine forests.",
            map:
"https://www.google.com/maps?q=Pahalgam+Kashmir&output=embed"
        },

        {
          image: Kashmir4,
          name: "Sonamarg",
          location: "Kashmir",
          price: "$300",
          rating: "4.8",
          description:
            "Scenic place known for glaciers and trekking routes.",
            map:
"https://www.google.com/maps?q=Sonamarg+Kashmir&output=embed"
        },

        {
          image: Kashmir5,
          name: "Mughal Gardens",
          location: "Kashmir",
          price: "$200",
          rating: "4.6",
          description:
            "Historic gardens famous for flowers and fountains.",
            map:
"https://www.google.com/maps?q=Mughal+Gardens+Kashmir&output=embed"
        }

      ]
    },

    /* =========================
       MALAYSIA
    ========================= */

    {
      id: 4,

      title: "Malaysia",

      places: [

        {
          image: Malaysia1,
          name: "Petronas Twin Towers",
          location: "Kuala Lumpur",
          price: "$290",
          rating: "4.9",
          description:
            "Petronas Twin Towers are iconic skyscrapers in Kuala Lumpur known for their stunning modern architecture and beautiful city skyline views.",
            map:
"https://www.google.com/maps?q=Petronas+Twin+Towers&output=embed"

        },

        {
          image: Malaysia2,
          name: "Langkawi",
          location: "Malaysia",
          price: "$320",
          rating: "4.8",
          description:
            "Langkawi is a beautiful island destination famous for beaches, resorts, cable cars, and crystal-clear waters.",
            map:
"https://www.google.com/maps?q=Langkawi+Malaysia&output=embed"
        },

        {
          image: Malaysia3,
          name: "Batu Caves",
          location: "Selangor",
          price: "$210",
          rating: "4.7",
          description:
            "Batu Caves is a famous limestone cave temple known for its giant golden statue and colorful staircase.",
            map:
"https://www.google.com/maps?q=Batu+Caves+Malaysia&output=embed"
        },

        {
          image: Malaysia4,
          name: "Cameron Highlands",
          location: "Malaysia",
          price: "$340",
          rating: "4.8",
          description:
            "Cameron Highlands is a cool hill station famous for tea plantations, green landscapes, and peaceful weather.",
            map:
"https://www.google.com/maps?q=Genting+Highlands+Malaysia&output=embed"
        },

        {
          image: Malaysia5,
          name: "Perhentian Islands",
          location: "Kuala Lumpur",
          price: "$260",
          rating: "4.7",
          description:
            "Perhentian Islands are popular tropical islands known for snorkeling, scuba diving, and beautiful turquoise beaches.",
            map:
"https://www.google.com/maps?q=KL+Tower+Malaysia&output=embed"
        }

      ]
    },

    /* =========================
       MALDIVES
    ========================= */

    {
      id: 5,

      title: "Maldives",

      places: [

        {
          image: Maldives1,
          name: "Male",
          location: "Maldives",
          price: "$450",
          rating: "5.0",
          description:
            "Male is the vibrant capital city of the Maldives, known for colorful streets, local markets, and beautiful ocean views.",
            map:
"https://www.google.com/maps?q=Male+Maldives&output=embed"
        },

        {
          image: Maldives2,
          name: "Maafushi",
          location: "Maldives",
          price: "$280",
          rating: "4.7",
          description:
            "Maafushi is a popular island destination famous for budget-friendly resorts, water sports, and crystal-clear beaches.",
            map:
"https://www.google.com/maps?q=Private+Island+Maldives&output=embed"
        },

        {
          image: Maldives3,
          name: "Vaadhoo Island",
          location: "Maldives",
          price: "$520",
          rating: "5.0",
          description:
            "Vaadhoo Island is famous for the magical “Sea of Stars” phenomenon, where the beach glows beautifully at night.",
                map:
"https://www.google.com/maps?q=Coral+Beach+Maldives&output=embed"
        },

        {
          image: Maldives4,
          name: "Banana Reef",
          location: "Maldives",
          price: "$390",
          rating: "4.8",
          description:
            "Banana Reef is one of the Maldives’ most famous diving spots, known for colorful coral reefs and marine life.",
            map:
"https://www.google.com/maps?q=Sunset+Cruise+Maldives&output=embed"
        },

        {
          image: Maldives5,
          name: "Alimatha Island",
          location: "Maldives",
          price: "$300",
          rating: "4.9",
          description:
            "Alimatha Island is a stunning tropical island known for luxury resorts, water villas, and relaxing beach experiences."
        }

      ]
    },

    /* =========================
       SWITZERLAND
    ========================= */

    {
      id: 6,

      title: "Switzerland",

      places: [

        {
          image: Switzerland1,
          name: "Matterhorn",
          location: "Switzerland",
          price: "$480",
          rating: "5.0",
          description:
            "Matterhorn is one of the most iconic mountains in the world, famous for its pyramid-shaped snowy peak and breathtaking Alpine scenery.",
            map:
"https://www.google.com/maps?q=Swiss+Alps&output=embed"
        },

        {
          image: Switzerland2,
          name: "Lake Geneva",
          location: "Switzerland",
          price: "$350",
          rating: "4.8",
          description:
            "Lake Geneva is a stunning lake surrounded by mountains, vineyards, and charming Swiss cities.",
            map:
"https://www.google.com/maps?q=Zurich+Switzerland&output=embed"
        },

        {
          image: Switzerland3,
          name: "Interlaken",
          location: "Switzerland",
          price: "$420",
          rating: "4.9",
          description:
            "Interlaken is a beautiful resort town located between two lakes, known for adventure sports and scenic mountain views.",
            map:
"https://www.google.com/maps?q=Interlaken+Switzerland&output=embed"
        },

        {
          image: Switzerland4,
          name: "Lucerne",
          location: "Switzerland",
          price: "$390",
          rating: "4.8",
          description:
            "Lucerne is a charming Swiss city famous for its lake, historic wooden bridges, and picturesque mountain surroundings.",
            map:
"https://www.google.com/maps?q=Lucerne+Switzerland&output=embed"
        },

        {
          image: Switzerland5,
          name: "Jungfraujoch",
          location: "Switzerland",
          price: "$520",
          rating: "5.0",
          description:
            "Jungfraujoch is known as the “Top of Europe,” offering stunning glacier views, snow activities, and scenic train journeys.",
            map:
"https://www.google.com/maps?q=Jungfraujoch+Switzerland&output=embed"
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