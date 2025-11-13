import React from 'react'

const Messages = ({ user }) => {
  return (
        <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">
            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Messages</h1>
              <p className="text-center">View and manage your messages from this panel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages