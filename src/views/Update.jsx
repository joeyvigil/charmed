import React from 'react'
import { useNavigate } from 'react-router-dom';


const Update = ({ user }) => {
  const navigate = useNavigate();

  const [first_name, setFirst] = React.useState(user.first_name || "");
  const [last_name, setLast] = React.useState(user.last_name || "");
  const [email, setEmail] = React.useState(user.email || "");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [birthdate, setBirthdate] = React.useState(user.birthdate || "");
  const [bio, setBio] = React.useState(user.bio || "");
  const [city, setCity] = React.useState(user.city || "");
  const [state, setState] = React.useState(user.state || "");
  const [country, setCountry] = React.useState(user.country || "");
  const [in_game_name, setInGameName] = React.useState(user.in_game_name || "");
  const [tagline, setTagline] = React.useState(user.tagline || "");
  const formSubmit = async (e) => {
        e.preventDefault();
        console.clear();
        console.log('form: ', email, password);
        console.log(e);
  }



  return (
    <div className='background' style={{backgroundImage: 'url("back1.webp")'}}> 
        <div className="container container-height">
          <div className="row">

            <div className="col-12 col-md-6">
              <div className="flex-container">

                <h1 className="text-center">Register</h1>
                <form onSubmit={formSubmit}>

                    {/* First Name input */}
                  <div className="mb-2">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="first" 
                      value={first_name}
                      onChange={(e) => setFirst(e.target.value)}
                      placeholder='John' 
                      required 
                    />
                    <label className="form-label">First Name</label>
                  </div>
                  </form>

              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="flex-container">
                <h1 className="text-center">Update Profile</h1>
              
              </div>
            </div>

          </div>
        </div>

    </div>


    

  )
}

export default Update