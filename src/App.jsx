import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './Pages/Home'
import About from './Pages/AboutUs'
import Gallary from './Pages/Gallary'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import Footer from './components/Footer'
import Booking from './Pages/Booking'
import Register from './Pages/Register'
import Details from './Pages/Details' 

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
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/details/:id" element={<Details />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
