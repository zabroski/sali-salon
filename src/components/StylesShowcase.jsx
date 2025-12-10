import React, { useMemo, useState } from "react";

const STYLES = [
  {
    id: 1,
    name: "Mid-back Knotless Braids",
    category: "protective",
    duration: "4–5 hours",
    priceFrom: 220,
    tags: ["Low tension", "Great for everyday wear"],
    level: "Most booked",
  },
  {
    id: 2,
    name: "Small Box Braids",
    category: "classic",
    duration: "6–7 hours",
    priceFrom: 260,
    tags: ["Long lasting", "Versatile styling"],
    level: "Premium",
  },
  {
    id: 3,
    name: "Tribal Fulani Braids",
    category: "signature",
    duration: "3–4 hours",
    priceFrom: 200,
    tags: ["Culture inspired", "Beads optional"],
    level: "Signature Look",
  },
  {
    id: 4,
    name: "Kids’ Cornrows & Beads",
    category: "kids",
    duration: "1.5–2 hours",
    priceFrom: 90,
    tags: ["Gentle detangling", "Kid-friendly"],
    level: "Kids special",
  },
  {
    id: 5,
    name: "Senegalese Twists",
    category: "protective",
    duration: "4–6 hours",
    priceFrom: 230,
    tags: ["Elegant", "Easy maintenance"],
    level: "Protective",
  },
  {
    id: 6,
    name: "Goddess Boho Locs",
    category: "signature",
    duration: "5–6 hours",
    priceFrom: 280,
    tags: ["Boho vibes", "Lightweight"],
    level: "Boho favorite",
  },
];

const FILTERS = [
  { id: "all", label: "All styles" },
  { id: "protective", label: "Protective" },
  { id: "classic", label: "Classic" },
  { id: "signature", label: "Signature / Bridal" },
  { id: "kids", label: "Kids" },
];

export default function StylesShowcase() {
  const [filter, setFilter] = useState("all");

  const stylesToShow = useMemo(() => {
    if (filter === "all") return STYLES;
    return STYLES.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <div className="container">
      <div className="section-header">
        <h2>Choose your next braid style</h2>
        <p>
          From quick cornrows to all-day knotless sessions, we’ll help you pick
          the style that matches your lifestyle and hair goals.
        </p>
      </div>

      <div className="chip-group">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip ${filter === f.id ? "chip--active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid styles-grid">
        {stylesToShow.map((style) => (
          <article key={style.id} className="card style-card">
            <div className="style-card__badge">{style.level}</div>
            <div className="style-card__body">
              <h3>{style.name}</h3>
              <p className="style-card__meta">
                <span>⏱ {style.duration}</span>
                <span>From ${style.priceFrom}</span>
              </p>
              <ul className="style-card__tags">
                {style.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="style-card__footer">
              <button
                className="btn btn--ghost btn--sm"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book this style
              </button>
              <span className="style-card__note">
                Deposit required to secure slot.
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
