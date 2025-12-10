import React from "react";

const REVIEWS = [
  {
    name: "Melanie",
    text: "My knotless braids looked fresh for weeks. Zero tension, I even slept peacefully the first night.",
    style: "Mid-back knotless",
    rating: 5,
  },
  {
    name: "Rahim",
    text: "Brought my daughter for back-to-school braids. They were patient, gentle and so sweet with her.",
    style: "Kids cornrows",
    rating: 5,
  },
  {
    name: "Jada",
    text: "I booked the Deluxe Glam Set for my birthday trip—everyone kept asking who did my braids.",
    style: "Goddess boho locs",
    rating: 4.8,
  },
];

export default function Testimonials() {
  return (
    <div className="container">
      <div className="section-header">
        <h2>What clients are saying</h2>
        <p>Real stories from clients who trusted us with their crowns.</p>
      </div>

      <div className="grid testimonials-grid">
        {REVIEWS.map((r) => (
          <article key={r.name} className="card testimonial-card">
            <div className="testimonial-card__header">
              <div>
                <h3>{r.name}</h3>
                <p className="testimonial-card__style">{r.style}</p>
              </div>
              <div className="testimonial-card__rating">
                <span>★ {r.rating}</span>
              </div>
            </div>
            <p className="testimonial-card__text">“{r.text}”</p>
          </article>
        ))}
      </div>
    </div>
  );
}
