export default function LiveCasinoFAQSection() {
  const faqs = [
    {
      question: "What is live casino?",
      answer:
        "Live casino offers real-time gaming with actual dealers streamed to your device. Play games like roulette, blackjack, and baccarat with real people.",
    },
    {
      question: "Which providers offer live casino games?",
      answer:
        "Truedinkumbet features live games from top providers including Evolution Gaming, Pragmatic Live, and Microgaming.",
    },
    {
      question: "Can I interact with live dealers?",
      answer:
        "Yes! Live casino games feature real-time chat where you can interact with dealers and other players.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Live Casino FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="bg-white px-6 py-4 cursor-pointer hover:bg-gray-100 font-semibold text-gray-900 flex items-center justify-between">
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
