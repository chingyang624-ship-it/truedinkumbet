"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Truedinkumbet a legal and licensed online casino in Australia?",
    answer:
      "Yes, Truedinkumbet is fully licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR), ensuring a safe and secure gaming environment for Australian players. We hold certifications from BMM Testlabs and Gaming Laboratories International (GLI), ensuring fair play and secure operations.",
  },
  {
    question: "What types of casino games can I play on Truedinkumbet Australia?",
    answer:
      "Truedinkumbet offers a wide variety of games including sports betting, live casino games (blackjack, baccarat, roulette), online slots, esports betting, fishing games, and lottery. All games are provided by certified and trusted developers.",
  },
  {
    question: "How do I register for a Truedinkumbet account?",
    answer:
      "Registering is simple and takes just a few minutes. Visit our website, click 'Join Now', fill in your personal details, verify your email address, and you're ready to start playing. You'll also need to provide some identification for account verification.",
  },
  {
    question: "How can I deposit money into my Truedinkumbet account?",
    answer:
      "Truedinkumbet accepts multiple deposit methods including e-wallets, online banking, bank transfers, and cryptocurrencies (Bitcoin, Tether USDT, Ethereum). Simply log in to your account, navigate to 'Deposit', select your preferred payment method, and follow the instructions.",
  },
  {
    question: "What are the withdrawal methods and how long do they take?",
    answer:
      "Truedinkumbet offers various withdrawal methods including e-wallets, bank transfers, and cryptocurrencies. Most withdrawals are processed within 24-48 hours. The exact timeframe depends on your chosen withdrawal method and bank processing times.",
  },
  {
    question: "Is there a Truedinkumbet mobile app?",
    answer:
      "Yes, Truedinkumbet offers a dedicated mobile app available for both Android and iOS devices. The app provides a seamless betting and gaming experience with all features available on desktop.",
  },
  {
    question: "How Do I Claim the Truedinkumbet Casino Free Bonus?",
    answer:
      "New players can claim the welcome bonus automatically upon registration or after making their first deposit. The bonus typically includes a deposit match and free spins on selected slots. Check the promotions page for current bonus terms and conditions.",
  },
  {
    question: "Is it safe to play and share personal information on Truedinkumbet?",
    answer:
      "Absolutely. Truedinkumbet uses SSL encryption and advanced data protection measures to safeguard all transactions and personal information. We are fully compliant with responsible gambling frameworks and undergo regular audits by independent testing agencies.",
  },
  {
    question: "What is the minimum deposit amount to start playing?",
    answer:
      "The minimum deposit amount at Truedinkumbet is AUD 10 (or equivalent in other currencies). This low minimum ensures that players of all budgets can enjoy our games and services.",
  },
  {
    question: "How does Truedinkumbet ensure fair play and game integrity?",
    answer:
      "Truedinkumbet uses Random Number Generator (RNG) technology certified by Gaming Laboratories International (GLI) to ensure fair play. All games are regularly audited, and we maintain the highest standards of game integrity and player protection.",
  },
  {
    question: "Which online casino is the best in Australia?",
    answer:
      "Truedinkumbet is considered one of the best online casinos in Australia because it offers a wide range of games, fast payments, and strong security. Many players choose Truedinkumbet for its trusted reputation and local support services tailored to Australian players.",
  },
  {
    question: "How to win in Online Casino Australia?",
    answer:
      "To improve your chances of winning at Truedinkumbet, choose our trusted platform, set a budget before playing, and learn the rules of each game. Playing games with high return-to-player (RTP) rates and using bonuses wisely can also help increase your winnings.",
  },
  {
    question: "Is Truedinkumbet Legal in Australia?",
    answer:
      "Yes. Truedinkumbet operates with licenses from PAGCOR (Philippine Amusement and Gaming Corporation), making it legal for Australian players. Our platform is regulated and certified by multiple international gaming authorities, ensuring compliance with responsible gambling standards.",
  },
  {
    question: "Is it safe to play at Truedinkumbet?",
    answer:
      "It is safe to play at Truedinkumbet because we use strong security systems, fast payment methods, and are licensed by reputable authorities. Players should always verify our licenses and read reviews to ensure you're playing at a reliable and secure platform.",
  },
  {
    question: "What is a Welcome Bonus and How can I claim it?",
    answer:
      "A Welcome Bonus is a special offer for new players who join Truedinkumbet. To claim it, create an account, make your first deposit, and follow the steps shown on the promotions page. The bonus often includes extra money or free spins to help you start playing.",
  },
  {
    question: "How can I deposit or withdraw from Truedinkumbet?",
    answer:
      "To deposit into your Truedinkumbet account, log in, go to the cashier section, choose your payment method, enter the amount, and confirm the transaction. To withdraw, select 'Withdraw,' enter your details and amount, and follow the steps. Truedinkumbet supports e-wallets, bank transfers, and cryptocurrencies for fast and secure payments.",
  },
  {
    question: "Have You Truedinkumbet?",
    answer:
      "You must have heard about Truedinkumbet in social media or advertisements. Truedinkumbet is designed to help you get various benefits and promotions. The registration account and deposit system can be done on the official website. There are different types of casino games that are welcoming to you at Truedinkumbet. Let's start the online casino journey with Truedinkumbet.",
  },
  {
    question: "What is the Truedinkumbet APK and how do I download it?",
    answer:
      "The Truedinkumbet APK is the Android app file that lets you install the Truedinkumbet mobile casino directly on your phone. To download it, visit the official Truedinkumbet website, find the mobile app section, and follow the steps to install the APK safely. The APK offers faster access to games and smoother performance on Android devices.",
  },
  {
    question: "What is Truedinkumbet alternative link and how can I access it?",
    answer:
      "Truedinkumbet alternative links help players access the platform if the main website is blocked or unavailable. To use an alternative link, visit trusted Truedinkumbet sources or contact our customer service to get safe and updated alternative links for reliable access.",
  },
  {
    question: "How can I download the Truedinkumbet App?",
    answer:
      "To download the Truedinkumbet App, go to the official Truedinkumbet website and look for the mobile app section. Choose either the Android APK or iOS download link and follow the steps to install the app. The Truedinkumbet App offers smooth gameplay and easy access to casino features on mobile devices.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
