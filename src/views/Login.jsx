import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( {user}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusText, setStatusText] = useState('');
    const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
    const [theme, setTheme] = useState(user?.theme || 'latte');

    const formSubmit = async (e) => {
        setStatusText('Starting up Render Backend... (This may take a moment)...');
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        e.preventDefault();
        console.clear();
        console.log('form: ', email, password);
        console.log(e);
        const login = async () => {

            const response = await fetch('https://charmed-backend.onrender.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                data.token && localStorage.setItem('token', data.token);
                console.log('Token stored in localStorage', data.token);
                submitBtn.disabled = false;
                setStatusText('');
                navigate('/profile');
            } else {
                setStatusText('Login failed. Please check your credentials and try again.');
                console.error('Login failed:', data);
                submitBtn.disabled = false;
            }
        };
        login();
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

    }, []);

    

  return (
    <>
    <video autoPlay muted loop id="myVideo2">
      <source src={background} type="video/mp4" />
    </video>

    <div className='background'>
        <div className="container ">
            <div className="row">
            <div className="col-12 col-md-6">
            <div className="small-container">
                <h1 className="text-center">Login</h1>
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
                    <button type="submit" className="btn btn-primary btn-block mb-4" id='submitBtn'>
                        Sign in
                    </button>

                    <div><h5 style={{ color: "var(--Peach)" }}>{statusText}</h5></div>

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
        </div>
    </div>
    </>
  )
}

export default Login