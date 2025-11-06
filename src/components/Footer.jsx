import React from 'react'

const Footer = () => {
  return (
    <div className="myfooter">
    <div className="container"
      style={{ paddingTop: '50px', borderTop: '1px solid var(--Peach)' }}>
      <footer className="row mb-3">
        
        <div className="col mb-3">
          <a
            href="/#/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            aria-label="Bootstrap"
          >
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="vite.svg"></use>
            </svg>      
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="react.svg"></use>
            </svg>
            <img src="charm.png" style={{ width: '40px', height: '40px' }} className="bi me-2" alt="" />
            
          </a>
          <p>charmed © 2025</p>
        </div>

        

        <div className="col mb-3">
          <h5>Primary</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/#/" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/profile" className="nav-link p-0 text-body-secondary">
                Profile
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/matches" className="nav-link p-0 text-body-secondary">
                Matches
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/messages" className="nav-link p-0 text-body-secondary">
                Messages
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Secondary</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/#/admin" className="nav-link p-0 text-body-secondary">
                Admin Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/login" className="nav-link p-0 text-body-secondary">
                Login
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/register" className="nav-link p-0 text-body-secondary">
                Register
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#/update" className="nav-link p-0 text-body-secondary">
                Update
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Social Media</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="https://x.com/SettlersotCosmo" className="nav-link p-0 text-body-secondary">
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.instagram.com/squeakinc.games/" className="nav-link p-0 text-body-secondary">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://github.com/joeyvigil" className="nav-link p-0 text-body-secondary">
                Github
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.linkedin.com/in/joeyvigil/" className="nav-link p-0 text-body-secondary">
                LinkedIn
              </a>
            </li>
            
          </ul>
        </div>

      </footer>
    </div>
    </div>
  )
}

export default Footer