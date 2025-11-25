import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Matches = ({ user }) => {
  const navigate = useNavigate()
  const [matches, setMatches] = React.useState([])
  const [searchResult, setSearchResult] = React.useState(null)
  const [criteria, setCriteria] = React.useState(
    '"gender": "female", \n"first_name": "Jane", \n"country": "USA", \n"in_game_name": "PixelDreamer"'
  )
  const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
  const [theme, setTheme] = useState(user?.theme || 'latte');


  React.useEffect(() => {
    const fetchMatches = async () => {
      const token = localStorage.getItem('token')
      if (!token) return

      const response = await fetch(
        'https://charmed-backend.onrender.com/users/my_matches',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const data = await response.json()
      if (response.ok) {
        console.log('Matches fetched:', data)
        setMatches(data)
      }
    }

    fetchMatches()
  }, [user])


  const handleSearch = async () => {
    console.log('Searching with criteria:', criteria)

    const token = localStorage.getItem('token')
    const location = { latitude: user.latitude, longitude: user.longitude }
    if (!token) return

    console.log(
      JSON.stringify({
        criteria: JSON.parse(`{${criteria}}`),
        location: location
      })
    )

    const response = await fetch(
      'https://charmed-backend.onrender.com/users/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          criteria: JSON.parse(`{${criteria}}`),
          location: location
        })
      }
    )

    const data = await response.json()
    if (response.ok) {
      console.log('Search results:', data)
      setSearchResult(data)
    }
  }


  const handleViewProfile = (matchId) => {
    navigate(`/profile/${matchId}`)
  }


  const handleAddMatch = async (matchId) => {
    const token = localStorage.getItem('token')
    if (!token) return

    const response = await fetch(
      `https://charmed-backend.onrender.com/users/add_match/${matchId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (response.ok) {
      const data = await response.json()
      console.log('Match added:', data)
      setMatches((prevMatches) => [...prevMatches, data])
      window.location.reload()
    }
  }


  const handleRemoveMatch = async (matchId) => {
    const token = localStorage.getItem('token')
    if (!token) return

    const response = await fetch(
      `https://charmed-backend.onrender.com/users/remove_match/${matchId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (response.ok) {
      const data = await response.json()
      console.log('Match removed:', data)
      setMatches((prevMatches) =>
        prevMatches.filter((match) => match.id !== matchId)
      )
    }
  }

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

      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Search</h1>
                <p className="text-center">
                  <span className="color-text">Sort:</span> by location
                </p>

                <div className="mb-2">
                  <textarea
                    className="form-control"
                    id="criteria"
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                    placeholder="no search criteria"
                    required
                  />
                  <label className="form-label">
                    Search Criteria - Keep Formatting!
                  </label>
                </div>

                <button className="btn" onClick={() => handleSearch()}>
                  Search
                </button>

                <div className="text-center">
                  {searchResult && (
                    <>
                      {searchResult.map((match) => (
                        <div key={match.id}>
                          <div className="match-details">
                            <div>
                              <span className="color-text">Name:</span>{' '}
                              {match.first_name} {match.last_name}
                            </div>
                            <div>
                              <span className="color-text">Riot ID:</span>{' '}
                              {match.in_game_name} #{match.tagline}
                            </div>
                            <div>
                              <span className="color-text">Location:</span>{' '}
                              {match.city}, {match.state}, {match.country}
                            </div>
                            <button
                              className="btn btn-sm mt-2"
                              onClick={() => handleViewProfile(match.id)}
                            >
                              View Profile
                            </button>
                            <button
                              className="btn btn-sm mt-2"
                              onClick={() => handleAddMatch(match.id)}
                            >
                              Add Match
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Matches</h1>
                <div className="text-center">
                  {matches.length > 0 ? (
                    <>
                      {matches.map((match) => (
                        <div key={match.id}>
                          <div className="match-details">
                            <div>
                              <span className="color-text">Name:</span>{' '}
                              {match.first_name} {match.last_name}
                            </div>
                            <div>
                              <span className="color-text">Riot ID:</span>{' '}
                              {match.in_game_name} #{match.tagline}
                            </div>
                            <button
                              className="btn btn-sm mt-2"
                              onClick={() => handleViewProfile(match.id)}
                            >
                              View Profile
                            </button>
                            <button
                              className="btn btn-sm mt-2"
                              onClick={() => handleRemoveMatch(match.id)}
                            >
                              Remove Match
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div>No matches found.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Matches