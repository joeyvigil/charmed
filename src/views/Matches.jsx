import React from 'react'
import { useNavigate } from 'react-router-dom';

const Matches = ({ user }) => {
  const navigate = useNavigate();
  const [matches, setMatches] = React.useState([]);
  const [searchResult, setSearchResult] = React.useState(null);
  const [criteria, setCriteria] = React.useState("\"gender\": \"female\", \n\"first_name\": \"Jane\", \n\"country\": \"USA\"");


  React.useEffect(() => {
    // Fetch matches for the user
    const fetchMatches = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`https://charmed-backend.onrender.com/users/my_matches`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const data = await response.json();
          if (response.ok) {
            console.log('Matches fetched:', data);
            setMatches(data);
          }
    };

    fetchMatches();
  }, [user]);


  const handleSearch = async () => {
    console.log('Searching with criteria:', criteria);
    
    const token = localStorage.getItem('token');
    const location = {latitude: user.latitude, longitude: user.longitude};
    if (!token) return;
    console.log(JSON.stringify({
        criteria: JSON.parse(`{${criteria}}`),
        location: location
      }))

    const response = await fetch(`https://charmed-backend.onrender.com/users/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        criteria: JSON.parse(`{${criteria}}`),
        location: location
      })
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Search results:', data);
      setSearchResult(data);
    }
  };

  
  const handleViewProfile = (matchId) => {
    navigate(`/profile/${matchId}`);
  }


  const handleAddMatch = async (matchId) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await fetch(`https://charmed-backend.onrender.com/users/add_match/${matchId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Match added:', data);
      // Optionally update state or UI to reflect the new match
      setMatches((prevMatches) => [...prevMatches, data]);
      window.location.reload();
    }
  };

  const handleRemoveMatch = async (matchId) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await fetch(`https://charmed-backend.onrender.com/users/remove_match/${matchId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Match removed:', data);
      // Optionally update state or UI to reflect the removed match
      setMatches((prevMatches) => prevMatches.filter((match) => match.id !== matchId));
    }
  };

  return (
        <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">

            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Search</h1>
              <p className="text-center"><span className="color-text">Sort:</span> by location</p>

              
              {/* criteria 1 */}
              <div className="mb-2">
                      <textarea
                        className="form-control"
                        id="criteria"
                        value={criteria}
                        onChange={(e) => setCriteria(e.target.value)}
                        placeholder="no search criteria"
                        required
                      />
                  <label className="form-label">Search Criteria - Keep Formatting!</label>
              </div>

              <button className='btn' onClick={() => handleSearch()}>Search</button>
             

              
                {searchResult && (
                  <>
                    {searchResult.map((match) => (
                      <div key={match.id}>
                        <div className="match-details">
                          <div><span className="color-text">Name:</span> {match.first_name} {match.last_name}</div>
                          <div><span className="color-text">Riot ID:</span> {match.in_game_name} #{match.tagline}</div>
                          <div><span className="color-text">Location:</span> {match.country}, {match.state}, {match.city}</div>
                          <button className="btn btn-sm mt-2" onClick={() => handleViewProfile(match.id)}>View Profile</button>
                          <button className="btn btn-sm mt-2" onClick={() => handleAddMatch(match.id)}>Add Match</button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              

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
                          <div><span className="color-text">Name:</span> {match.first_name} {match.last_name}</div>
                          <div><span className="color-text">Riot ID:</span> {match.in_game_name} #{match.tagline}</div>
                          <button className="btn btn-sm mt-2" onClick={() => handleViewProfile(match.id)}>View Profile</button>
                          <button className="btn btn-sm mt-2" onClick={() => handleRemoveMatch(match.id)}>Remove Match</button>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    No matches found.
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Matches