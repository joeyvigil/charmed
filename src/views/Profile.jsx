import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">
            <div className="col-12 col-md-6">
            <div className="flex-container">
          {user ? (
            <>
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
                <span className="color-text">In-Game Name:</span> {user.in_game_name} #{user.tagline}
              </div>
              <div className="mb-2">
                <span className="color-text">Bio:</span> {user.bio}
              </div>
              <div className="mb-2">
                <span className="color-text">Gender:</span> {user.gender}
              </div>

              <button className="btn" onClick={() => navigate('/update')}>
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <h2 className="text-center">You must be logged in to view your profile.</h2>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Profile