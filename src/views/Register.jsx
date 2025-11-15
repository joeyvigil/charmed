import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [birthdate, setBirthdate] = useState("");
  const [statusText, setStatusText] = useState("");

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

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src="cat_rain.mp4" type="video/mp4" />
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