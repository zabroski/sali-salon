
// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    style: "",
    date: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to EmailJS, backend, or Firebase later
    setSent(true);
  };

  return (
    <div className="container contact-grid">
      <div className="contact-grid__info">
        <h2>Book your braid day</h2>
        <p>
          Send us your details and the style name you liked. We’ll reply with
          confirmation and exact price based on your hair length and density.
        </p>
        <div className="contact-grid__details">
          <p>
            <strong>Call / WhatsApp:</strong> (332) 209-6134
          </p>
          <p>
            <strong>Location:</strong> 123 Africa Way, Bronx, NY
          </p>
          <p>
            <strong>Hours:</strong> Mon–Sat, 9:00 AM – 8:00 PM
          </p>
        </div>
      </div>

      <form className="contact-form card" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Full name
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row form-row--split">
          <label>
            Phone
            <input
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Preferred date
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Style name you liked
            <input
              name="style"
              type="text"
              placeholder="e.g. Mid-back Knotless with Curls"
              value={form.style}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Notes (color, length, questions…)
            <textarea
              name="notes"
              rows={4}
              placeholder="Tell us your hair length, color ideas, etc."
              value={form.notes}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className="btn btn--primary btn--full">
          Send request
        </button>

        {sent && (
          <p className="form-success">
            Thank you! We received your request and will contact you soon.
          </p>
        )}
      </form>
    </div>
  );
}
