// Booking.jsx

import React from 'react'
import "../stylesheet/Booking.css";
import bg from "../assets/Booking_Background.jpg";
import { useNavigate } from 'react-router-dom';

export default function Booking() {

  const navigate = useNavigate();

  return (

    <div
      className='booking'
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className='booking-overlay'>

        <div className='booking-form'>
          <h2>Book Your Trip ✈️</h2>
          <input type='text' placeholder='Country, Zip, City' />

          <div className="date-search-container">

            <div className="date-box">

              <label>CHECK IN</label>
              <input type="date" />

            </div>

            <div className="date-box">

              <label>CHECK OUT</label>
              <input type="date" />

            </div>

          </div>

          <div className="dropdown-row">

            <select>
              <option>No. of rooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <select>
              <option>No. of adults</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <select>
              <option>No. of children</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

          </div>

          <div className="contact-row">

            <input type='email' placeholder='Enter your Email' />

            <input
            type="tel"
            placeholder="Enter your Phone"
            maxLength={10}
            onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} />

          </div>
          
          <button onClick={()=> navigate("/")}> Submit </button>

        </div>

      </div>

    </div>
  )
}