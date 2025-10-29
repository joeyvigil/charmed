import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  const navigate = useNavigate();
  

  return (
    
    <>
      <Navbar user={"Amy"} />

      <div>
        <img src="Ahri_Charm.png" alt="" />
      </div>
      <h1>Charmed.lol</h1>
      <button className='btn btn-primary me-2' onClick={() => navigate('/')}>Home</button>
      <button className='btn btn-secondary me-2' onClick={() => navigate('/login')}>Login</button>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
