import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import DatePicker from "./DatePicker";
import "../styles/PremiumBanner.css";

function PremiumBanner() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("14/04/2021-23/04/2021");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleMakePayment = () => {
    navigate("/payment-summary", { 
      state: { 
        bannerType: "Premium",
        selectedDate,
        price: 5500,
        duration: 10
      }
    });
  };

  return (
    <div className="banner-container">
      <Header />
      
      <div className="banner-content">
        <h1 className="banner-title">PREMIUM BANNER</h1>
        
        <div className="date-selector">
          <button 
            className="date-button"
            onClick={() => setShowDatePicker(true)}
          >
            Date: {selectedDate} ▼
          </button>
        </div>

        <div className="preview-section">
          <h2>Preview</h2>
          <div className="banner-preview premium-preview">
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
            <span>10 days</span>
          </div>
          <div className="summary-item">
            <span>Base price</span>
            <span>5,000</span>
          </div>
          <div className="summary-item">
            <span>Tax</span>
            <span>500</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>Rs 5,500</span>
          </div>
        </div>

        <button 
          className="make-payment-btn"
          onClick={handleMakePayment}
        >
          MAKE PAYMENT
        </button>
      </div>

      {showDatePicker && (
        <DatePicker
          onDateSelect={handleDateSelect}
          onClose={() => setShowDatePicker(false)}
        />
      )}
    </div>
  );
}

export default PremiumBanner;