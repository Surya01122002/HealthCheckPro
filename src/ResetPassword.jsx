import React, { useState } from 'react';
import './styles.css';
import logo from './assets/logo.png';
import image from './assets/img.png';

function ResetPassword() {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (event) => {
    event.preventDefault();
    setOtpSent(true); // Simulate OTP sent
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Password Changed');
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <img src={image} alt="Reset Illustration" className="image" />
      </div>

      <div className="right-section">
        <div className="box-container">
          <h2>Reset Your Password</h2>
          <form onSubmit={otpSent ? handleSubmit : handleSendOtp} className="reset-form">
            {!otpSent ? (
              <>
                <div className="form-group">
                  <label htmlFor="email">Enter your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <button type="submit" className="submit-btn">Send OTP</button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="otp">Enter OTP</label>
                  <input type="text" id="otp" name="otp" required />
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input type="password" id="newPassword" name="newPassword" required />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>

                <button type="submit" className="submit-btn">Change Password</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
