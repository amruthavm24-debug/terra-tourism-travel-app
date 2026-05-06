import React from 'react'
import "../stylesheet/Footer.css";
import { FaFacebook, FaFacebookF, FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
   <footer className="footer">
      <div className="footer-container">        
        <p>Follow Us</p>
        
        <div className="social-icons">       
          <FaGlobe/>
          <FaFacebookF/>
          <FaInstagram/>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 Terra Tourism & Travel Explore. All rights reserved.
      </p>
    </footer>
  );
}
