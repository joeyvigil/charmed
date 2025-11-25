import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProfileID = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [puuid, setPuuid] = useState('')
  const [summonerData, setSummonerData] = useState(null)
  const [background, setBackground] = useState('cat_rain.mp4');
  const [theme, setTheme] = useState('latte');
  
  // TODO: Move to environment variable
  const riotApiKey = 'RGAPI-60155725-1674-4669-adb6-d0b93aff6ab8'

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

    fetchRiotData()
  }, [user, riotApiKey])

  useEffect(() => {
    const fetchSummonerData = async () => {
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

    fetchSummonerData()
  }, [puuid, riotApiKey])

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(`https://charmed-backend.onrender.com/users/${id}`)
      const data = await response.json()
      if (response.ok) {
        setUser(data)
        setBackground(data.video || 'cat_rain.mp4');
        setTheme(data.theme || 'latte');
        const videoElement = document.getElementById('myVideo2');
        videoElement.load();
      }
    }

    fetchProfileData()
  }, [id])

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
                        alt="Summoner Icon"
                        className="mb-4"
                      />
                    </>
                  ) : (
                    <h5 className="mb-4 text-center">
                      {user.in_game_name} #{user.tagline} <span className="quote-text">not found</span>
                    </h5>
                  )}
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

export default ProfileID