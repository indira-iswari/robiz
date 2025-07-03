import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import "../styles/PaymentSummary.css";

function PaymentSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bannerType, selectedDate, price, duration } = location.state || {};

  if (!location.state) {
    navigate("/premium-banner");
    return null;
  }

  const handlePayment = () => {
    // Handle payment processing here
    alert("Payment processed successfully!");
  };

  return (
    <div className="banner-container">
      <Header />
      
      <div className="banner-content">
        <h1 className="banner-title">{bannerType?.toUpperCase()} BANNER</h1>
        
        <div className="date-selector">
          <button className="date-button">
            Date: {selectedDate} ▼
          </button>
        </div>

        <div className="preview-section">
          <h2>Preview</h2>
          <div className={`banner-preview ${bannerType?.toLowerCase()}-preview`}>
            {bannerType === "Premium" ? (
              <div className="fruit-banner">
                <div className="banner-content-left">
                  <h3>Fresh</h3>
                  <h3 className="green-text">Fruit Store</h3>
                  <p>Taste & variety, hand in hand</p>
                  <button className="buy-now-btn">Buy Now ➤</button>
                </div>
                <div className="fruit-image">
                  <div className="watermelon"></div>
                </div>
              </div>
            ) : (
              <div className="trending-preview-banner">
                <div className="sale-banner">
                  <div className="sale-content">
                    <div className="sale-header">JUST NOW</div>
                    <div className="sale-title">SUPER</div>
                    <div className="sale-subtitle">Sale</div>
                    <div className="sale-discount">50%</div>
                    <div className="sale-date">12-25 AUGUST</div>
                    <button className="shop-now-btn">SHOP NOW</button>
                  </div>
                  <div className="sale-image">
                    <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Shopping" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="info-section">
          <div className="info-item">
            <span className="info-icon">●</span>
            <span>Any queries related to payment or design? </span>
            <a href="#" className="click-here">Click Here</a>
          </div>
          <p className="note">Please note: The amount paid is non-refundable and cannot be cancelled</p>
        </div>

        <div className="summary-section">
          <h3>Summary</h3>
          <div className="summary-item">
            <span>Total duration</span>
            <span>{duration} days</span>
          </div>
          <div className="summary-item">
            <span>Base price</span>
            <span>{bannerType === "Premium" ? "25,000" : "15,000"}</span>
          </div>
          <div className="summary-item">
            <span>Tax</span>
            <span>500</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>Rs {price?.toLocaleString()}</span>
          </div>
        </div>

        <button className="make-payment-btn" onClick={handlePayment}>
          CONFIRM PAYMENT
        </button>
      </div>
    </div>
  );
}

export default PaymentSummary;