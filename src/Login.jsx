import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './styles.css';
import logo from './assets/logo.png';
import image from './assets/img.png';
import showIcon from './assets/show.png';
import hideIcon from './assets/hide.png';
import googleIcon from './assets/google.png'; 

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have Logged In');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <img src={image} alt="Login Illustration" className="image" />
      </div>

      <div className="right-section">
        <div className="box-container">
          <h2>Welcome Back to Health-Check Pro</h2>
          <h3>Account Login</h3>
          <form onSubmit={handleSubmit} className="login-form">
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

            <div className="form-group options-group">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="forgot-password" onClick={() => navigate('/reset-password')}>Forgot Password?</a>
            </div>

            <button type="submit" className="submit-btn">Sign In</button>

            <div className="social-login">
              <button type="button" className="google-login-btn">
                <img src={googleIcon} alt="Google Logo" className="google-logo" />
                Sign in with Google
              </button>
            </div>
          </form>

          <div className="signup-redirect">
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
