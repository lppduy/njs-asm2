import React from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Use the context

  const handleLogout = () => {
    logout();
    navigate('/login'); // Navigate to login page after logout
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate('/')}>Booking Website</span>
        <div className="navItems">
          {user ? (
            <>
              <span className="navUser">{user.email}</span>
              <button className="navButton" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="navButton" onClick={() => navigate('/signup')}>Register</button>
              <button className="navButton" onClick={() => navigate('/login')}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
