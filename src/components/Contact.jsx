
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    style: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to EmailJS, a backend API, Firebase, etc.
    setSubmitted(true);
  };

  return (
    <div className="container contact">
      <div className="contact__info">
        <h2>Let’s plan your next appointment</h2>
        <p>
          Fill out the form and we’ll get back to you with available times and
          confirmation. For same-day appointments, call or text directly.
        </p>

        <div className="contact__details">
          <p>
            <strong>Phone / WhatsApp:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Africa Way, Harlem, New York, NY
          </p>
          <p>
            <strong>Hours:</strong> Mon–Sat, 9:00 AM – 8:00 PM
          </p>
        </div>
      </div>

      <form className="contact__form card" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
        </div>

        <div className="form-row form-row--split">
          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </label>
          <label>
            Preferred date
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Style you’re interested in
            <input
              type="text"
              name="style"
              value={form.style}
              onChange={handleChange}
              placeholder="e.g. mid-back knotless, boho locs, kids cornrows"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Notes (length, color, questions…)
            <textarea
              name="notes"
              rows={4}
              value={form.notes}
              onChange={handleChange}
              placeholder="Tell us about your hair, preferred length, color, etc."
            />
          </label>
        </div>

        <button type="submit" className="btn btn--primary btn--full">
          Send request
        </button>

        {submitted && (
          <p className="form-success">
            Thank you! We received your request and will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
