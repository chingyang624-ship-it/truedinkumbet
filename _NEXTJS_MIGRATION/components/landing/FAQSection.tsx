"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Truedinkumbet a legal and licensed online casino in Australia?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR), ensuring a safe and secure gaming environment for Australian players. We hold certifications from BMM Testlabs and Gaming Laboratories International (GLI), ensuring fair play and secure operations.",
  },
  {
    question: "What types of casino games can I play on Truedinkumbet Australia?",
    answer:
      "Truedinkumbet offers a wide variety of games including sports betting, live casino games (blackjack, baccarat, roulette), online slots, esports betting, fishing games, and lottery. All games are provided by certified and trusted developers.",
  },
  {
    question: "How do I register for a Truedinkumbet account?",
    answer:
      "Registering is simple and takes just a few minutes. Visit our website, click 'Join Now', fill in your personal details, verify your email address, and you're ready to start playing. You'll also need to provide some identification for account verification.",
  },
  {
    question: "How can I deposit money into my Truedinkumbet account?",
    answer:
      "Truedinkumbet accepts multiple deposit methods including e-wallets, online banking, bank transfers, and cryptocurrencies (Bitcoin, Tether USDT, Ethereum). Simply log in to your account, navigate to 'Deposit', select your preferred payment method, and follow the instructions.",
  },
  {
    question: "What are the withdrawal methods and how long do they take?",
    answer:
      "Truedinkumbet offers various withdrawal methods including e-wallets, bank transfers, and cryptocurrencies. Most withdrawals are processed within 24-48 hours. The exact timeframe depends on your chosen withdrawal method and bank processing times.",
  },
  {
    question: "Is there a Truedinkumbet mobile app?",
    answer:
      "Yes, Truedinkumbet offers a dedicated mobile app available for both Android and iOS devices. The app provides a seamless betting and gaming experience with all features available on desktop.",
  },
  {
    question: "How Do I Claim the Truedinkumbet Casino Free Bonus?",
    answer:
      "New players can claim the welcome bonus automatically upon registration or after making their first deposit. The bonus typically includes a deposit match and free spins on selected slots. Check the promotions page for current bonus terms and conditions.",
  },
  {
    question: "Is it safe to play and share personal information on Truedinkumbet?",
    answer:
      "Absolutely. Truedinkumbet uses SSL encryption and advanced data protection measures to safeguard all transactions and personal information. We are fully compliant with responsible gambling frameworks and undergo regular audits by independent testing agencies.",
  },
  {
    question: "What is the minimum deposit amount to start playing?",
    answer:
      "The minimum deposit amount at Truedinkumbet is AUD 10 (or equivalent in other currencies). This low minimum ensures that players of all budgets can enjoy our games and services.",
  },
  {
    question: "How does Truedinkumbet ensure fair play and game integrity?",
    answer:
      "Truedinkumbet uses Random Number Generator (RNG) technology certified by Gaming Laboratories International (GLI) to ensure fair play. All games are regularly audited, and we maintain the highest standards of game integrity and player protection.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
