import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Messages = ({ user }) => {
  const navigate = useNavigate();

  const [selectedMatch, setSelectedMatch] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [messages, setMessages] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
  const [sendText, setSendText] = React.useState("");
  const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
  const [theme, setTheme] = useState(user?.theme || 'latte');

  React.useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(
        `https://charmed-backend.onrender.com/users/messages/${selectedMatch.id}/page/${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessages(data.reverse());
      }
    };

    if (selectedMatch) {
      fetchMessages();
    }
  }, [selectedMatch, page]);

  React.useEffect(() => {
    const fetchMatches = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(
        'https://charmed-backend.onrender.com/users/my_matches',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log('Matches fetched:', data);
        setMatches(data);
      }
    };

    fetchMatches();
  }, []);

  const handleViewProfile = (matchId) => {
    navigate(`/profile/${matchId}`);
  };

  const handleSendMessage = async () => {
    const token = localStorage.getItem('token');
    if (!token || !selectedMatch) return;

    const response = await fetch(
      'https://charmed-backend.onrender.com/messages',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          content: sendText,
          sender_id: user.id,
          receiver_id: selectedMatch.id
        })
      }
    );

    if (response.ok) {
      setSendText("");
      setPage(1);

      const fetchMessages = async () => {
        const response = await fetch(
          `https://charmed-backend.onrender.com/users/messages/${selectedMatch.id}/page/1`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();
        if (response.ok) {
          setMessages(data.reverse());
        }
      };

      fetchMessages();
    }
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
    // reload video element to reflect changes
    const videoElement = document.getElementById('myVideo2');
    videoElement.load();

    }, [navigate, theme, background]);

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
                              onClick={() => setSelectedMatch(match)}
                            >
                              Chat
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="mt-2 text-center">No matches found.</div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Messages</h1>
                <p className="text-center">
                  selected match:{' '}
                  {selectedMatch
                    ? `${selectedMatch.first_name} ${selectedMatch.last_name}`
                    : 'None'}
                  , page number: {page}
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => setPage(page - 1)}
                  >
                    Previous Page
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => setPage(page + 1)}
                  >
                    Next Page
                  </button>
                </div>

                {messages.length > 0 ? (
                  <>
                    {messages.map((message) => (
                      <div key={message.id}>
                        <div className="match-details">
                          <div>
                            {message.sender_id === user.id ? (
                              <span className="color-you">{user.first_name}:</span>
                            ) : (
                              <span className="color-them">
                                {selectedMatch.first_name}:
                              </span>
                            )}{' '}
                            {message.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="mt-2 text-center">No messages found.</div>
                )}

                <div className="mb-2">
                  <textarea
                    className="form-control"
                    id="sendText"
                    value={sendText}
                    onChange={(e) => setSendText(e.target.value)}
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleSendMessage()}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;