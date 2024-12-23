import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnsplashGalleryPage from "./pages/UnsplashGalleryPage/UnsplashGalleryPage";
import FinanceChartPage from "./pages/FinanceChartPage/FinanceChartPage";
import MapsPage from "./pages/MapsPage/MapsPage";
import SlideMenu from "./components/navigation/SlideMenu/SlideMenu";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    console.log("Menu closed");
  };

  return (
    <Router>
      <div className="app--main-container">
        <header>
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwanjcmWTWJ9Ma0agxAmcGOJBWE51nZCM&callback=initMap"
            async
            defer
          ></script>
          <div className="header-wrapper">
            <img
              className="header-logo"
              src="./../src/assets/images/logo-white.svg"
              alt="Logo"
            />
            <button onClick={toggleMenu} className="open-btn">
              <img
                className="open-btn"
                src="./../src/assets/images/menu-icon-white.svg"
                alt="Open Menu"
              />
            </button>
          </div>
        </header>
        <main className="main-wrapper">
          <SlideMenu isOpen={isOpen} closeMenu={closeMenu} />
          <Routes>
            <Route path="/" element={<UnsplashGalleryPage />} />
            <Route path="/finance-chart" element={<FinanceChartPage />} />
            <Route path="/maps" element={<MapsPage />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-wrapper">
            <p className="footer-credits">Copyright © 2024 Alejandro Otero</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
