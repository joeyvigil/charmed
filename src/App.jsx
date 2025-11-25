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
import ProfileID from './views/ProfileID.jsx'

import './App.css'


function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(user?.theme || 'latte');
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

  //apply theme
  useEffect(() => {
    console.log('Applying theme:', theme);
    if (theme === 'latte') {
      document.documentElement.style.setProperty('--Rosewater', '#dc8a78');
      document.documentElement.style.setProperty('--Flamingo', '#dd7878');
      document.documentElement.style.setProperty('--Pink', '#ea76cb');
      document.documentElement.style.setProperty('--Mauve', '#8839ef');
      document.documentElement.style.setProperty('--Maroon', '#e64553');
      document.documentElement.style.setProperty('--Peach', '#fe640b');
      document.documentElement.style.setProperty('--Yellow', '#df8e1d');
      document.documentElement.style.setProperty('--Green', '#40a02b');
      document.documentElement.style.setProperty('--Teal', '#179299');
      document.documentElement.style.setProperty('--Sapphire', '#209fb5');
      document.documentElement.style.setProperty('--Lavender', '#7287fd');

    } else if (theme === 'dracula') {

      //randomize these colors
      document.documentElement.style.setProperty('--Rosewater', '#50fa7b');
      document.documentElement.style.setProperty('--Flamingo', '#8be9fd');
      document.documentElement.style.setProperty('--Pink', '#ff5555');
      document.documentElement.style.setProperty('--Mauve', '#bd93f9');
      document.documentElement.style.setProperty('--Maroon', '#bd93f9');
      document.documentElement.style.setProperty('--Peach', '#8be9fd');
      document.documentElement.style.setProperty('--Yellow', '#ff5555');
      document.documentElement.style.setProperty('--Green', '#ff79c6');
      document.documentElement.style.setProperty('--Teal', '#ffb86c');
      document.documentElement.style.setProperty('--Sapphire', '#f1fa8c');
      document.documentElement.style.setProperty('--Lavender', '#ff79c6');
      

    } else if (theme === 'atom') {
      document.documentElement.style.setProperty('--Rosewater', 'hsl(355, 65%, 65%)');
      document.documentElement.style.setProperty('--Flamingo', 'hsl(  5, 48%, 51%)');
      document.documentElement.style.setProperty('--Pink', 'hsl(355, 65%, 65%)');
      document.documentElement.style.setProperty('--Mauve', 'hsl(286, 60%, 67%)');
      document.documentElement.style.setProperty('--Maroon', 'hsl(  5, 48%, 51%)');
      document.documentElement.style.setProperty('--Peach', 'hsl( 29, 54%, 61%)');
      document.documentElement.style.setProperty('--Yellow', 'hsl( 39, 67%, 69%)');
      document.documentElement.style.setProperty('--Green', 'hsl( 95, 38%, 62%)');
      document.documentElement.style.setProperty('--Teal', 'hsl(187, 47%, 55%)');
      document.documentElement.style.setProperty('--Sapphire', 'hsl(187, 47%, 55%)');
      document.documentElement.style.setProperty('--Lavender', 'hsl(207, 82%, 66%)');

    }
    else if (theme === 'gruvbox') {
      document.documentElement.style.setProperty('--Rosewater', '#fb4934');
      document.documentElement.style.setProperty('--Flamingo', '#9d0006');
      document.documentElement.style.setProperty('--Pink', '#8f3f71');
      document.documentElement.style.setProperty('--Mauve', '#458588');
      document.documentElement.style.setProperty('--Maroon', '#cc241d');
      document.documentElement.style.setProperty('--Peach', '#d65d0e');
      document.documentElement.style.setProperty('--Yellow', '#d79921');
      document.documentElement.style.setProperty('--Green', '#98971a');
      document.documentElement.style.setProperty('--Teal', '#689d6a');
      document.documentElement.style.setProperty('--Sapphire', '#b16286');
      document.documentElement.style.setProperty('--Lavender', '#b8bb26');

    }

  }, [navigate]);


  return (
    
    <>
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/admin/" element={<Admin user={user} />} />
        <Route path="/messages" element={<Messages user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/matches" element={<Matches user={user} />} />
        <Route path="*" element={<NotFound user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/settings" element={<Settings user={user} />} />
        <Route path="/update" element={<Update user={user} />} />
        <Route path='/profile/:id' element={<ProfileID />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
