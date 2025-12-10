import React from "react";

const PACKAGES = [
  {
    name: "Express Cornrows",
    price: 85,
    duration: "1–1.5 hours",
    description: "Quick, neat cornrows. Perfect for gym, wigs, or under-cap.",
    includes: ["Wash not included", "Basic scalp oiling", "Up to 6 straight backs"],
    tag: "Same-day friendly",
  },
  {
    name: "Signature Knotless",
    price: 230,
    duration: "4–5 hours",
    description: "Lightweight, natural movement and low tension.",
    includes: [
      "Consultation & length choice",
      "Gentle detangle & blow dry",
      "Mid-back knotless braids",
    ],
    tag: "Most popular",
    highlighted: true,
  },
  {
    name: "Deluxe Glam Set",
    price: 320,
    duration: "5–6 hours",
    description: "For birthdays, trips, photoshoots and special moments.",
    includes: [
      "Wash + deep condition",
      "Custom style (knotless, twists, or locs)",
      "Basic trim & styling pictures",
    ],
    tag: "Event ready",
  },
];

export default function Pricing() {
  return (
    <div className="container">
      <div className="section-header">
        <h2>Transparent pricing, no surprises</h2>
        <p>
          Final price may vary based on hair length, density and any add-ons
          like color, curls or beads.
        </p>
      </div>

      <div className="grid pricing-grid">
        {PACKAGES.map((p) => (
          <article
            key={p.name}
            className={`card pricing-card ${
              p.highlighted ? "pricing-card--highlight" : ""
            }`}
          >
            {p.tag && <span className="pricing-card__tag">{p.tag}</span>}
            <h3 className="pricing-card__title">{p.name}</h3>
            <p className="pricing-card__price">
              <span className="pricing-card__price-main">${p.price}</span>
              <span className="pricing-card__price-sub">starting</span>
            </p>
            <p className="pricing-card__duration">{p.duration}</p>
            <p className="pricing-card__description">{p.description}</p>
            <ul className="pricing-card__list">
              {p.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              className="btn btn--outline btn--full"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request this package
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
