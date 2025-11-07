'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Truedinkumbet a trusted slot game Australia site?',
    answer:
      'Yes, Truedinkumbet is fully licensed and regulated, offering only certified slot games from reputable providers, making it a trusted slot game Australia platform.',
  },
  {
    question: 'What are the best slot games to win real money on Truedinkumbet?',
    answer:
      'Top picks include Gates of Olympus, Sweet Bonanza, Candy Bonanza, and Mega Moolah, all known for high payout potential and exciting bonus features.',
  },
  {
    question: 'Which slot games have the highest RTP on Truedinkumbet?',
    answer:
      'Games like Book of 99, Starlight Princess, and Big Bass Bonanza offer RTPs above 96%, giving players better long-term winning odds.',
  },
  {
    question: 'Can I play Truedinkumbet slot games on my mobile?',
    answer:
      'Yes, all Truedinkumbet slot games are optimized for mobile and can be played on both Android and iOS devices through the Truedinkumbet app or mobile browser. Read our guide: Complete Guide to Download Truedinkumbet App',
  },
  {
    question: 'Is there a minimum bet amount for Truedinkumbet slots?',
    answer:
      'Most Truedinkumbet slot games allow minimum bets starting from as low as AUD 0.20, depending on the game provider.',
  },
  {
    question: 'What are progressive jackpot slots and how do they work?',
    answer:
      'Progressive jackpot slots pool a portion of each bet into a growing prize, which can be won randomly or through special bonus rounds.',
  },
  {
    question: 'Do Truedinkumbet slot games offer free spins?',
    answer:
      'Yes, Truedinkumbet slots come with built-in free spin features. Truedinkumbet also offers slots free spins promotions.',
  },
  {
    question: "What's the difference between high and low volatility slot games?",
    answer:
      'High volatility slots offer larger wins but less frequently, while low volatility slots provide smaller wins more often. Choose based on your risk preference and bankroll.',
  },
  {
    question: 'How do I claim free bonuses on Truedinkumbet slots?',
    answer:
      'You can claim free bonuses by registering an account and visiting the promotions page. Follow the terms listed for each promotion, such as minimum deposits or game eligibility, and the bonus will be credited to your account.',
  },
  {
    question: 'Is it safe to play and share personal information on Truedinkumbet?',
    answer:
      'Yes, Truedinkumbet uses advanced SSL encryption and follows strict data protection protocols to ensure your personal and financial details are kept secure at all times.',
  },
];

export default function SlotsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
