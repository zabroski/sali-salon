// src/components/HeroShowcase.jsx
import React from "react";

const HERO_STYLES = [
  {
    id: 1,
    name: "Knotless Braids",
    desc: "Lightweight, natural movement – perfect for everyday.",
    // Replace with your own image path or URL
    image: "/images/knotless-main.jpg",
  },
  {
    id: 2,
    name: "Fulani Tribal Braids",
    desc: "Beads, patterns and culture in every part.",
    image: "/images/fulani-side.jpg",
  },
  {
    id: 3,
    name: "Kids’ Cornrows",
    desc: "Cute, neat and comfortable for little ones.",
    image: "/images/kids-cornrows.jpg",
  },
];

export default function HeroShowcase() {
  const main = HERO_STYLES[0];
  const secondary = HERO_STYLES.slice(1);

  const scrollToStyles = () => {
    document
      .getElementById("styles")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="container hero-grid">
      <div className="hero-grid__content">
        <span className="hero-pill">Colorful African Hair Braiding</span>
        <h1 className="hero-grid__title">
          Choose your next
          <span className="hero-grid__title-accent"> braid style</span>
          by picture.
        </h1>
        <p className="hero-grid__subtitle">
          Scroll through our braid gallery, tap the look you love and send us
          the style name when you book. No guessing, just beautiful results.
        </p>

        <div className="hero-grid__actions">
          <button className="btn btn--primary" onClick={scrollToStyles}>
            Browse braid looks
          </button>
          <button
            className="btn btn--outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book an appointment
          </button>
        </div>

        <div className="hero-grid__tags">
          <span>Box braids</span>
          <span>Knotless</span>
          <span>Tribal & Fulani</span>
          <span>Twists</span>
          <span>Kids</span>
        </div>
      </div>

      <div className="hero-grid__images">
        <article className="hero-main-card">
          <div
            className="hero-main-card__image"
            style={{
              backgroundImage: `url(${main.image})`,
            }}
          />
          <div className="hero-main-card__overlay">
            <h2>{main.name}</h2>
            <p>{main.desc}</p>
            <button className="btn btn--light" onClick={scrollToStyles}>
              See similar styles
            </button>
          </div>
        </article>

        <div className="hero-secondary-grid">
          {secondary.map((style) => (
            <article key={style.id} className="hero-secondary-card">
              <div
                className="hero-secondary-card__image"
                style={{ backgroundImage: `url(${style.image})` }}
              />
              <div className="hero-secondary-card__label">
                <h3>{style.name}</h3>
                <p>{style.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
