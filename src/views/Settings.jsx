import React from 'react'

const Settings = ({ user }) => {
    const [background, setBackground] = useState(user?.video || 'cat_rain.mp4');

  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src={background} type="video/mp4" />
      </video>

      <div className='background'>

      </div>
    </>
  )
}

export default Settings