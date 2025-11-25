import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = ({ user }) => {
  const navigate = useNavigate();
  const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
  const [theme, setTheme] = useState(user?.theme || 'latte');

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

    } else if (theme === 'gruvbox') {
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
    // reload video element to reflect changes
    const videoElement = document.getElementById('myVideo2');
    videoElement.load();

    }, [navigate, theme, background]);


  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={background} type="video/mp4" />
      </video>

      <div className="background">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Admin Panel</h1>
                <p className="text-center">
                  Manage users and settings from this panel.
                </p>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;