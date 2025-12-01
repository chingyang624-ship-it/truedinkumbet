export default function CryptoCasinoFAQSection() {
  const faqs = [
    {
      question: "What cryptocurrencies are accepted?",
      answer:
        "We accept Bitcoin (BTC) and USDT (Tether). Both provide fast and secure transactions.",
    },
    {
      question: "Why use cryptocurrency?",
      answer:
        "Cryptocurrencies offer faster transactions, lower fees, and enhanced privacy compared to traditional payment methods.",
    },
    {
      question: "Is cryptocurrency gambling safe?",
      answer:
        "Yes! All cryptocurrency transactions are secured with blockchain technology, and our casino is licensed and regulated.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Crypto Casino FAQ
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
