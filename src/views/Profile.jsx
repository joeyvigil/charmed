import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Profile = ({ user }) => {
  const navigate = useNavigate()
  // const riotApiKey = import.meta.env.VITE_RIOT_API_KEY
  // const riotApiKey = process.env.RIOT_API_KEY
  const riotApiKey= 'RGAPI-60155725-1674-4669-adb6-d0b93aff6ab8' //will to make secret later
  const [puuid, setPuuid] = useState('')  
  //MjBTR3noBm7sUlqtvI4o6ZV_QH1T4OmE4HmIoRIHUz3IG7ABLzVw9FuUJM1i7T7TV_bKU241xIKcSg
  const [summonerData, setSummonerData] = useState(null)

  useEffect(() => {
    // riot api to grab info with in_game_name and tagline
    const fetchRiotData = async () => {
      if (user) {
        try {
          const response = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${user.in_game_name}/${user.tagline}`, {
            headers: {
              'X-Riot-Token': riotApiKey
            }
          })
          const data = await response.json()
          console.log('Riot Data:')
          console.log(data)
          setPuuid(data.puuid)
          fetchSummonerData()
        } catch (error) {
          console.error('Error fetching Riot data:', error)
        }
      }
    }
    const fetchSummonerData = async () => {
      console.log('Current PUUID:', puuid)
      if (puuid) {
        console.log('Fetching Summoner data for PUUID:', puuid)
        try {
          const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`, {
            headers: {
              'X-Riot-Token': riotApiKey
            }
          })
          const data = await response.json()
          console.log('Summoner Data:')
          console.log(data)
          setSummonerData(data)
        } catch (error) {
          console.error('Error fetching Summoner data:', error)
        }
      }
    }

    fetchRiotData()
    // fetchSummonerData()
  }, [user, puuid])

  return (
    <div className='background' style={{ backgroundImage: 'url("back1.webp")' }}>
      <div className="container">
        <div className="row">

          {user ? (<>
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

                <div className='line mb-4'> </div>

                {summonerData ? (<>
                  <h3 className="text-center">
                    {user.in_game_name} <span className='quote-text'>#{user.tagline}</span>
                  </h3>

                <h5 className="mb-4 text-center">
                  <span className="color-text">Level:</span> {summonerData ? summonerData.summonerLevel : 'Loading...'}
                </h5>

                <img style={{ borderRadius: '50%', display: 'block', margin: '0 auto' }} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerData.profileIconId}.jpg`} alt=""  className='mb-4'/>
                </>
                ) : (
                  <h5 className="mb-4 text-center">
                    {user.in_game_name} #{user.tagline} <span className='quote-text'>not found</span>
                  </h5>
                )}


                <button className="btn" onClick={() => navigate('/update')}>
                  Edit Profile
                </button>

              </div>
            </div>

          </>  
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
  )
}

export default Profile
