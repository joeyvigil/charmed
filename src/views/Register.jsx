import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [birthdate, setBirthdate] = React.useState("");


  const formSubmit = async (e) => {
      e.preventDefault();
      console.log('form: ', email, password);
      console.log(e);
      return
  };

  return (
    <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
    <div className="container container-height">
            <div className="small-container">
                <h1 className="text-center">Register</h1>
                <form onSubmit={formSubmit}>

                    {/* First Name input */}
                  <div className="mb-2">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="first" 
                      value={first}
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
                      value={last}
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
                  
                  {/* gender switch*/}
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
                      <span>{gender === "male" ? "male" : "female"}</span>
                    </label>
                  </div>
                    <label className="form-label">Gender</label>
                  </div>

                  {/* Birthdate input */}
                  <div className="mb-4">
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
                  <button type="submit" className="btn btn-primary btn-block ">
                      Submit
                  </button>

                </form>
            </div>
        </div>
        </div>
  )
}

export default Register