import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <h1 className="text-center">Welcome</h1>
                <form onSubmit={formSubmit}>

                    {/* Email input */}
                    <div className="mb-2">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@email.com"
                            required
                        />
                        <label className="form-label">Email address</label>
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

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign in
                    </button>

                    {/* Register buttons */}
                    <div className="text-center">
                        <p>
                            Not a member? <a href="/#/register">Register</a>
                        </p>
                    </div>

                </form>
            </div>
        </div>
        </div>
  )
}

export default Login