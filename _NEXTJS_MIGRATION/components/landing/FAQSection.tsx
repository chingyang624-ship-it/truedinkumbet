export default function FAQSection() {
  const faqs = [
    {
      question:
        "Is Truedinkumbet a legal and licensed online casino in Australia?",
      answer:
        "Yes, Truedinkumbet is fully licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR), ensuring a safe and secure gaming environment for Australian players.",
    },
    {
      question: "What payment methods does Truedinkumbet accept?",
      answer:
        "We accept a wide range of payment methods including credit cards, e-wallets, bank transfers, and cryptocurrencies like Bitcoin and USDT for maximum convenience.",
    },
    {
      question: "How can I withdraw my winnings from Truedinkumbet?",
      answer:
        "Withdrawals are easy and fast. Simply visit the cashier section, select your preferred withdrawal method, and your funds will be processed typically within 24-48 hours.",
    },
    {
      question: "Is my personal information safe on Truedinkumbet?",
      answer:
        "Absolutely. We use state-of-the-art SSL encryption to protect all your personal and financial information. Your data security is our top priority.",
    },
    {
      question: "What bonuses and promotions are available?",
      answer:
        "Truedinkumbet offers generous welcome bonuses, daily promotions, weekly rewards, and a VIP loyalty program with exclusive perks for our valued players.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our 24/7 customer support team is available via live chat, email, and phone to assist with any questions or issues you may have.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about Truedinkumbet
          </p>
        </div>

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
