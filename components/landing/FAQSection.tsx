"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Is Truedinkumbet a legal and licensed online casino in Australia?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by a recognized international gaming authority. The platform operates legally and adheres to strict standards for security, fairness, and responsible gaming.",
  },
  {
    question:
      "What types of casino games can I play on Truedinkumbet Australia?",
    answer:
      "Truedinkumbet offers a wide variety of games, including live casino tables, online slots, sports betting, eSports betting, fishing games, and lottery. All games are powered by trusted and reputable providers.",
  },
  {
    question: "How do I register for a Truedinkumbet account?",
    answer:
      'To register, visit the official Truedinkumbet Australia website, click on the "Join Now" or "Register" button, fill out the required information, and submit your registration. Once verified, you can log in and start playing.',
  },
  {
    question: "How can I deposit money into my Truedinkumbet account?",
    answer:
      "Deposits can be made via local bank transfers, e-wallets, and cryptocurrencies. Simply log in, go to the cashier or wallet section, choose your preferred method, and follow the instructions.",
  },
  {
    question: "What are the withdrawal methods and how long do they take?",
    answer:
      "Withdrawals can be made via local bank transfers or e-wallets. Processing time is typically within 15 minutes to a few hours, depending on the payment method and bank verification.",
  },
  {
    question: "Is there a Truedinkumbet mobile app?",
    answer:
      "Yes, Truedinkumbet has a dedicated mobile app available for both Android and iOS devices. It offers full access to games, promotions, and account management features for on-the-go convenience.",
  },
  {
    question: "How Do I Claim the Truedinkumbet Casino Free Bonus?",
    answer:
      "You can claim free bonuses by registering an account and visiting the promotions page. Follow the terms listed for each promotion, such as minimum deposits or game eligibility, and the bonus will be credited to your account.",
  },
  {
    question:
      "Is it safe to play and share personal information on Truedinkumbet?",
    answer:
      "Yes, Truedinkumbet uses advanced SSL encryption and follows strict data protection protocols to ensure your personal and financial details are kept secure at all times.",
  },
  {
    question: "What is the minimum deposit amount to start playing?",
    answer:
      "The minimum deposit amount varies slightly depending on the payment method, but generally starts from as low as AUD20, making it accessible to all players.",
  },
  {
    question: "How does Truedinkumbet ensure fair play and game integrity?",
    answer:
      "Truedinkumbet works with certified game providers and undergoes regular audits by independent testing agencies. All random number generators are certified to ensure fair and unpredictable game outcomes.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Find answers to common questions about Truedinkumbet, our games, bonuses, payments, and responsible gaming practices.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white shadow-lg border-l-4 border-orange-500'
                  : 'bg-white shadow-md border-l-4 border-gray-200 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-orange-50'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <span className={`font-semibold transition-colors ${
                  openIndex === index
                    ? 'text-gray-900'
                    : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-orange-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-white border-t-2 border-orange-100 animate-in fade-in duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
