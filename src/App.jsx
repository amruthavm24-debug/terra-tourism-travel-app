import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './Pages/Home'
import About from './Pages/AboutUs'
import Gallary from './Pages/Gallary'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import Footer from './components/Footer'
import Booking from './Pages/Booking'


function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallary" element={<Gallary/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
