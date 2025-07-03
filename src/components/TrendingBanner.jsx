import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import DatePicker from "./DatePicker";
import ImageUploader from "./ImageUploader";
import "../styles/TrendingBanner.css";

function TrendingBanner() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleMakePayment = () => {
    if (selectedDate) {
      navigate("/payment-summary", { 
        state: { 
          bannerType: "Trending",
          selectedDate,
          price: 3500,
          duration: 7
        }
      });
    }
  };

  return (
    <div className="banner-container">
      <Header />
      
      <div className="banner-content">
        <h1 className="banner-title">TRENDING BANNER</h1>
        
        <ImageUploader 
          uploadedImages={uploadedImages}
          setUploadedImages={setUploadedImages}
          maxImages={5}
        />

        <div className="info-section">
          <div className="info-item">
            <span className="info-icon">●</span>
            <span>Any queries related to payment or design? </span>
            <a href="#" className="click-here">Click Here</a>
          </div>
          <p className="note">Please note: The amount paid is non-refundable and cannot be cancelled</p>
        </div>

        <div className="date-section">
          <label>Date</label>
          <button 
            className="date-selector-btn"
            onClick={() => setShowDatePicker(true)}
          >
            {selectedDate ? selectedDate : "Click to select"} ▼
          </button>
        </div>

        <p className="date-info">Select the date until which your banner should be visible.</p>

        <button 
          className="make-payment-btn"
          onClick={handleMakePayment}
          disabled={!selectedDate}
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

export default TrendingBanner;