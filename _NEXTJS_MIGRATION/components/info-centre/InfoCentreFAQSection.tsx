export default function InfoCentreFAQSection() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Visit our website, click 'Join Now', fill in your details, and verify your account. You can start playing immediately!",
    },
    {
      question: "What documents do I need for verification?",
      answer:
        "Typically, you'll need a valid ID and proof of address. Our customer support team will guide you through the verification process.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Our 24/7 support team is available via live chat, email, and phone. Visit our contact page for more details.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Information Centre
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
