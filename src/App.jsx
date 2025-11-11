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

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
    useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
    } else {
      // Fetch user data with the token
      const fetchUser = async () => {
        try {
          const response = await fetch('https://charmed-backend.onrender.com/users/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const data = await response.json();
          if (response.ok) {
            setUser(data);
          } else {
            console.error('Failed to fetch user data:', data);
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null);
        }
      };
      fetchUser();
    }
  }, [navigate]);
  

  return (
    
    <>
      <Navbar user={"Evelynn"} />

      {/* <div style={{"min-height": "91vh"}}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<Admin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App
