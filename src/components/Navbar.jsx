import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = ({user}) => {
  const navigate = useNavigate();

  return (
    <header>
    <div className="mynavbar">
        <div className="container-fluid ">
          <nav className="navbar navbar-expand-lg">

            <Link to={'/'} className="navbar-brand cursive-font">
              <img src="charm.png" alt="Logo" className="d-inline-block align-text-top image-glow" /> charmed .lol
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center ms-auto">
            {/* <div className="d-flex"> */}
              {user ? (
                <>
                  <li className="nav-item"><h4 className="me-4"> Hello <span className="highlight cursive-font">{user}</span></h4></li>

                  <li className="nav-item">
                    <a className="me-4" href="/profile">profile</a>
                  </li>

                  <li className="nav-item">
                    <a className="me-4" href="/matches">matches</a>
                  </li>

                  <li className="nav-item">
                    <a className="me-4" href="/messages">messages</a>
                  </li>

                  <li className="nav-item">
                    <a className="me-4" href="/settings">settings</a>
                  </li>

                  <li className="nav-item">
                    <button className="btn" onClick={() => { localStorage.removeItem('token'); navigate('/')}} > Logout </button>
                  </li>
                  
                  
                  
                  
                  
        
                  
                </>
              ) : (
                <button className="btn" onClick={() => navigate('/')}> Home </button>
              )}
          {/* </div> */}
            </ul>
          </div>

        </nav>
        </div>
    </div>
    </header>

  )
}

export default Navbar