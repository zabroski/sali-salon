
// // src/components/Footer.jsx
// import React from "react";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="footer">
//       <div className="container footer__inner">
//         <p>© {year}  Sali AfroBraids Studio • All rights reserved.</p>
//         {/* <p className="footer__sub">
//           Update this text with your real business name and socials.
//         </p> */}
//       </div>
//     </footer>
//   );
// }




import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        <p>© {year} Sali AfroBraids Studio • All rights reserved.</p>

        <div className="footer__socials">
          <a
            href="https://instagram.com/your_instagram_page"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/your_facebook_page"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
