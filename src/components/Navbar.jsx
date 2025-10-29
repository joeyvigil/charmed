import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = ({user}) => {
  const navigate = useNavigate();

  return (
    <header>
    <div className="mynavbar">
        <div className="container-fluid">
          <nav className="navbar">

            <Link to={'/'} className="navbar-brand cursive-font">
              <img src="charm.png" alt="Logo" className="d-inline-block align-text-top image-glow" /> charmed .lol
            </Link>

            <div className="d-flex">
              {user ? (
                <>
                  <h4 className="me-4"> Hello <span className="highlight cursive-font">{user}</span></h4>
                  <a className="me-4" href="/profile">profile</a>
                  <a className="me-4" href="/update">update</a>
                  <a className="me-4" href="/matches">matches</a>
                  <a className="me-4" href="/messages">messages</a>
                  <a className="me-4" href="/settings">settings</a>
                  
                  <button className="btn" onClick={() => { localStorage.removeItem('token'); navigate('/')}} > Logout </button>
                </>
              ) : (
                <button className="btn" onClick={() => navigate('/')}> Home </button>
              )}
            </div>
          </nav>
        </div>
    </div>
    </header>

  )
}

export default Navbar