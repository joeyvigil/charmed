import React, { use } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({user}) => {
  const navigate = useNavigate();


  return (
    <header>
    <div className="mynavbar">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">

          <Link to={'/#/'} className="navbar-brand cursive-font">
            <img src="charm.png" alt="Logo" className="d-inline-block align-text-top image-glow" /> charmed .lol
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className='highlight cursive-font'>💞 Menu 💕</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav d-flex align-items-center ms-auto">
            {/* <div className="d-flex"> */}
              {user ? (
                <>
                  <li className="nav-item"><h4 className="me-4"> Hello <span className="highlight cursive-font">{user.first_name}</span></h4></li>

                  <li className="nav-item">
                    <a className="me-4" href="/#/profile">profile</a>
                  </li>

                  <li className="nav-item">
                    <a className="me-4" href="/#/matches">matches</a>
                  </li>

                  <li className="nav-item">
                    <a className="me-4" href="/#/messages">messages</a>
                  </li>

                  <li className="nav-item">
                    <button className="btn me-4" onClick={() => { localStorage.removeItem('token'); navigate('/#/')}} > Logout </button>
                  </li>
                  
                </>
              ) : (
                <>
                <button className="btn me-2" onClick={() => navigate('/login')}> 
                  Login
                </button>

                <span className='me-2'>/</span>

                <button className="btn me-2" onClick={() => navigate('/register')}> 
                  Register
                </button>

                </>

              )}
          
            </ul>
          </div>

        </div>
        </nav>
        

    </div>
    </header>

  )
}

export default Navbar