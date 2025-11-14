import React from 'react'

const NotFound = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo2">
        <source src="cat_rain.mp4" type="video/mp4" />
      </video>

      <div className='background'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">404 - Not Found</h1>
                <p className="text-center">Sorry, the page you are looking for does not exist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound