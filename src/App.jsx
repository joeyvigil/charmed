import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Admin from './views/Admin.jsx'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Matches from './views/Matches.jsx'
import Messages from './views/Messages.jsx'
import NotFound from './views/NotFound.jsx'
import Profile from './views/Profile.jsx'
import Register from './views/Register.jsx'
import Settings from './views/Settings.jsx'
import Update from './views/Update.jsx'

import './App.css'


function App() {
  const navigate = useNavigate();
  

  return (
    
    <>
      <Navbar user={"Evelyn"} />


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/update" element={<Update />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
