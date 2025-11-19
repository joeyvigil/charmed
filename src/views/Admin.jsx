import React, { useState } from 'react';

const Admin = ({ user }) => {
  const [background, setBackground] = useState('house.mp4');
  const [theme, setTheme] = useState('latte');


  const handleSubmit = () => {
    console.log('Applying settings:', background, theme);

    // Apply background change
    const videoElement = document.getElementById('myVideo2');
    videoElement.src = background;
    videoElement.play();

    // Apply theme change
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
  };

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src='akira.mp4' type="video/mp4" />
      </video>

      <div className="background">
        {/* <div className='background' style={{backgroundImage: 'url("back1.webp")'}}> */}
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Admin Panel</h1>
                <p className="text-center">
                  Manage users and settings from this panel.
                </p>

                
                  <div className="mb-3">
                    <label htmlFor="backgroundSelect" className="form-label">
                      Select Background
                    </label>
                    <select 
                      id="backgroundSelect" 
                      className="form-select"
                      onChange={() => setBackground(document.getElementById('backgroundSelect').value)}
                      value={background}
                    >
                      <option value="cat_rain.mp4">cat_rain</option>
                      <option value="akira.mp4">akira</option>
                      <option value="balcony.mp4">balcony</option>
                      <option value="house.mp4">house</option>
                      <option value="neon.mp4">neon</option>
                      <option value="rakan.mp4">rakan</option>
                    </select>

                    <label className="text-center">Select theme</label>
                    <select 
                      name="theme" 
                      id="themeSelect" 
                      className="form-select"
                      onChange={() => setTheme(document.getElementById('themeSelect').value)}
                      value={theme}
                    >
                      <option value="latte">Latte</option>
                      <option value="dracula">Dracula</option>
                      <option value="atom">Atom</option>
                      <option value="gruvbox">Gruvbox</option>
                    </select>


                    <div className="text-center" onClick={() => handleSubmit()}>
                      <button type="button" className="btn btn-primary">
                        Apply Background + Theme
                      </button>
                    </div>
                    
                  </div>
                

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;