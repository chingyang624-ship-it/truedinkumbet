"use client";

import { useState } from "react";

export default function LiveCasinoFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "Is Truedinkumbet legal for live casino Australia play?",
      answer:
        "Yes, Truedinkumbet is licensed and regulated, offering a legal and trusted live casino environment for Australian players.",
    },
    {
      question:
        "What are the most popular live casino games Australia players enjoy?",
      answer:
        "Top live casino online games include Live Baccarat, Lightning Roulette, Blackjack, Sic Bo, and Dragon Tiger.",
    },
    {
      question: "Can I chat with real dealers while playing?",
      answer:
        "Absolutely. All Truedinkumbet live casino tables have chat features that allow you to interact with the dealer and other players.",
    },
    {
      question: "Is there a minimum bet for Truedinkumbet live casino tables?",
      answer:
        "Yes, minimum bets vary by provider and game type but generally start from as low as AUD 5.",
    },
    {
      question: "Do live games work well on mobile devices?",
      answer:
        "Yes, all live games are mobile-optimized for smooth play on both smartphones and tablets.",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          FAQs
        </h2>

        <div
          className="max-w-3xl mx-auto"
          style={{ display: "grid", gap: "12px" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                style={{
                  width: "100%",
                  padding: "16px",
                  backgroundColor:
                    expandedIndex === index ? "#f3f4f6" : "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#1f2124",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    color: "#1f2124",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>
              {expandedIndex === index && (
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f9fafb",
                    borderTop: "1px solid #ddd",
                  }}
                >
                  <p
                    style={{ color: "#6b7280", lineHeight: "1.6", margin: "0" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
