import "./SlideMenu.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";

interface SlideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, closeMenu }) => {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current !== location) {
      console.log("Location changed, closing menu");
      closeMenu();
      prevLocation.current = location;
    }
  }, [location, closeMenu]);

  return (
    <div className={`slide-menu ${isOpen ? "open" : ""}`} id="menu-container">
      <button onClick={closeMenu} className="close-btn" id="close-menu">
        ×
      </button>
      <nav>
        <ul>
          <li>
            <Link
              to=""
              onClick={() => {
                console.log("Clicked Galería Unsplash");
                closeMenu();
              }}
            >
              Images Gallery Page
            </Link>
          </li>
          <li>
            <Link
              to="/finance-chart"
              onClick={() => {
                console.log("Clicked Gráfico Financiero");
                closeMenu();
              }}
            >
              Financial Charts Page
            </Link>
          </li>
          <li>
            <Link
              to="/maps"
              onClick={() => {
                console.log("Clicked Maps Page");
                closeMenu();
              }}
            >
              Maps Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SlideMenu;
