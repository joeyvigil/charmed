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
      document.documentElement.style.setProperty('--Base0', '#4c4f69');
      document.documentElement.style.setProperty('--Base1', '#5c5f77');
      document.documentElement.style.setProperty('--Base2', '#6c6f85');
      document.documentElement.style.setProperty('--Base3', '#8c8fa1');
      document.documentElement.style.setProperty('--Base4', '#acb0be');
      document.documentElement.style.setProperty('--Base5', '#bcc0cc');
      document.documentElement.style.setProperty('--Base6', '#eff1f5');
      document.documentElement.style.setProperty('--base7', '#dce0e8');

    } else if (theme === 'frappe') {
      document.documentElement.style.setProperty('--Rosewater', '#f2d5cf');
      document.documentElement.style.setProperty('--Flamingo', '#eebebe');
      document.documentElement.style.setProperty('--Pink', '#f4b8e4');
      document.documentElement.style.setProperty('--Mauve', '#ca9ee6');
      document.documentElement.style.setProperty('--Maroon', '#ea999c');
      document.documentElement.style.setProperty('--Peach', '#ef9f76');
      document.documentElement.style.setProperty('--Yellow', '#e5c890');
      document.documentElement.style.setProperty('--Green', '#a6d189');
      document.documentElement.style.setProperty('--Teal', '#81c8be');
      document.documentElement.style.setProperty('--Sapphire', '#85c1dc');
      document.documentElement.style.setProperty('--Lavender', '#babbf1');
      document.documentElement.style.setProperty('--Base0', '#c6d0f5'); 
      document.documentElement.style.setProperty('--Base1', '#b5bfe2'); 
      document.documentElement.style.setProperty('--Base2', '#a5adce'); 
      document.documentElement.style.setProperty('--Base3', '#838ba7'); 
      document.documentElement.style.setProperty('--Base4', '#626880'); 
      document.documentElement.style.setProperty('--Base5', '#51576d'); 
      document.documentElement.style.setProperty('--Base6', '#303446'); 
      document.documentElement.style.setProperty('--base7', '#232634'); 

    } else if (theme === 'macchiato') {
      document.documentElement.style.setProperty('--Rosewater', '#f4dbd6');
      document.documentElement.style.setProperty('--Flamingo', '#f0c6c6');
      document.documentElement.style.setProperty('--Pink', '#f5bde6');
      document.documentElement.style.setProperty('--Mauve', '#c6a0f6');
      document.documentElement.style.setProperty('--Maroon', '#ee99a0');
      document.documentElement.style.setProperty('--Peach', '#f5a97f');
      document.documentElement.style.setProperty('--Yellow', '#eed49f');
      document.documentElement.style.setProperty('--Green', '#a6da95');
      document.documentElement.style.setProperty('--Teal', '#8bd5ca');
      document.documentElement.style.setProperty('--Sapphire', '#7dc4e4');
      document.documentElement.style.setProperty('--Lavender', '#b7bdf8');
      document.documentElement.style.setProperty('--Base0', '#cad3f5'); 
      document.documentElement.style.setProperty('--Base1', '#b8c0e0'); 
      document.documentElement.style.setProperty('--Base2', '#a5adcb'); 
      document.documentElement.style.setProperty('--Base3', '#8087a2'); 
      document.documentElement.style.setProperty('--Base4', '#5b6078'); 
      document.documentElement.style.setProperty('--Base5', '#494d64'); 
      document.documentElement.style.setProperty('--Base6', '#24273a'); 
      document.documentElement.style.setProperty('--base7', '#181926'); 

    }
    else if (theme === 'mocha') {
      document.documentElement.style.setProperty('--Rosewater', '#f5e0dc');
      document.documentElement.style.setProperty('--Flamingo', '#f2cdcd');
      document.documentElement.style.setProperty('--Pink', '#f5c2e7');
      document.documentElement.style.setProperty('--Mauve', '#cba6f7');
      document.documentElement.style.setProperty('--Maroon', '#eba0ac');
      document.documentElement.style.setProperty('--Peach', '#fab387');
      document.documentElement.style.setProperty('--Yellow', '#f9e2af');
      document.documentElement.style.setProperty('--Green', '#a6e3a1');
      document.documentElement.style.setProperty('--Teal', '#94e2d5');
      document.documentElement.style.setProperty('--Sapphire', '#74c7ec');
      document.documentElement.style.setProperty('--Lavender', '#b4befe');
      document.documentElement.style.setProperty('--Base0', '#cdd6f4'); 
      document.documentElement.style.setProperty('--Base1', '#bac2de'); 
      document.documentElement.style.setProperty('--Base2', '#a6adc8'); 
      document.documentElement.style.setProperty('--Base3', '#7f849c'); 
      document.documentElement.style.setProperty('--Base4', '#585b70'); 
      document.documentElement.style.setProperty('--Base5', '#45475a'); 
      document.documentElement.style.setProperty('--Base6', '#1e1e2e'); 
      document.documentElement.style.setProperty('--base7', '#11111b');
    }
  };

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={background} type="video/mp4" />
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
                    </select>

                    <label className="text-center">Dropdown menu to select Catppuccin theme.</label>
                    <select 
                      name="theme" 
                      id="themeSelect" 
                      className="form-select"
                      onChange={() => setTheme(document.getElementById('themeSelect').value)}
                      value={theme}
                    >
                      <option value="latte">Latte</option>
                      <option value="frappe">Frappe</option>
                      <option value="macchiato">Macchiato</option>
                      <option value="mocha">Mocha</option>
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