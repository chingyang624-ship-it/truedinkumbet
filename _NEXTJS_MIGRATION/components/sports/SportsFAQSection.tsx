export default function SportsFAQSection() {
  const faqs = [
    {
      question: "What sports can I bet on at Truedinkumbet?",
      answer:
        "We offer betting on a wide range of sports including football, basketball, tennis, cricket, and many more. Check our sportsbook for the full list.",
    },
    {
      question: "What types of bets are available?",
      answer:
        "We offer various bet types including single bets, accumulators, live betting, and many more options to suit your betting style.",
    },
    {
      question: "Can I live bet on sports events?",
      answer:
        "Yes! Our live betting feature allows you to place bets on ongoing sporting events with real-time odds updates.",
    },
    {
      question: "How are winnings calculated?",
      answer:
        "Winnings are calculated based on your bet amount and the odds at the time of placement. Accumulators multiply the odds of all selections.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Sports Betting FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="bg-gray-50 px-6 py-4 cursor-pointer hover:bg-gray-100 font-semibold text-gray-900 flex items-center justify-between">
                {faq.question}
                <span className="text-orange-500">+</span>
              </summary>
              <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
