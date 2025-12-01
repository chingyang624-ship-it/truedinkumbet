"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Truedinkumbet a licensed and regulated online casino?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR), ensuring a safe and secure gaming environment for Australian players. We hold certifications from BMM Testlabs and Gaming Laboratories International (GLI), ensuring fair play and secure operations.",
  },
  {
    question: "What games can I play at Truedinkumbet?",
    answer:
      "Truedinkumbet offers a wide variety of games including sports betting, live casino games (blackjack, baccarat, roulette), online slots, esports betting, fishing games, and lottery. All games are provided by certified and trusted developers.",
  },
  {
    question: "How long do withdrawals take at Truedinkumbet?",
    answer:
      "Truedinkumbet processes withdrawals quickly and efficiently. Most withdrawals are processed within 24-48 hours, allowing you to access your winnings promptly.",
  },
  {
    question: "What payment methods does Truedinkumbet accept?",
    answer:
      "Truedinkumbet accepts multiple payment methods including e-wallets, online banking, bank transfers, and cryptocurrencies (Bitcoin, Tether USDT, Ethereum).",
  },
  {
    question: "What is the Truedinkumbet Welcome Bonus?",
    answer:
      "New players can enjoy generous welcome bonuses offering significant deposit matches with reasonable turnover requirements. Members also receive free spins on selected slots and access to seasonal promotions.",
  },
  {
    question: "Is there a Truedinkumbet mobile app?",
    answer:
      "Yes, Truedinkumbet offers a dedicated mobile app available for both Android and iOS devices. The app provides a seamless betting and gaming experience with all features available on desktop.",
  },
  {
    question: "How do I contact Truedinkumbet customer support?",
    answer:
      "Truedinkumbet provides 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or concerns.",
  },
  {
    question: "What makes Truedinkumbet different from other online casinos?",
    answer:
      "Truedinkumbet stands out with competitive RTP rates, fast withdrawals, exclusive promotions, wide sportsbook coverage, and strong security measures. We are certified by multiple international gaming authorities and prioritize player satisfaction above all.",
  },
  {
    question: "Can I play Truedinkumbet games for free?",
    answer:
      "Yes, many Truedinkumbet games offer demo or free play modes, allowing you to try them out before wagering real money. This is a great way to learn game mechanics and develop strategies.",
  },
  {
    question: "Is Truedinkumbet safe and secure?",
    answer:
      "Absolutely. Truedinkumbet uses SSL encryption and advanced data protection measures to safeguard all transactions and personal information. We are fully compliant with responsible gambling frameworks and undergo regular audits by independent testing agencies.",
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
