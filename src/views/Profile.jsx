import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate()
  const riotApiKey = 'RGAPI-60155725-1674-4669-adb6-d0b93aff6ab8' // will make secret later
  const [puuid, setPuuid] = useState('')
  const [summonerData, setSummonerData] = useState(null)
    const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
    const [theme, setTheme] = useState(user?.theme || 'latte');

  useEffect(() => {
    const fetchRiotData = async () => {
      if (!user) return

      try {
        const response = await fetch(
          `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${user.in_game_name}/${user.tagline}`,
          {
            headers: {
              'X-Riot-Token': riotApiKey
            }
          }
        )
        const data = await response.json()
        console.log('Riot Data:', data)
        setPuuid(data.puuid)
      } catch (error) {
        console.error('Error fetching Riot data:', error)
      }
    }

    const fetchSummonerData = async () => {
      console.log('Current PUUID:', puuid)
      if (!puuid) return

      console.log('Fetching Summoner data for PUUID:', puuid)
      try {
        const response = await fetch(
          `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
          {
            headers: {
              'X-Riot-Token': riotApiKey
            }
          }
        )
        const data = await response.json()
        console.log('Summoner Data:', data)
        setSummonerData(data)
      } catch (error) {
        console.error('Error fetching Summoner data:', error)
      }
    }

    fetchRiotData()
    fetchSummonerData()
  }, [user, puuid, riotApiKey])

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
            {user ? (
              <div className="col-12 col-md-6">
                <div className="flex-container">
                  <h1 className="text-center">
                    {user.first_name} {user.last_name}
                  </h1>
                  <div className="mb-2">
                    <span className="color-text">Email:</span> {user.email}
                  </div>
                  <div className="mb-2">
                    <span className="color-text">Location:</span> {user.city}, {user.state}, {user.country}
                  </div>
                  <div className="mb-2">
                    <span className="color-text">Birthdate:</span> {user.birthdate}
                  </div>
                  <div className="mb-2">
                    <span className="color-text">Bio:</span> {user.bio}
                  </div>
                  <div className="mb-2">
                    <span className="color-text">Gender:</span> {user.gender}
                  </div>
                  <div className="mb-4">
                    <span className="color-text">Profile URL:</span> charmed.lol/#/profile/{user.id}
                  </div>

                  <div className="line mb-4"></div>

                  {summonerData ? (
                    <>
                      <h3 className="text-center">
                        {user.in_game_name} <span className="quote-text">#{user.tagline}</span>
                      </h3>

                      <h5 className="mb-4 text-center">
                        <span className="color-text">Level:</span> {summonerData.summonerLevel}
                      </h5>

                      <img
                        style={{ borderRadius: '50%', display: 'block', margin: '0 auto' }}
                        src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerData.profileIconId}.jpg`}
                        alt=""
                        className="mb-4"
                      />
                    </>
                  ) : (
                    <h5 className="mb-4 text-center">
                      {user.in_game_name} #{user.tagline} <span className="quote-text">not found</span>
                    </h5>
                  )}

                  <button className="btn" onClick={() => navigate('/update')}>
                    Edit Profile
                  </button>
                </div>
              </div>
            ) : (
              <div className="col">
                <div className="flex-container">
                  <h2 className="text-center">
                    You must be logged in to view your profile.
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
