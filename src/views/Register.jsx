import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ user }) => {
  const navigate = useNavigate();

  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [birthdate, setBirthdate] = useState("");
  const [statusText, setStatusText] = useState("");
  const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
  const [theme, setTheme] = useState(user?.theme || 'latte');

  const formSubmit = async (e) => {
    e.preventDefault();
    console.clear();
    console.log('form: ', email, password);
    console.log(e);
    setStatusText('Starting up Render Backend... (This may take a moment)...');
    
    if (password !== repeatPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;

    const register = async () => {
      const response = await fetch('https://charmed-backend.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bio: "",
          city: "",
          state: "",
          country: "",
          in_game_name: "",
          tagline: "",
          latitude: 0,
          longitude: 0,
          first_name,
          last_name,
          email,
          password,
          gender,
          birthdate
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        submitBtn.disabled = false;
        navigate('/login');
      } else {
        console.error('Registration failed:', data);
        alert('Registration failed. Please check your details and try again.');
        submitBtn.disabled = false;
      }
    };
    
    register();
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

    }, [navigate, theme, background]);

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={background} type="video/mp4" />
      </video>

      <div className='background'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="small-container">
                <h1 className="text-center">Register</h1>
                <form onSubmit={formSubmit}>
                  {/* First Name input */}
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      value={first_name}
                      onChange={(e) => setFirst(e.target.value)}
                      placeholder='John'
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
                      placeholder='Doe'
                      required
                    />
                    <label className="form-label">Last Name</label>
                  </div>

                  {/* Email input */}
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='name@email.com'
                      required
                    />
                    <label className="form-label">Email Address</label>
                  </div>

                  {/* Password input */}
                  <div className="mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='password123'
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
                      placeholder='password123'
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

                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary btn-block" id='submitBtn'>
                    Submit
                  </button>

                  <div className='mt-2'><h5 style={{ color: "var(--Peach)" }}>{statusText}</h5></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;