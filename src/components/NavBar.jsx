import React from 'react'

import {
  NavLink,
  useNavigate
} from 'react-router-dom'

import { motion } from "framer-motion";

import "../stylesheet/NavBar.css"

import logo from '../assets/icon.jpg'

export default function NavBar() {

  const navigate = useNavigate();

  /* LOGIN STATUS */

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/");

    window.location.reload();
  };

  return (

    <motion.div
      className='navbar'

      initial={{
        y: -100,
        opacity: 0
      }}

      animate={{
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 0.8
      }}
    >

      {/* LOGO SECTION */}

      <motion.div
        className="iconText"

        onClick={() => {

          navigate("/");

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }}

        whileHover={{
          scale: 1.03
        }}
      >

        <motion.img
          src={logo}
          alt=""
          className="iconImg"

          whileHover={{
            rotate: 10,
            scale: 1.08
          }}
        />

        <div className="logoText">

          <h2>

            <span className="terra">

              TERRA

            </span>

          </h2>

          <p>Tourism & Travel</p>

        </div>

      </motion.div>

      {/* NAV LINKS */}

      <div className='navLinks'>

        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >

          <NavLink to="/">

            Home

          </NavLink>

        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >

          <NavLink to="/about">

            About Us

          </NavLink>

        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >

          <NavLink to="/gallary">

            Gallary

          </NavLink>

        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >

          <NavLink to="/contact">

            Contact

          </NavLink>

        </motion.div>

        {

          isLoggedIn ? (

            <motion.button
              className="logout-btn"

              onClick={handleLogout}

              whileHover={{
                scale: 1.05
              }}

              whileTap={{
                scale: 0.9
              }}
            >

              Sign Out

            </motion.button>

          ) : (

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >

              <NavLink to="/signin">

                Sign In

              </NavLink>

            </motion.div>

          )

        }

      </div>

    </motion.div>
  )
}