import React from 'react'

const Settings = ({ user }) => {
    const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');
    
  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={background} type="video/mp4" />
      </video>

      <div className='background'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="small-container">
                <h1 className="text-center">Settings</h1>
                <p className="text-center">Manage your account settings from this panel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings