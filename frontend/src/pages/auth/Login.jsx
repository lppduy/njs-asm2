import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import './auth.css';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(response);
      if (response.status === 200) {
        login(email, response.data.token);
        navigate('/');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="authContainer">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="inputContainer">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="authBtn">Login</button>
        </form>
        <p className='subText'>
          Don't have an account? <span className="authLink" onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </div>
    </>
  );
};

export default Login;
