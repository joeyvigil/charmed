import React, { use } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({user}) => {
  const navigate = useNavigate();
 
  const quotes = [
    "A clever fox is never caught.",
    "You don't have to be afraid of me.",
    "I know this place... Some part of me remembers.",
    "I'm not alone anymore. I can trust in others, and in myself.",
    "I've fought alongside some of the best, you know. So... try to keep up.",
    "Whatever new experiences await me today, I'll meet them head-on.",
    "I've wasted an eternity standing still. It's time to move forward.",
    "Let's create new memories together.",
    "I lived—and live—an eternity.",
    "Every animal hungers for something.",
    "I carry the legacy of the Vesani.",
    "There's beauty in even the smallest moments.",
    "I'll have them chasing their tails!",
    "The world is mine to discover.",
    "I should've left home years ago.",
    "I hear the wind singing.",
    "Live with no regrets.",
    "As the seasons change, so do I.",
    "Remember this moment.",
    "I still remember his laugh...",
    "It took me too long to realize how beautiful life can be.",
    "Humans change over days. Nature, over centuries.",
    "I love myself for who I was, who I am, and who I hope to become.",
    "The Vesani left so much behind. I will find it all.",
    "I've met so many new people, every one of them unique.",
    "Hidden away for so long, it's nice to finally feel the sun.",
    "Though I've been around for a while, every day brings something new.",
    "No more holding back. I go after what I deserve.",
    "Never imagined this is the path my life would take.",
    "To stay strong, I hunt. But I'm no longer afraid of losing control.",
    "The friends I've made are very... strange... in a cute way.",
    "He truly loved me, saw me for all that I am. I'll never forget that.",
    "If I look back now, it's only to see how far I've come.",
    "Memories are no longer mine to steal. They're mine to make.",
    "There's beauty in even the most painful memories.",
    "This forest brings me back to my days as a kit, running with the ice foxes.",
    "I will always have regrets, but I won't keep running from them.",
    "I'll see everything this world has to offer.",
    "The air smells so much sweeter without the Black Mist.",
    "I won't lose myself to you!",
    "Don't bother running, I'm faster.",
    "I'll make your last moments matter.",
    "I'll show you what I'm made of!",
    "You're not afraid of me, are you?",
    "I'll give you the freedom you desire!",
    "I see all that you desire. Rawr!", 
    "Oh, you were trying to be funny? Cute.",
    "Quick as a fox!",
    "Come here often?",
    "I ♥ you!",
    "What's your wish?",
    "Come closer!",
    "Oh, don't go.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

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
                  <li className="nav-item"><h4 className="me-4"> <span className="highlight cursive-font">{randomQuote}</span></h4></li>
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