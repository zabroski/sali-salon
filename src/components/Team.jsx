import React from "react";
import "./Team.css";


const STYLISTS = [
  {
    name: "Sali Nana",
    role: "Lead Braider • Knotless Specialist",
    bio: "From Burkina-Faso to NYC, Sali brings 10+ years of experience in protective styling.",
    specialties: ["Knotless", "Boho locs", "Senegalese twists"],
  },
  {
    name: "Zuri",
    role: "Creative Stylist • Tribal & Fulani",
    bio: "Known for clean parts, bead work and camera-ready styles.",
    specialties: ["Fulani braids", "Feed-in cornrows", "Kids’ styles"],
  },
  {
    name: "Fatou",
    role: "Junior Braider • Kids & Express",
    bio: "Fast, gentle and patient—parents love her kids’ braids.",
    specialties: ["Kids cornrows", "Express cornrows", "Under-wig braids"],
  },
];

export default function Team() {
  return (
    <div className="container">
      <div className="section-header section-header--center">
        <h2>Meet your braiders</h2>
        <p>Skilled, gentle and detail-oriented. Your hair is in good hands.</p>
      </div>

      <div className="grid team-grid">
        {STYLISTS.map((s) => (
          <article key={s.name} className="card team-card">
            <div className="team-card__avatar" />
            <h3 className="team-card__name">{s.name}</h3>
            <p className="team-card__role">{s.role}</p>
            <p className="team-card__bio">{s.bio}</p>
            <div className="team-card__chips">
              {s.specialties.map((sp) => (
                <span key={sp} className="chip chip--soft">
                  {sp}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
