import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer(props) {
  const { hex_text } = props;



 
  return (
    // <div className="footer-container" style={{ backgroundColor: hex_text }}>
    //   <section className="footer-subscription" >
    //     <p className="footer-subscription-heading">Sign up for updates</p>
    //     <p className="footer-subscription-text">
    //       We'll occassionally send an email if we add new colors so you can
    //       check them out.
    //     </p>
    //     <div className="input-areas">
    //       <form>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Your Email"
    //           className="footer-input"
    //         />
    //         {/* button style  */}
    //       </form>
    //     </div>


    //   </section>


      <div className="footer-links ">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/#colors">Colors</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/#brands">Brands</Link>
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
