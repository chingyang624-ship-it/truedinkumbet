"use client";

import { useState } from "react";

export default function EWalletFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What gaming options does Truedinkumbet E-Wallet Casino offer?",
      answer: "Truedinkumbet offers a wide range of gaming options including live casino titles, sports betting, fish slot games, and an extensive collection of free credit e-wallet slot games with premium graphics and engaging gameplay.",
    },
    {
      question: "How long has Truedinkumbet been in the gaming industry?",
      answer: "Truedinkumbet has been a leading name in the gaming industry, serving Australian and international players with premium gaming experiences and trusted services.",
    },
    {
      question: "Which top slot game providers are featured at Truedinkumbet?",
      answer: "Truedinkumbet features games from top-tier providers like NextSpin, SpadeGaming, JILI, Playtech, MEGA888, and 918Kiss, ensuring quality and variety.",
    },
    {
      question: "What types of bonuses does Truedinkumbet offer?",
      answer: "Truedinkumbet offers a variety of bonuses including free credit offers, welcome bonuses up to AUD 1,080, daily reload bonuses, and referral bonuses.",
    },
    {
      question: "Can I play at Truedinkumbet without making a deposit?",
      answer: "Yes, Truedinkumbet offers free credit options where you can play without making a deposit, allowing you to win real money with our generous free credit promotions.",
    },
    {
      question: "What e-wallet payment methods are accepted at Truedinkumbet?",
      answer: "Truedinkumbet accepts various e-wallets including Touch'n Go, DuitNow, and PayPal, along with other payment methods like internet banking and cryptocurrencies.",
    },
    {
      question: "Is it easy to make deposits and withdrawals at Truedinkumbet?",
      answer: "Yes, making deposits and withdrawals at Truedinkumbet is straightforward and user-friendly, with multiple safe and trusted online payment methods available for your convenience.",
    },
    {
      question: "What is the minimum deposit amount at Truedinkumbet?",
      answer: "Minimum deposit amounts vary by payment method. Please check with our support team for specific details on your chosen deposit method.",
    },
    {
      question: "How quickly are withdrawals processed?",
      answer: "Withdrawals are typically processed within 24-48 hours, depending on your chosen payment method and bank processing times.",
    },
    {
      question: "Is my personal information safe at Truedinkumbet?",
      answer: "Yes, Truedinkumbet uses advanced encryption technology and follows strict security protocols to protect all your personal and financial information.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          FAQs about E-Wallet Casinos Australia - Truedinkumbet
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Find answers to commonly asked questions about e-wallet casino gaming at Truedinkumbet Australia.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900 text-lg">
                  {faq.question}
                </h3>
                <span className={`text-orange-500 text-2xl transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6">
            Our dedicated customer support team is available 24/7 to assist you with any questions or concerns about e-wallet deposits, games, bonuses, or your account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://truedinkumbet.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
            >
              Contact Support
            </a>
            <a
              href="https://truedinkumbet.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
