import React from 'react'
import "../stylesheet/Booking.css";
import bg from "../assets/Booking_Background.jpg";

export default function Booking() {
  return (
    <div 
      className='booking'
      style={{backgroundImage:`url(${bg})`}}
    >
      <div className='booking-overlay'>
        <div className='booking-form'>

          <h2>Book Your Trip ✈️</h2>

          <input type='text' placeholder='Full Name'></input>
          <input type='email' placeholder='Email'></input>
          <input type='text' placeholder='Destination'></input>
          <input type='date'></input>

          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}
