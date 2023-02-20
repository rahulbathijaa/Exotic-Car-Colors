import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { hex_text } = props;


  return (
    <>
      <nav className="navbar" style={{ backgroundColor: hex_text }}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ExoticCarColors
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#colors"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Colors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#brands"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://twitter.com/rahulbathijaa"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
