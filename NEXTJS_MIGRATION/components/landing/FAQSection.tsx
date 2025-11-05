'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    { question: 'Is Truedinkumbet safe?', answer: 'Yes, we are licensed by PAGCOR and use industry-leading security.' },
    { question: 'How do I withdraw my winnings?', answer: 'You can withdraw via bank transfer, e-wallet, or cryptocurrency.' },
    { question: 'What is the minimum deposit?', answer: 'The minimum deposit is $10 AUD.' },
    { question: 'Can I play on mobile?', answer: 'Yes, we have a fully optimized mobile app and website.' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
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
                  <p style={{ color: '#6b7280' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
