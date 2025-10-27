import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'

import './App.css'

function App() {
  const navigate = useNavigate();
  

  return (
    
    <>
      <div>
        <img src="Ahri_Charm.png" alt="" />
      </div>
      <h1>Charmed.lol</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/login')}>Login</button>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      
    </>
  )
}

export default App
