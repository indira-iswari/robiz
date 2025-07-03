import React, { useState } from "react";
import "../styles/DatePicker.css";

function DatePicker({ onDateSelect, onClose }) {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2021);
  const [selectedDates, setSelectedDates] = useState([14, 23]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (date) => {
    if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      const start = Math.min(selectedDates[0], date);
      const end = Math.max(selectedDates[0], date);
      setSelectedDates([start, end]);
    } else {
      setSelectedDates([date]);
    }
  };

  const handleConfirm = () => {
    if (selectedDates.length === 2) {
      const [start, end] = selectedDates;
      const startDate = `${start.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
      const endDate = `${end.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
      onDateSelect(`${startDate}-${endDate}`);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let date = 1; date <= daysInMonth; date++) {
      const isSelected = selectedDates.includes(date);
      const isInRange = selectedDates.length === 2 && 
        date >= Math.min(...selectedDates) && 
        date <= Math.max(...selectedDates);

      days.push(
        <div
          key={date}
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isInRange ? 'in-range' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {date}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="date-picker-overlay">
      <div className="date-picker-modal">
        <div className="date-picker-header">
          <h3>Select Date</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <p className="date-picker-subtitle">Select the dates for your banner</p>
        
        <div className="month-navigation">
          <button 
            className="nav-arrow"
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
          >
            ‹
          </button>
          <span className="month-year">
            {months[currentMonth]} {currentYear}
          </span>
          <button 
            className="nav-arrow"
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
          >
            ›
          </button>
        </div>

        <div className="calendar-grid">
          <div className="weekday-header">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          <div className="calendar-days">
            {renderCalendarDays()}
          </div>
        </div>

        <button 
          className="confirm-btn"
          onClick={handleConfirm}
          disabled={selectedDates.length !== 2}
        >
          CONFIRM SELECTION
        </button>
      </div>
    </div>
  );
}

export default DatePicker;