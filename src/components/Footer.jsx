import React from 'react'

import "../stylesheet/Footer.css";

import {
  FaFacebookF,
  FaGlobe
} from 'react-icons/fa';

import { FaInstagram } from 'react-icons/fa6';

import { motion } from "framer-motion";

export default function Footer() {

  return (

    <motion.footer
      className="footer"

      initial={{
        opacity: 0,
        y: 50
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8
      }}
    >

      <div className="footer-container">

        <p>Follow Us</p>

        {/* SOCIAL ICONS */}

        <div className="social-icons">

          {/* WEBSITE */}

          <motion.a href="https://yourwebsite.com" target="_blank" rel="noreferrer"
            whileHover={{
              scale: 1.2
            }}

            whileTap={{
              scale: 0.9
            }}
          >

            <FaGlobe />

          </motion.a>

          {/* FACEBOOK */}

          <motion.a href="https://facebook.com" target="_blank" rel="noreferrer"
            whileHover={{
              scale: 1.2
            }}

            whileTap={{
              scale: 0.9
            }}
          >

            <FaFacebookF />

          </motion.a>

          {/* INSTAGRAM */}

          <motion.a href="https://instagram.com" target="_blank" rel="noreferrer"whileHover={{
              scale: 1.2
            }}

            whileTap={{
              scale: 0.9
            }}
          >

            <FaInstagram />

          </motion.a>

        </div>

      </div>

      {/* COPYRIGHT */}

      <p className="footer-bottom">

        © 2026 Terra Tourism & Travel Explore.
        All rights reserved.

      </p>

    </motion.footer>
  )
}