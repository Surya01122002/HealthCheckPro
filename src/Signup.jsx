import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For back navigation
import './styles.css';
import logo from './assets/logo.png';
import image from './assets/img.png';
import showIcon from './assets/show.png';
import hideIcon from './assets/hide.png';

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have Registered');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <img src={image} alt="Signup Illustration" className="image" />
      </div>

      <div className="right-section">
        <div className="box-container">
          <Link to="/" className="back-to-login">Back to Login</Link> {/* Back to Login */}
          <h2>Welcome to Health-Check Pro</h2>
          <h3>Account Signup</h3>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              <img
                src={passwordVisible ? hideIcon : showIcon}
                alt="Toggle Password Visibility"
                className="toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className="form-group password-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                required
              />
              <img
                src={confirmPasswordVisible ? hideIcon : showIcon}
                alt="Toggle Confirm Password Visibility"
                className="toggle-icon"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>

            <button type="submit" className="register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
