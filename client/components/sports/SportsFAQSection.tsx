import { useState } from 'react';

export default function SportsFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What sports can I bet on using Truedinkumbet?',
      answer: 'Truedinkumbet offers betting on football, basketball, tennis, badminton, boxing, cricket, rugby, horse racing—among many others.',
    },
    {
      question: 'How do I deposit and withdraw for sports betting?',
      answer: 'You can deposit via local bank transfer, DuitNow, and e-wallets. Withdrawals are fast and processed within minutes after verification.',
    },
    {
      question: 'Which sportsbook provider has the best odds?',
      answer: 'Each provider has its strengths, but SBOBET and CMD368 are known for offering highly competitive odds, especially for football and cricket.',
    },
    {
      question: 'Can I place live bets during matches?',
      answer: 'Absolutely. Truedinkumbet supports in-play betting on most major sports, allowing you to wager while the game is still happening.',
    },
    {
      question: 'Are there any Truedinkumbet sports promotion offers?',
      answer: 'Yes, Truedinkumbet offers a range of sportsbook promotions, including the popular "You Play, We Pay" bonus, which gives players cashback on losses for selected sports bets. Other promos include welcome bonuses, risk-free bets, accumulator boosters, and cashback on major events like football and horse racing.',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              className="rounded-lg border"
              style={{ borderColor: '#d5d8dc' }}
            >
              <summary
                className="cursor-pointer p-4 flex justify-between items-center"
                style={{
                  backgroundColor: openIndex === index ? '#f9fafb' : 'transparent',
                  color: '#1f2124',
                }}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {index === openIndex ? '−' : '+'}
                </span>
              </summary>
              <div
                className="p-4"
                style={{
                  backgroundColor: '#f9fafb',
                  borderTop: '1px solid #d5d8dc',
                }}
              >
                <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
