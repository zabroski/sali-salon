import React, { useState } from "react";

const FAQ = [
  {
    q: "Do I need to come with my hair washed and blow-dried?",
    a: "We recommend arriving with clean, product-free hair. Blow-dry is included in some packages and can be added to any appointment.",
  },
  {
    q: "How much is the deposit and how do I pay?",
    a: "Deposits are typically $40–$60 depending on the style. You can send via Cash App, Zelle or Apple Pay. The remaining balance is due in cash or card after your appointment.",
  },
  {
    q: "What if I’m running late?",
    a: "We offer a 15-minute grace period. After that, your appointment may be rescheduled and the deposit becomes non-refundable.",
  },
  {
    q: "Do you braid children’s hair?",
    a: "Yes! We love our little clients. Please mention your child’s age when booking so we can allocate the right timing and stylist.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container">
      <div className="section-header section-header--center">
        <h2>Frequently asked questions</h2>
        <p>Still unsure? You can always send us a message with your question.</p>
      </div>

      <div className="faq-list">
        {FAQ.map((item, index) => {
          const open = index === openIndex;
          return (
            <div
              key={item.q}
              className={`faq-item ${open ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-item__question"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
              >
                <span>{item.q}</span>
                <span>{open ? "−" : "+"}</span>
              </button>
              {open && <p className="faq-item__answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
