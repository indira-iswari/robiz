import React from "react";
import "./LoginPage.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src="/logo.jpg" alt="Robiz Logo" className="logo" />
          <h1>Log In</h1>
        </div>

        <form>
          <label>
            Mobile Number
            <input type="tel" placeholder="Enter mobile number" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter password" />
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

export default App;