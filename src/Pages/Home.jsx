import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import AboutUs from '../Pages/AboutUs'
import Gallary from '../Pages/Gallary'
import Contact from '../Pages/Contact'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <AboutUs />
      <Gallary />
      <Contact />
    </div>
  )
}
