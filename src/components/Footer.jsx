import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} Sali Salon Studio • African Hair Braiding in New York City
        </p>
        {/* <p className="footer__sub">
         Zabroki
        </p> */}
      </div>
    </footer>
  );
}
