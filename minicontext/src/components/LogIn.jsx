import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } =useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username})
  }
  return (
    <div>
      <h2>Log In</h2>
      <input 
      value={username} onChange={(e) => setUsername(e.target.value)}
      type="text" placeholder='username'/>
      <input 
      value={password} onChange={(e) => setPassword(e.target.value)}
      type="text" placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn
