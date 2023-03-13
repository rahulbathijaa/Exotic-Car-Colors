import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer(props) {
  const { hex_text } = props;



 
  return (

      <div className="footer-links ">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/rosso-fuoco/">Colors</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/colors/Lamborghini">Brands</Link>
          </div>
          <div className="footer-link-items">
            <Link to="https://twitter.com/rahulbathijaa">Contact</Link>
          </div>
          
        </div>
      </div>
    // </div>
  );
}



export default Footer;
