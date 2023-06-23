// import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";


// function Footer(props) {
//   const { hex_text } = props;



 
//   return (

//       <div className="footer-links ">
//         <div className="footer-link-wrapper">
      
//           <div className="footer-link-items">
//             <Link to="/colors/Ferrari">Ferrari</Link>
//           </div>
//           <div className="footer-link-items">
//             <Link to="/colors/Lamborghini">Lamborghini</Link>
//           </div>
//           <div className="footer-link-items">
//             <Link to="/colors/Porsche">Porsche</Link>
//           </div>
//           <div className="footer-link-items">
//             <Link to="/colors/McLaren">McLaren</Link>
//           </div>
//           <div className="footer-link-items">
//             <Link to="/colors/Audi">Audi</Link>
//           </div>
//           <div className="footer-link-items">
//             <Link to="https://twitter.com/rahulbathijaa">Contact</Link>
//           </div>
          
//         </div>
//       </div>
//     // </div>
//   );
// }



// export default Footer;

import React from "react";
import "./Footer.css";

function Footer(props) {
  const { hex_text } = props;

  return (
    <div className="footer-links">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <a href="/car-companies/ferrari">Ferrari</a>
        </div>
        <div className="footer-link-items">
          <a href="/car-companies/lamborghini">Lamborghini</a>
        </div>
        <div className="footer-link-items">
          <a href="/car-companies/porsche">Porsche</a>
        </div>
        <div className="footer-link-items">
          <a href="/car-companies/mclaren">McLaren</a>
        </div>
        <div className="footer-link-items">
          <a href="/car-companies/audi">Audi</a>
        </div>
        <div className="footer-link-items">
          <a href="https://twitter.com/rahulbathijaa">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
