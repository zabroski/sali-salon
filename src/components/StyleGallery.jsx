// src/components/StyleGallery.jsx
import React, { useMemo, useState } from "react";

const STYLES = [
  {
    id: 1,
    name: "Mid-back Knotless with Curls",
    category: "knotless",
    image: "/images/styles/knotless-curls.jpg",
    time: "4–5 hours",
    fromPrice: 230,
  },
  {
    id: 2,
    name: "Small Box Braids (Waist)",
    category: "box",
    image: "/images/styles/box-waist.jpg",
    time: "6–7 hours",
    fromPrice: 260,
  },
  {
    id: 3,
    name: "Fulani Tribal Braids",
    category: "tribal",
    image: "/images/styles/tribal-fulani.jpg",
    time: "3–4 hours",
    fromPrice: 210,
  },
  {
    id: 4,
    name: "Goddess Boho Locs",
    category: "locs",
    image: "/images/styles/boho-locs.jpg",
    time: "5–6 hours",
    fromPrice: 280,
  },
  {
    id: 5,
    name: "Kids’ Cornrows with Beads",
    category: "kids",
    image: "/images/styles/kids-beads.jpg",
    time: "1.5–2 hours",
    fromPrice: 95,
  },
  {
    id: 6,
    name: "Senegalese Twists",
    category: "twists",
    image: "/images/styles/senegalese-twists.jpg",
    time: "4–6 hours",
    fromPrice: 240,
  },
];

const FILTERS = [
  { id: "all", label: "All styles" },
  { id: "knotless", label: "Knotless" },
  { id: "box", label: "Box braids" },
  { id: "tribal", label: "Tribal / Fulani" },
  { id: "twists", label: "Twists" },
  { id: "locs", label: "Faux locs / Boho" },
  { id: "kids", label: "Kids" },
];

export default function StyleGallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filteredStyles = useMemo(() => {
    if (filter === "all") return STYLES;
    return STYLES.filter((s) => s.category === filter);
  }, [filter]);

  const handleSelect = (style) => {
    setSelected(style);
    // Here you could open a modal, or auto-fill the contact form style field.
  };

  return (
    <div className="container">
      <div className="section-header section-header--center">
        <h2>Pick your style by image</h2>
        <p>
          Scroll through, tap a style you love, and remember the name (or take a
          screenshot) before you book.
        </p>
      </div>

      <div className="chip-group chip-group--center">
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

      <div className="grid style-gallery-grid">
        {filteredStyles.map((style) => (
          <article
            key={style.id}
            className={`style-image-card ${
              selected?.id === style.id ? "style-image-card--selected" : ""
            }`}
            onClick={() => handleSelect(style)}
          >
            <div
              className="style-image-card__image"
              style={{ backgroundImage: `url(${style.image})` }}
            />
            <div className="style-image-card__info">
              <h3>{style.name}</h3>
              <p className="style-image-card__meta">
                <span>{style.time}</span>
                <span>From ${style.fromPrice}</span>
              </p>
              <p className="style-image-card__cta">Tap to choose this style</p>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="style-selected-banner">
          <p>
            You selected: <strong>{selected.name}</strong>.  
            Mention this name in the booking form below.
          </p>
        </div>
      )}
    </div>
  );
}
