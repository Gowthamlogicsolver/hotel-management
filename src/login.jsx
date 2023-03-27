import './login.css';
import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, password });
      console.log(response.data);
      // show success message
    } catch (error) {
      console.error(error);
      // show error message
    }
  };
    return (
        <>
        <div className="login">
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                 Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">LOGIN</button>
             </form>
        </div>
        <div className="sign">
            <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="Enter password"></input>
            <input type="password" placeholder="Confirm password"></input>
            <input type="number" placeholder="Ph No"></input>
            <input type="email" placeholder="Enter email"></input>
            <button type="submit">SIGN UP</button>
            </form>
    </div>
    </>
    )
}

export default Login