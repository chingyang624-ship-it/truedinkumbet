import { useState } from 'react';

export default function FishingFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What are the best fishing games at BK8?',
      answer: 'Top titles include Fishing War, Fishing God, Happy Fishing, and Fishing Treasure—each offering unique features and bonus modes.',
    },
    {
      question: 'Is it safe to play fishing games online?',
      answer: 'Yes. BK8 is a licensed, secure platform that supports Malaysian players with encrypted transactions and verified RNG games.',
    },
    {
      question: 'Which provider has the highest-paying fishing games?',
      answer: 'Spadegaming\'s Fishing God and FastSpin\'s Fishing Treasure are known for offering big multipliers and jackpot potential.',
    },
    {
      question: 'Can I play fishing games on desktop and mobile?',
      answer: 'Absolutely. All fishing games at BK8 are optimized for both mobile app and desktop play, with responsive design and touchscreen controls.',
    },
    {
      question: 'Are fishing games based on luck or skill?',
      answer: 'Fishing games are a mix of both timing, aim, and cannon selection influence your success, but RNG elements still govern outcomes.',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: '#1f2124' }}
        >
          FAQs
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
