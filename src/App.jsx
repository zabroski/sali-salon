// =======================
// file: src/App.jsx
// =======================
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceStrip from "./components/ExperienceStrip";
import StylesShowcase from "./components/StylesShowcase";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import BookingStrip from "./components/BookingStrip";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <section id="home" className="section section--hero">
          <Hero />
        </section>

        <ExperienceStrip />

        <section id="styles" className="section">
          <StylesShowcase />
        </section>

        <section id="gallery" className="section section--alt">
          <Gallery />
        </section>

        <section id="pricing" className="section">
          <Pricing />
        </section>

        <section id="team" className="section section--alt">
          <Team />
        </section>

        <section id="testimonials" className="section">
          <Testimonials />
        </section>

        <BookingStrip />

        <section id="faq" className="section section--alt">
          <Faq />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

