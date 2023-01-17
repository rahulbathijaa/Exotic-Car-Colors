import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Sign up for updates</p>
        <p className="footer-subscription-text">
          We'll occassionally send an email if we add new colors so you can
          check them out.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            {/* button style  */}
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
