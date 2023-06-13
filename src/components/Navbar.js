import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdClose, MdMenu } from 'react-icons/md';


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
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            {click ? <MdClose style={{ color: textColor }} /> : <MdMenu style={{ color: textColor }} />}
          </div> 
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/colors/Ferrari"
                className="nav-links" 
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Ferrari
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/colors/Lamborghini"
                className="nav-links" 
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Lamborghini
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/colors/Porsche"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Porsche
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/colors/McLaren"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                McLaren
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/colors/Audi"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: textColor }}
              >
                Audi
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
