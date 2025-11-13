import React from 'react'

const Admin = ({ user }) => {
  return (
        <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">
            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Admin Panel</h1>
              <p className="text-center">Manage users and settings from this panel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin