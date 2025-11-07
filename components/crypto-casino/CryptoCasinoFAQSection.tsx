'use client';

import { useState } from 'react';

export default function CryptoCasinoFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is Truedinkumbet crypto casino legal?',
      answer: 'Yes, Truedinkumbet is fully licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR). We comply with all gaming regulations and provide safe, secure gaming for Australian players.',
    },
    {
      question: 'What cryptocurrencies can I use?',
      answer: 'We accept Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Litecoin (LTC), Dogecoin (DOGE), Ripple (XRP), and many other major cryptocurrencies.',
    },
    {
      question: 'How long do deposits take?',
      answer: 'Crypto deposits are usually instant. Funds appear in your account within seconds of confirmation on the blockchain.',
    },
    {
      question: 'What are the withdrawal limits?',
      answer: 'Withdrawals depend on your account status and verification level. Most withdrawals process within 24 hours.',
    },
    {
      question: 'Is my crypto casino account secure?',
      answer: 'We use industry-leading encryption, blockchain security, and cold wallet storage for all player funds. Your account is protected with two-factor authentication.',
    },
    {
      question: 'Can I play on mobile?',
      answer: 'Yes! Truedinkumbet crypto casino is fully optimized for mobile devices. Download our app or play directly from your browser on any device.',
    },
    {
      question: 'Do you offer responsible gaming tools?',
      answer: 'Absolutely. We provide deposit limits, session timeouts, self-exclusion options, and access to professional gambling addiction resources.',
    },
    {
      question: 'What customer support is available?',
      answer: 'Our 24/7 customer support team is available via live chat, email, and phone to assist with any questions or issues.',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold" style={{ color: '#1f2124' }}>
                  {faq.question}
                </h3>
                <span className="text-2xl font-bold" style={{ color: '#ff6500' }}>
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t" style={{ borderColor: '#e5e7eb' }}>
                  <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
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
