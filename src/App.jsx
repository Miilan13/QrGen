import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Pricing from './Components/Pricing'
import Contact from './Components/contact'
import About from './Components/About'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
