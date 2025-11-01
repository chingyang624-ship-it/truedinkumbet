import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is BK8 a trusted slot game Malaysia site?',
    answer:
      'Yes, BK8 is fully licensed and regulated, offering only certified slot games from reputable providers, making it a trusted slot game Malaysia platform.',
  },
  {
    question: 'What are the best slot games to win real money on BK8?',
    answer:
      'Top picks include Gates of Olympus, Sweet Bonanza, Candy Bonanza, and Mega Moolah, all known for high payout potential and exciting bonus features.',
  },
  {
    question: 'Which slot games have the highest RTP on BK8?',
    answer:
      'Games like Book of 99, Starlight Princess, and Big Bass Bonanza offer RTPs above 96%, giving players better long-term winning odds.',
  },
  {
    question: 'Can I play BK8 slot games on my mobile?',
    answer:
      'Yes, all BK8 slot games are optimized for mobile and can be played on both Android and iOS devices through the BK8 app or mobile browser. Read guide: Complete Guide to Download BK8 App',
  },
  {
    question: 'Is there a minimum bet amount for BK8 slots?',
    answer:
      'Most BK8 slot games allow minimum bets starting from as low as RM0.20, depending on the game provider.',
  },
  {
    question: 'What are progressive jackpot slots and how do they work?',
    answer:
      'Progressive jackpot slots pool a portion of each bet into a growing prize, which can be won randomly or through special bonus rounds.',
  },
  {
    question: 'Do BK8 slot games offer free spins?',
    answer:
      'Yes, BK8 slots come with built-in free spin features. BK8 also offers 188 slots free spins promotions.',
  },
  {
    question: "What's the difference between high and low volatility slot games?",
    answer:
      'High volatility slots offer bigger but less frequent wins, while low volatility games pay smaller amounts more regularly.',
  },
  {
    question: 'Can players try slots for free?',
    answer:
      'Yes, most online slot game titles at BK8 offer demo mode, allowing players to test the game before betting real money.',
  },
  {
    question: 'How do I know if a BK8 slot game is fair?',
    answer:
      'All BK8 slots use RNG (Random Number Generator) technology and are audited by independent labs to ensure fair and unbiased outcomes.',
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
