import React from 'react'

const Matches = ({ user }) => {
  const [matches, setMatches] = React.useState([]);

  React.useEffect(() => {
    // Fetch matches for the user
    const fetchMatches = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`https://charmed-backend.onrender.com/users/matches`, {
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

  return (
        <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">

            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Search</h1>
              <p className="text-center">Find your perfect match!</p>
              <form className="search-form">
                <input type="text" placeholder="Search for a match..." />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Matches</h1>
              <p className="text-center">
                {matches.length > 0 ? (
                  <ul>
                    {matches.map((match) => (
                      <li key={match.id}>{match.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No matches found.</p>
                )}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Matches