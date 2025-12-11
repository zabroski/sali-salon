// import React, { useState, useEffect } from "react";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "styles", label: "Styles" },
//   { id: "gallery", label: "Gallery" },
//   { id: "pricing", label: "Pricing" },
//   { id: "team", label: "Stylists" },
//   { id: "testimonials", label: "Reviews" },
//   { id: "faq", label: "FAQ" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//     setOpen(false);
//   };

//   return (
//     <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
//       <div className="container navbar__inner">
//         <div className="navbar__brand" onClick={() => scrollToSection("home")}>
//           <span className="navbar__logo-circle">AB</span>
//           <span className="navbar__brand-text">
//             <span className="navbar__brand-main">AfroBraids Studio</span>
//             <span className="navbar__brand-sub">African Hair Braiding</span>
//           </span>
//         </div>

//         <nav className="navbar__nav">
//           <button
//             className="navbar__toggle"
//             onClick={() => setOpen((prev) => !prev)}
//             aria-label="Toggle menu"
//           >
//             <span />
//             <span />
//           </button>
//           <ul
//             className={`navbar__list ${open ? "navbar__list--open" : ""}`}
//           >
//             {sections.map((s) => (
//               <li key={s.id}>
//                 <button
//                   className="navbar__link"
//                   onClick={() => scrollToSection(s.id)}
//                 >
//                   {s.label}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 className="btn btn--primary btn--nav"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Book Now
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }




// src/components/Navbar.jsx
import React, { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "styles", label: "Styles" },
  { id: "contact", label: "Book Now" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand" onClick={() => scrollTo("home")}>
          <div className="navbar__logo-circle">SH</div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-main">AfroBraids Studio</span>
            <span className="navbar__brand-sub">Sali Hair Braiding</span>
          </div>
        </div>

        <nav className="navbar__nav">
          <button
            className="navbar__toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>

          <ul
            className={`navbar__list ${open ? "navbar__list--open" : ""}`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className="navbar__link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
