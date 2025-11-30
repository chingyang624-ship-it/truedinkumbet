"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is BK8 a licensed and regulated online casino?",
    answer:
      "Yes, BK8 is fully licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros (License No. ALSI-202504032-FI2). We also hold certifications from BMM Testlabs, iTech Labs, and Gaming Laboratories International (GLI), ensuring fair play and secure operations.",
  },
  {
    question: "What games can I play at BK8?",
    answer:
      "BK8 offers a wide variety of games including sports betting, live casino games (blackjack, baccarat, roulette), online slots, esports betting, fishing games, and lottery. All games are provided by certified and trusted developers.",
  },
  {
    question: "How long do withdrawals take at BK8?",
    answer:
      "BK8 processes 92% of withdrawals within 15 minutes, which is faster than most competing platforms. We prioritize quick and secure payouts to ensure you receive your winnings promptly.",
  },
  {
    question: "What payment methods does BK8 accept?",
    answer:
      "BK8 accepts multiple payment methods including e-wallets (Touch 'n Go, GrabPay, Boost, ShopeePay), online banking (Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank), and cryptocurrencies (Bitcoin, Tether USDT, Ethereum).",
  },
  {
    question: "What is the BK8 Welcome Bonus?",
    answer:
      "New players can enjoy the 288% 'Have You BK8?' Welcome Bonus, offering up to MYR2,880 with a 35x turnover requirement. Members also receive 188 free spins on selected slots and access to seasonal promotions.",
  },
  {
    question: "Is there a BK8 mobile app?",
    answer:
      "Yes, BK8 offers a dedicated mobile app available for both Android and iOS devices. The app provides seamless betting and gaming experience with all features available on desktop.",
  },
  {
    question: "How do I contact BK8 customer support?",
    answer:
      "BK8 provides 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or concerns.",
  },
  {
    question: "What makes BK8 different from other online casinos?",
    answer:
      "BK8 stands out with higher RTP rates, faster withdrawals (92% processed in under 15 minutes), exclusive promotions, wider sportsbook coverage, and strong security measures. We are certified by multiple international gaming authorities and prioritize player satisfaction above all.",
  },
  {
    question: "Can I play BK8 games for free?",
    answer:
      "Yes, many BK8 games offer demo or free play modes, allowing you to try them out before wagering real money. This is a great way to learn game mechanics and develop strategies.",
  },
  {
    question: "Is BK8 safe and secure?",
    answer:
      "Absolutely. BK8 uses SSL encryption and advanced data protection measures to safeguard all transactions and personal information. We are fully compliant with responsible gambling frameworks and undergo regular audits by independent testing agencies.",
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
