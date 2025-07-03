import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import PremiumBanner from "./components/PremiumBanner";
import TrendingBanner from "./components/TrendingBanner";
import PaymentSummary from "./components/PaymentSummary";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/premium-banner" element={<PremiumBanner />} />
        <Route path="/trending-banner" element={<TrendingBanner />} />
        <Route path="/payment-summary" element={<PaymentSummary />} />
      </Routes>
    </Router>
  );
}

export default App;