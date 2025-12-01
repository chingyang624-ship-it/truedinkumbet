export default function FishingFAQSection() {
  const faqs = [
    {
      question: "How do I play fishing games?",
      answer:
        "Fishing games are easy to play. Simply aim, shoot, and catch fish to win prizes. Each catch earns you points and rewards.",
    },
    {
      question: "What are the different fishing game types?",
      answer:
        "We offer various fishing game types with different themes, difficulty levels, and reward structures. Find your favorite and start playing!",
    },
    {
      question: "Can I win real money playing fishing games?",
      answer:
        "Yes! Our fishing games offer real money prizes. The more fish you catch, the more you can win.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Fishing Games FAQ
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
