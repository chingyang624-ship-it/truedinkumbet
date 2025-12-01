export default function SlotsFAQSection() {
  const faqs = [
    {
      question: "What slot games are available at Truedinkumbet?",
      answer:
        "We offer a wide variety of slot games including classic slots, video slots, and progressive jackpot slots from top providers like Pragmatic Play, BNG, and many more.",
    },
    {
      question: "What is the RTP of slot games?",
      answer:
        "RTP (Return to Player) varies by game, typically ranging from 92% to 98%. Check individual game details for specific RTP information.",
    },
    {
      question: "Can I play slots on mobile devices?",
      answer:
        "Yes! All our slot games are fully optimized for mobile devices including smartphones and tablets. Play anytime, anywhere.",
    },
    {
      question: "Are there free slot games?",
      answer:
        "Yes, many slot games offer a demo or free play mode where you can practice before betting real money.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Slots FAQ
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
