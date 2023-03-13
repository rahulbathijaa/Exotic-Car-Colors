

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { hex_text, textColor } = props;

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: hex_text }}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" style={{ color: textColor }}>
            ExoticCarColors
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/rosso-fuoco/"
                className="nav-links" 
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Colors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/colors/Lamborghini"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/rahulbathijaa"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
