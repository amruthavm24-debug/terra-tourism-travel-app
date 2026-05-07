import React from 'react'
import "../stylesheet/Contact.css";
import bg from '../assets/Contact_Background.jpg'

export default function Contact() {
  return (
    <div className='contact' style={{ backgroundImage: `url(${bg})` }}>
      <h2>Start Your Journey With Us</h2>
      <p>Your dream destination is just one message away.</p>

      <div className='contact-form'>

        <label>Full Name</label>
        <input type='text' placeholder='Your Name'></input>

        <label>Email Address</label>
        <input type='email' placeholder='Email Address'></input>

        <label>Your Message</label>
        <textarea  placeholder='Type Here' rows="5"></textarea>

        <button>Send Now</button>

      </div>

      <div className="map-container">

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.6882501824!2d101.60458728504194!3d3.1385026606618136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1778138090314!5m2!1sen!2sin" 
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Malaysia Map">
        </iframe>

      </div>
    </div>
  )
}
