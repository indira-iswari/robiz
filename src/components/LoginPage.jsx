import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to premium banner after login
    navigate("/premium-banner");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src="/logo.jpg" alt="Robiz Logo" className="logo" />
          <h1>Log In</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Mobile Number
            <input type="tel" placeholder="Enter mobile number" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter password" required />
          </label>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;