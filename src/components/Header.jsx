import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <img src="/logo.jpg" alt="Robiz Logo" className="header-logo" />
        </div>
        <div className="nav-buttons">
          <button 
            className="nav-btn"
            onClick={() => navigate("/premium-banner")}
          >
            Premium
          </button>
          <button 
            className="nav-btn"
            onClick={() => navigate("/trending-banner")}
          >
            Trending
          </button>
        </div>
        <div className="profile-section">
          <div className="profile-avatar">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;