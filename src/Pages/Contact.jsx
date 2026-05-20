import React, { useState } from 'react'

import "../stylesheet/Contact.css";

import bg from '../assets/Contact_Background.jpg'

export default function Contact() {

  /* STATES */

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  /* SEND FUNCTION */

  const handleSend = () => {

    /* EMPTY VALIDATION */

    if (!name || !email || !message) {

      alert("Please fill all fields");

      return;
    }

    /* EMAIL VALIDATION */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert("Enter valid email");

      return;
    }

    /* MESSAGE LENGTH */

    if (message.length < 10) {

      alert(
        "Message should contain at least 10 characters"
      );

      return;
    }

    alert("Message Sent Successfully ✅");

    /* CLEAR FORM */

    setName("");

    setEmail("");

    setMessage("");
  };

  return (

    <div
      className='contact'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >

      {/* TITLE */}

      <h2>Start Your Journey With Us</h2>

      <p>
        Your dream destination is just one
        message away.
      </p>

      {/* CONTACT SECTION */}

      <div className='contact-container'>

        {/* CONTACT INFO */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <p>📞 +91 98765 43210</p>

          <p>📧 terratourism@gmail.com</p>

          <p>📍 Kuala Lumpur, Malaysia</p>

          {/* SOCIAL LINKS */}

          <div className="social-links">

            <a href="#">🌐</a>

            <a href="#">📘</a>

            <a href="#">📷</a>

          </div>

        </div>

        {/* CONTACT FORM */}

        <div className='contact-form'>

          {/* NAME */}

          <label>Full Name</label>

          <input
            type='text'
            placeholder='Your Name'

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }
          />

          {/* EMAIL */}

          <label>Email Address</label>

          <input
            type='email'
            placeholder='Email Address'

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* MESSAGE */}

          <label>Your Message</label>

          <textarea
            placeholder='Type Here'

            rows="5"

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }
          ></textarea>

          {/* BUTTON */}

          <button onClick={handleSend}>

            Send Now

          </button>

        </div>

      </div>

      {/* GOOGLE MAP */}

      <div className="map-container">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.6882501824!2d101.60458728504194!3d3.1385026606618136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1778138090314!5m2!1sen!2sin"

          width="100%"

          height="450"

          style={{ border: 0 }}

          allowFullScreen=""

          loading="lazy"

          referrerPolicy="no-referrer-when-downgrade"

          title="Malaysia Map"
        >

        </iframe>

      </div>

    </div>
  )
}