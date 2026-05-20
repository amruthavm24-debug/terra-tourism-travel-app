import React, { useState } from 'react'
import "../stylesheet/Booking.css";
import bg from "../assets/Booking_Background.jpg";
import { useNavigate } from 'react-router-dom';

export default function Booking() {

  const navigate = useNavigate();


  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {

    if (
      !location ||
      !checkIn ||
      !checkOut ||
      !rooms ||
      !adults ||
      !children ||
      !email ||
      !phone
    ) {
      alert("Please fill all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Enter valid email");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (checkOut <= checkIn) {
      alert(
        "Check-out date must be after check-in"
      );
      return;
    }

    alert("Booking Successful ✅");

    navigate("/");
  };

  return (

    <div className='booking' style={{ backgroundImage: `url(${bg})` }} >

      <div className='booking-overlay'>

        <div className='booking-form'>

          <h2>Book Your Trip ✈️</h2>

          <input type='text' placeholder='Country, Zip, City' value={location} onChange={(e) =>setLocation(e.target.value)}/>

          <div className="date-search-container">

            <div className="date-box">

              <label>CHECK IN</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value) } />

            </div>

            <div className="date-box">

              <label>CHECK OUT</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value) } />

            </div>

          </div>

          <div className="dropdown-row">

            <select value={rooms} onChange={(e) => setRooms(e.target.value) } >

              <option value=""> No. of rooms </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>

            <select value={adults} onChange={(e) =>setAdults(e.target.value) } >

              <option value=""> No. of adults </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>

            <select value={children} onChange={(e) =>setChildren(e.target.value) }>

              <option value=""> No. of children</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>

          </div>

          <div className="contact-row">

            <input type='email' placeholder='Enter your Email'value={email} onChange={(e) => setEmail(e.target.value) }/>

            <input type="tel" placeholder="Enter your Phone" value={phone} maxLength={10} onChange={(e) =>
                setPhone(e.target.value.replace( /[^0-9]/g,'' ))}
            />

          </div>

          <button onClick={handleBooking}> Submit </button>

        </div>

      </div>

    </div>
  )
}