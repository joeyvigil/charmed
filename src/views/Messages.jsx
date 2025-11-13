import React from 'react'

const Messages = ({ user }) => {
  const [selectedMatch, setSelectedMatch] = React.useState(null);
  const [page, setPage] = React.useState(1); // For pagination
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`https://charmed-backend.onrender.com/users/messages/${selectedMatch}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setMessages(data);
      }
    };

    if (selectedMatch) {
      fetchMessages();
    }
  }, [selectedMatch, page]);

  return (
        <div className='background' style={{backgroundImage: 'url("back1.webp")'}}>
        <div className="container ">
            <div className="row">

            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Matches</h1>
              <p className="text-center">Click on matches to view messages</p>
            </div>
          </div>

            <div className="col-12 col-md-6">
            <div className="flex-container">
              <h1 className="text-center">Messages</h1>
              <p className="text-center">selected match: {selectedMatch}, page number: {page}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Messages