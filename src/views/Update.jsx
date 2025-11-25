import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = ({ user }) => {
  const navigate = useNavigate();

  const [first_name, setFirst] = React.useState("");
  const [last_name, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [birthdate, setBirthdate] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [in_game_name, setInGameName] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [latitude, setLatitude] = React.useState("999.9999");
  const [longitude, setLongitude] = React.useState("999.9999");
  const [theme, setTheme] = React.useState(user?.theme || 'latte');
  const [video, setVideo] = React.useState(user?.video || 'cat_rain.mp4');

  React.useEffect(() => {
    if (user) {
      setFirst(user.first_name || "");
      setLast(user.last_name || "");
      setEmail(user.email || "");
      setGender(user.gender || "male");
      setBirthdate(user.birthdate || "");
      setBio(user.bio || "");
      setCity(user.city || "");
      setState(user.state || "");
      setCountry(user.country || "");
      setInGameName(user.in_game_name || "");
      setTagline(user.tagline || "");
      setLatitude(user.latitude || "999.9999");
      setLongitude(user.longitude || "999.9999");
      setTheme(user.theme || "latte");
      setVideo(user.video || "cat_rain.mp4");
    }
  }, [user]);

  const handleSave = (e) => {
    console.clear();
    console.log(
      'form:',
      first_name,
      last_name,
      email,
      password,
      repeatPassword,
      gender,
      birthdate,
      bio,
      city,
      state,
      country,
      in_game_name,
      tagline,
      latitude,
      longitude
    );

    const updateProfile = async () => {
      if (password !== repeatPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      const response = await fetch('https://charmed-backend.onrender.com/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          gender,
          birthdate,
          bio,
          city,
          state,
          country,
          in_game_name,
          tagline,
          latitude,
          longitude,
          theme,
          video,
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Profile updated successfully:', data);
        alert("Profile updated successfully!");

      } else {
        console.error('Error updating profile:', response.statusText);
        console.log(response);
      }
    };

    updateProfile();
  };

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

    }, [theme, video]);

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={video} type="video/mp4" />
      </video>

      <div className="background">
        <div className="container">
          <div className="row">
            {user ? (
              <>
                <div className="col-12 col-lg-4">
                  <div className="flex-container">
                    <h1 className="text-center">Update Profile</h1>

                    {/* First Name input */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="first"
                        value={first_name}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder="John"
                        required
                      />
                      <label className="form-label">First Name</label>
                    </div>

                    {/* Last Name input */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="last"
                        value={last_name}
                        onChange={(e) => setLast(e.target.value)}
                        placeholder="Doe"
                        required
                      />
                      <label className="form-label">Last Name</label>
                    </div>

                    {/* Password input */}
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password123"
                        required
                      />
                      <label className="form-label">Password</label>
                    </div>

                    {/* Repeat Password input */}
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="password123"
                        required
                      />
                      <label className="form-label">Repeat Password</label>
                    </div>

                    {/* Gender switch */}
                    <div className="mb-2">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="genderSwitch"
                          checked={gender === "male"}
                          onChange={() => setGender(gender === "male" ? "female" : "male")}
                        />
                        <label className="form-check-label" htmlFor="genderSwitch">
                          {gender}
                        </label>
                      </div>
                      <label className="form-label">Gender</label>
                    </div>

                    {/* Birthdate input */}
                    <div className="mb-2">
                      <input
                        type="date"
                        className="form-control"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        required
                      />
                      <label className="form-label">Birthdate</label>
                    </div>

                    {/* Country */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="USA"
                        required
                      />
                      <label className="form-label">Country</label>
                    </div>

                    {/* State */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="California"
                        required
                      />
                      <label className="form-label">State</label>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="flex-container">
                    <h1 className="text-center">Update Profile</h1>

                    {/* City */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Los Angeles"
                        required
                      />
                      <label className="form-label">City</label>
                    </div>

                    {/* In-game name */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="inGameName"
                        value={in_game_name}
                        onChange={(e) => setInGameName(e.target.value)}
                        placeholder="Phreak"
                        required
                      />
                      <label className="form-label">In-Game Name</label>
                    </div>

                    {/* Tagline */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        placeholder="NA1"
                        required
                      />
                      <label className="form-label">Tagline #</label>
                    </div>

                    {/* Latitude and longitude */}
                    <div className="mb-2 d-flex justify-content-between">
                      <label className="form-label">Latitude: {latitude}</label>
                      <label className="form-label">Longitude: {longitude}</label>
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((position) => {
                              setLatitude(position.coords.latitude);
                              setLongitude(position.coords.longitude);
                            });
                          }
                        }}
                      >
                        Get Current Location
                      </button>
                    </div>

                    {/* Bio */}
                    <div className="mb-2">
                      <textarea
                        className="form-control"
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="I like to do TONS of DAMAGE!"
                        required
                      />
                      <label className="form-label">Bio</label>
                    </div>

                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="flex-container">
                    <h1 className="text-center">Theme and Background</h1>
        
                        {/* video select */}
                      <div className='mb-2'>
                        <select 
                          id="videoSelect" 
                          className="form-select"
                          onChange={() => setVideo(document.getElementById('videoSelect').value)}
                          value={video}
                        >
                          <option value="cat_rain.mp4">cat_rain</option>
                          <option value="akira.mp4">akira</option>
                          <option value="balcony.mp4">balcony</option>
                          <option value="house.mp4">house</option>
                          <option value="neon.mp4">neon</option>
                          <option value="rakan.mp4">rakan</option>
                        </select>
                        <label className="form-label">Background</label>
                      </div>

                      {/* theme select */}
                      <div className='mb-2'>
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
                        <label className="form-label">Theme</label>
                      </div>

                      <div className='mb-2'>
                        <button onClick={() => handleSave()} className="btn">
                          Save Changes
                        </button>
                      </div>

                  </div>
                </div>

              </>
            ) : (
              <div className="col-12">
                <div className="flex-container">
                  <h2 className="text-center">
                    You must be logged in to update your profile.
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;