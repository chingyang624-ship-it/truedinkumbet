"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Is Truedinkumbet a legal and licensed online casino in Australia?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by a recognized international gaming authority. The platform operates legally and adheres to strict standards for security, fairness, and responsible gaming.",
  },
  {
    question: "Is Truedinkumbet a licensed and regulated online casino?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros (License No. ALSI-202504032-FI2). We also hold certifications from BMM Testlabs, iTech Labs, and Gaming Laboratories International (GLI), ensuring fair play and secure operations.",
  },
  {
    question:
      "What types of casino games can I play on Truedinkumbet Australia?",
    answer:
      "Truedinkumbet offers a wide variety of games, including live casino tables, online slots, sports betting, eSports betting, fishing games, and lottery. All games are powered by trusted and reputable providers.",
  },
  {
    question: "What games can I play at Truedinkumbet?",
    answer:
      "Truedinkumbet offers a wide variety of games including sports betting, live casino games (blackjack, baccarat, roulette), online slots, esports betting, fishing games, and lottery. All games are provided by certified and trusted developers.",
  },
  {
    question: "How do I register for a Truedinkumbet account?",
    answer:
      'To register, visit the official Truedinkumbet Australia website, click on the "Join Now" or "Register" button, fill out the required information, and submit your registration. Once verified, you can log in and start playing.',
  },
  {
    question: "How can I deposit money into my Truedinkumbet account?",
    answer:
      "Deposits can be made via local bank transfers, e-wallets, and cryptocurrencies. Simply log in, go to the cashier or wallet section, choose your preferred method, and follow the instructions.",
  },
  {
    question: "What payment methods does Truedinkumbet accept?",
    answer:
      "Truedinkumbet accepts multiple payment methods including e-wallets, online banking with major Australian banks, and cryptocurrencies (Bitcoin, Tether USDT, Ethereum).",
  },
  {
    question: "What are the withdrawal methods and how long do they take?",
    answer:
      "Withdrawals can be made via local bank transfers or e-wallets. Processing time is typically within 15 minutes to a few hours, depending on the payment method and bank verification.",
  },
  {
    question: "How long do withdrawals take at Truedinkumbet?",
    answer:
      "Truedinkumbet processes 92% of withdrawals within 15 minutes, which is faster than most competing platforms. We prioritize quick and secure payouts to ensure you receive your winnings promptly.",
  },
  {
    question: "Is there a Truedinkumbet mobile app?",
    answer:
      "Yes, Truedinkumbet has a dedicated mobile app available for both Android and iOS devices. It offers full access to games, promotions, and account management features for on-the-go convenience.",
  },
  {
    question: "What is the Truedinkumbet Welcome Bonus?",
    answer:
      "New players can enjoy the 288% 'Have You Truedinkumbet?' Welcome Bonus, offering up to AUD2,880 with a 35x turnover requirement. Members also receive 188 free spins on selected slots and access to seasonal promotions.",
  },
  {
    question: "How Do I Claim the Truedinkumbet Casino Free Bonus?",
    answer:
      "You can claim free bonuses by registering an account and visiting the promotions page. Follow the terms listed for each promotion, such as minimum deposits or game eligibility, and the bonus will be credited to your account.",
  },
  {
    question:
      "Is it safe to play and share personal information on Truedinkumbet?",
    answer:
      "Yes, Truedinkumbet uses advanced SSL encryption and follows strict data protection protocols to ensure your personal and financial details are kept secure at all times.",
  },
  {
    question: "Is Truedinkumbet safe and secure?",
    answer:
      "Absolutely. Truedinkumbet uses SSL encryption and advanced data protection measures to safeguard all transactions and personal information. We are fully compliant with responsible gambling frameworks and undergo regular audits by independent testing agencies.",
  },
  {
    question: "What is the minimum deposit amount to start playing?",
    answer:
      "The minimum deposit amount varies slightly depending on the payment method, but generally starts from as low as AUD20, making it accessible to all players.",
  },
  {
    question: "How does Truedinkumbet ensure fair play and game integrity?",
    answer:
      "Truedinkumbet works with certified game providers and undergoes regular audits by independent testing agencies. All random number generators are certified to ensure fair and unpredictable game outcomes.",
  },
  {
    question: "What makes Truedinkumbet different from other online casinos?",
    answer:
      "Truedinkumbet stands out with higher RTP rates, faster withdrawals (92% processed in under 15 minutes), exclusive promotions, wider sportsbook coverage, and strong security measures. We are certified by multiple international gaming authorities and prioritize player satisfaction above all.",
  },
  {
    question: "How do I contact Truedinkumbet customer support?",
    answer:
      "Truedinkumbet provides 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or concerns.",
  },
  {
    question: "Can I play Truedinkumbet games for free?",
    answer:
      "Yes, many Truedinkumbet games offer demo or free play modes, allowing you to try them out before wagering real money. This is a great way to learn game mechanics and develop strategies.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
