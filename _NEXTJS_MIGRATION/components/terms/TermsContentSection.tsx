"use client";

import { useState, ReactNode } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function TermsContentSection() {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      category: "General",
      items: [
        {
          id: "general-legal",
          question: "Is Truedinkumbet a legal and licensed online casino in Australia?",
          answer: (
            <p>
              Yes, Truedinkumbet is a legitimate and fully licensed online casino
              operating in Australia. Our platform is licensed and regulated by the
              Philippine Amusement and Gaming Corporation (PAGCOR), ensuring we meet
              the highest standards for player protection and fair gaming. We offer a
              state-of-the-art online casino experience with live dealer games, slot
              machines, sports betting, and much more. Australian players can enjoy
              thrilling online entertainment along with attractive promotions, rewards,
              and a comprehensive loyalty program.
            </p>
          ),
        },
        {
          id: "general-account",
          question: "How can I register for a Truedinkumbet account?",
          answer: (
            <p>
              Simply visit{" "}
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://truedinkumbet.com
              </a>
              . Once on the site, click the "Join Now" button and follow the
              on-screen instructions to create your account. The registration
              process is straightforward and quick, and you can be playing your
              favourite games within minutes.
            </p>
          ),
        },
        {
          id: "general-currencies",
          question: "What payment methods and currencies does Truedinkumbet accept?",
          answer: (
            <div>
              <p className="mb-4">
                Truedinkumbet accepts the following payment methods and currencies for
                Australian players:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Australian Dollar (AUD)</li>
                <li>Bitcoin (BTC)</li>
                <li>Ethereum (ETH)</li>
                <li>Bank Transfer</li>
                <li>E-wallet services</li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      category: "My Account",
      items: [
        {
          id: "account-open",
          question: "How do I open and set up my Truedinkumbet account?",
          answer: (
            <div className="space-y-4">
              <p>
                Truedinkumbet has made it quick and easy to register a new account. On
                the homepage of the Truedinkumbet website, click the "Join Now" button
                at the top-right corner. You will be directed to the registration form
                where you need to provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Username</strong> – Choose a unique username that you will
                  use to log in.
                </li>
                <li>
                  <strong>Password</strong> – Create a secure password (8-10 characters,
                  including at least two numbers). Always keep your password
                  confidential.
                </li>
                <li>
                  <strong>Full name</strong> – Enter your full legal name, which will be
                  used for payment verification purposes.
                </li>
                <li>
                  <strong>Date of Birth</strong> – Provide your date of birth (this is
                  used for age verification).
                </li>
                <li>
                  <strong>Phone Number</strong> – Supply a valid phone number. This
                  helps us offer better support and enhances your account security.
                </li>
                <li>
                  <strong>Currency</strong> – Select Australian Dollar (AUD) or your
                  preferred cryptocurrency for deposits, withdrawals, and wagering.
                </li>
              </ul>
              <p>
                Please note that you must confirm you are over 18 years of age to open
                an account. It is also required to accept our terms and conditions
                during registration.
              </p>
            </div>
          ),
        },
        {
          id: "account-password",
          question: "What should I do if I encounter a password error?",
          answer: (
            <p>
              If you experience a password error when trying to log in, first ensure
              that you have entered your password correctly. Remember that your
              password should be 8 to 10 characters long and include 2–3 numeric
              digits. If you have confirmed the password is correct but still cannot
              log in, please do not hesitate to contact our Customer Service via Live
              Chat for further assistance.
            </p>
          ),
        },
        {
          id: "account-security",
          question: "Is my personal information secure with Truedinkumbet?",
          answer: (
            <p>
              We take your privacy and security very seriously. Truedinkumbet operates
              under strict regulatory oversight and will not disclose your personal
              details to any third party unless legally required to do so by applicable
              laws, regulations, or a court order. All personal data you provide is
              protected using Secure Socket Layer (SSL) 128-bit encryption and is
              stored in secure environments that are not accessible to the public.
              Additionally, we maintain strict internal controls to ensure that only
              authorized personnel can access your information.
            </p>
          ),
        },
        {
          id: "account-maintain",
          question: "How can I ensure my account remains secure and valid?",
          answer: (
            <p>
              To maintain the security and validity of your account, please make sure
              all your profile details are accurate and up-to-date. This includes
              information under Update Profile, Banking Information, your Phone Number,
              and Email Address. Double-check that your contact number and email
              address are correct before submitting any verification requests. If you
              need to update your email or phone number prior to verification, kindly
              contact our Live Support team for assistance.
            </p>
          ),
        },
        {
          id: "account-deposit",
          question: "How do I deposit funds into my Truedinkumbet account?",
          answer: (
            <div className="space-y-4">
              <p>
                Funding your account is simple. Truedinkumbet offers multiple deposit
                methods suitable for Australian players:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  Bank Transfer – Transfer funds from your Australian bank account to
                  your Truedinkumbet account (quick and secure).
                </li>
                <li>
                  Cryptocurrency – Deposit using Bitcoin (BTC) or Ethereum (ETH) for
                  fast, anonymous transactions.
                </li>
                <li>
                  E-Wallet Services – Use supported e-wallet options for convenient
                  deposits.
                </li>
              </ul>
              <p>
                Truedinkumbet processes deposits quickly, ensuring that your funds are
                credited to your account as fast as possible. All deposits in AUD are
                available to play immediately once confirmed.
              </p>
            </div>
          ),
        },
        {
          id: "account-withdraw",
          question: "How do I withdraw my winnings from Truedinkumbet?",
          answer: (
            <p>
              Withdrawals at Truedinkumbet are designed to be swift and hassle-free.
              Australian players can withdraw via bank transfer or cryptocurrency. To
              request a withdrawal, navigate to the withdrawal section on the site and
              choose your preferred method. For bank transfers, enter the amount you
              wish to withdraw and provide your bank details. For cryptocurrency,
              provide your wallet address. Once submitted, your request will be
              processed and the approved amount will be transferred to your bank
              account or wallet. In some cases, we may require you to provide
              verification documents to ensure the security of the withdrawal process.
            </p>
          ),
        },
        {
          id: "account-withdrawal-time",
          question: "How long does it take to receive my withdrawn funds?",
          answer: (
            <p>
              After you submit a withdrawal request, it will undergo our verification
              and approval process. Once all required account details are verified, our
              efficient processing team will begin handling your request. Typically,
              internal processing takes around 25 minutes. After processing, the funds
              are released to your bank or wallet. Bank transfers usually appear within
              1-3 business days depending on your bank. Cryptocurrency withdrawals are
              typically faster, appearing within minutes to hours depending on network
              congestion.
            </p>
          ),
        },
        {
          id: "account-fees",
          question: "Are there any fees for deposits or withdrawals at Truedinkumbet?",
          answer: (
            <p>
              Truedinkumbet does not charge any fees for depositing to or withdrawing
              from your account. All deposit and withdrawal transactions from our side
              are free of charge. However, please be aware that your bank might impose
              their own transaction fees or service charges. These external fees are
              beyond Truedinkumbet's control and will not be covered by us. We
              recommend checking with your financial institution for details on any
              applicable charges.
            </p>
          ),
        },
        {
          id: "account-wallet",
          question: 'What does "wallet" mean on Truedinkumbet\'s platform?',
          answer: (
            <p>
              On Truedinkumbet, your funds are managed through a Main Wallet and
              separate Product Wallets. The Main Wallet holds your overall balance –
              this is the total amount of money you have available for withdrawal or
              for transferring into games. All deposits you make and any new winnings
              are credited into your Main Wallet. Product Wallets are specific to
              particular games or providers. If you want to play a certain type of
              game, you can transfer funds from your Main Wallet to the corresponding
              Product Wallet. This system allows you to manage your bankroll across
              different gaming products effectively.
            </p>
          ),
        },
      ],
    },
    {
      category: "Promotions",
      items: [
        {
          id: "promotions-join",
          question: "How do I claim Truedinkumbet's promotional bonuses?",
          answer: (
            <p>
              Truedinkumbet keeps members informed about the latest promotions through
              email and inbox notifications on your account. To participate in a
              promotion, you can click on the promotion notification sent to you, or
              simply visit our Promotions page on the website to see all current
              offers. Each promotion will have instructions on how to join or claim it.
              Be sure to read the terms and conditions for any promotion you're
              interested in, to ensure you meet the eligibility requirements. It's
              important to claim promotions within the valid period as instructed. If
              you have any questions about ongoing promotions or how to join them, feel
              free to contact our Customer Support for assistance.
            </p>
          ),
        },
      ],
    },
    {
      category: "Bonuses & Rewards",
      items: [
        {
          id: "rebates-what",
          question: "What bonuses and rewards does Truedinkumbet offer?",
          answer: (
            <p>
              Truedinkumbet offers various bonuses and rewards to members based on their
              gaming activity. These include welcome bonuses for new players, cashback
              rewards, free spins, and loyalty program benefits. Our rewards apply to
              specific categories of games (such as Live Casino, Sports betting, Slots)
              and are calculated based on your total amount wagered. The more you play
              on eligible games, the more bonuses and rewards you can earn. These are
              provided according to our promotion terms and conditions.
            </p>
          ),
        },
        {
          id: "rebates-how",
          question: "How do Truedinkumbet's reward programs work?",
          answer: (
            <p>
              Truedinkumbet's reward programs are calculated on a daily basis according
              to your betting activity. At the end of each day (cut-off time is
              11:59 PM Australian Eastern Time), Truedinkumbet's system totals up the amount you wagered
              on eligible games. Based on that daily total, a reward (as a percentage
              of your wagers, as defined by our reward scheme) is computed. The
              appropriate reward amount is then credited to your account the next day.
              For example, if you wager a significant amount on a given day, you will
              receive the corresponding reward the following day.
            </p>
          ),
        },
        {
          id: "rebates-turnover",
          question: "Is there a turnover requirement for bonus rewards?",
          answer: (
            <p>
              Turnover requirements vary depending on the specific bonus or promotion.
              For some rewards, there is no additional turnover requirement, meaning
              once you receive your bonus, it is yours to use or withdraw as you wish
              without needing to wager it further. For other promotions, specific terms
              apply. We recommend reading the terms and conditions for each promotion
              to understand any applicable requirements. If you have any doubts or need
              clarification, you can contact our Customer Service via Live Chat.
            </p>
          ),
        },
        {
          id: "rebates-check",
          question: "How do I check my bonuses and rewards?",
          answer: (
            <p>
              You can easily check your bonus and reward history through your account
              dashboard. After logging in, go to the "Account" section and click on
              "Bonuses" or "Rewards". Within your account, you will see entries
              detailing any bonuses and rewards credited to your account, including the
              amount and the activity it was based on. All daily rewards are credited
              to eligible accounts by 16:00 AEST each day for the previous day's play.
              If a promotion has a specific period, any rewards from that promotion will
              be credited on the schedule stated in the promotion's terms.
            </p>
          ),
        },
      ],
    },
    {
      category: "Games & Products",
      items: [
        {
          id: "products-gaming",
          question: "What gaming options are available at Truedinkumbet?",
          answer: (
            <div>
              <p className="mb-4">
                Truedinkumbet offers a wide range of gaming products to suit all types
                of Australian players. The available options include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Live Casino – Real dealers, real-time games (blackjack, roulette, baccarat)</li>
                <li>Slot Games – Hundreds of slots with various themes and jackpots</li>
                <li>Sports Betting – Bet on local and international sporting events</li>
                <li>Fishing Games – Interactive gaming experience</li>
                <li>Crypto Casino – Bitcoin and Ethereum gambling</li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      category: "Technical",
      items: [
        {
          id: "technical-login",
          question: "Why can't I log in to my Truedinkumbet account?",
          answer: (
            <p>
              If you are unable to log in to your Truedinkumbet account, please
              consider the following troubleshooting steps: First, ensure that you are
              accessing our website from Australia or a supported region. If you are in
              a supported region and still cannot log in, try clearing your browser's
              cache and cookies. After doing so, close your browser completely and then
              reopen it to attempt the login again. Double-check that you are entering
              the correct username and password. If you have tried these steps and still
              cannot log in, please contact Truedinkumbet's Customer Service via Live
              Chat. Our support team is available 24/7.
            </p>
          ),
        },
        {
          id: "technical-security",
          question: "How secure is the Truedinkumbet platform?",
          answer: (
            <div className="space-y-4">
              <p>
                We have implemented multiple layers of security to protect our platform
                and players' data. In particular, Truedinkumbet employs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Physical Security</strong>: Our servers are housed in highly
                  secure data center facilities with 24/7 monitoring. Only authorized
                  personnel with proper security clearance can access these locations.
                </li>
                <li>
                  <strong>Network Security</strong>: All servers are protected by robust
                  firewall systems and intrusion detection to guard against data
                  breaches and unauthorized access.
                </li>
                <li>
                  <strong>Data Encryption</strong>: All communication between your web
                  browser and our servers is encrypted using industry-standard SSL
                  protocols. This means any sensitive information (such as personal
                  details and transaction data) is securely transmitted and kept
                  confidential.
                </li>
              </ul>
              <p>
                These measures ensure that the Truedinkumbet platform is safe and that
                your data is well-protected at all times.
              </p>
            </div>
          ),
        },
        {
          id: "technical-compatibility",
          question: "What are the system requirements for Truedinkumbet?",
          answer: (
            <div className="space-y-4">
              <p>
                For the best experience on Truedinkumbet, we recommend using an
                up-to-date operating system and a modern web browser. Your display
                resolution should be set to at least 1024 × 768 to ensure the website
                displays optimally. We recommend using the latest versions of browsers
                such as Chrome, Firefox, Safari, or Edge for the smoothest performance.
              </p>
              <p>
                Truedinkumbet is fully optimized for mobile devices, so you can play
                your favourite games on smartphones and tablets. The platform works
                seamlessly on both iOS and Android devices, and all games are available
                in the mobile version.
              </p>
            </div>
          ),
        },
        {
          id: "technical-help",
          question: "What if I need further assistance or have more questions?",
          answer: (
            <p>
              If you have questions or encounter issues that are not addressed in this
              FAQ section, you can always reach out to us for help. Our Customer Service
              team is available 24/7 via Live Chat to assist you with any inquiries or
              problems. Whether you need more details on a specific topic or
              personalized support, we are here to provide you with additional
              information and guidance. Feel free to contact us at any time for further
              assistance.
            </p>
          ),
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions (FAQs)
        </h1>
        <p className="text-gray-600 mb-12">
          Find answers to common questions about Truedinkumbet Australia
        </p>

        <div className="space-y-8">
          {faqCategories.map((categoryGroup) => (
            <div key={categoryGroup.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categoryGroup.category}
              </h2>
              <div className="space-y-4">
                {categoryGroup.items.map((item) => {
                  const isExpanded = expandedSections[item.id] || false;

                  return (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </h3>
                        <span
                          className={`text-gray-600 transition-transform flex-shrink-0 inline-block text-lg`}
                          style={{
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transitionDuration: "200ms",
                          }}
                        >
                          ▼
                        </span>
                      </button>
                      {isExpanded && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <div className="text-gray-700 leading-relaxed">
                            {typeof item.answer === "string" ? (
                              <p>{item.answer}</p>
                            ) : (
                              item.answer
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> {new Date().getFullYear()}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            If you have any questions about these FAQs or need further assistance,
            please contact our Customer Service team via Live Chat or email. We're
            available 24/7 to help Australian players.
          </p>
        </div>
      </div>
    </section>
  );
}
