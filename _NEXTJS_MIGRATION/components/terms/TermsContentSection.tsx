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
          question: "Is BK8 Legal in Asia?",
          answer: (
            <p>
              BK8 is a legitimate online casino operating in Asia, including
              countries such as Thailand, Malaysia, Vietnam, Indonesia, Cambodia,
              the Philippines, India, and Korea. Our platform is fully licensed
              and regulated by the Government of Curacao under the Master Gaming
              License (No. 365/JAZ). We offer a state-of-the-art online casino
              experience with live dealer games, slot machines, sports betting,
              Keno, lottery, and much more. Players can enjoy thrilling online
              entertainment along with attractive promotions, rewards, and a
              comprehensive loyalty program.
            </p>
          ),
        },
        {
          id: "general-account",
          question: "How can I open an account at BK8?",
          answer: (
            <p>
              Simply visit{" "}
              <a
                href="https://bk8mycasino.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://bk8mycasino.com
              </a>
              . Once on the site, click the "Join" button and follow the
              on-screen instructions to create your account. The registration
              process is straightforward and quick.
            </p>
          ),
        },
        {
          id: "general-currencies",
          question: "Which Currencies Does BK8 Accept?",
          answer: (
            <div>
              <p className="mb-4">
                BK8 accepts the following currencies for transactions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Indonesian Rupiah (IDR)</li>
                <li>Vietnamese Dong (VND)</li>
                <li>Malaysian Ringgit (MYR)</li>
                <li>Thai Baht (THB)</li>
                <li>US Dollar (USD)</li>
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
          question: "How to open your BK8 account?",
          answer: (
            <div className="space-y-4">
              <p>
                BK8 has made it quick and easy to register a new account. On the
                homepage of the BK8 website, click the "Join" button at the
                top-right corner. You will be directed to the registration form
                where you need to provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Username</strong> – Choose a unique username that you
                  will use to log in.
                </li>
                <li>
                  <strong>Password</strong> – Create a secure password (8-10
                  characters, including at least two numbers). Note that the
                  password field is not case-sensitive. Always keep your
                  password confidential.
                </li>
                <li>
                  <strong>Full name</strong> – Enter your full legal name, which
                  will be used for payment verification purposes.
                </li>
                <li>
                  <strong>Date of Birth</strong> – Provide your date of birth
                  (this is used for age verification).
                </li>
                <li>
                  <strong>Phone Number</strong> – Supply a valid phone number.
                  This helps us offer better support and enhances your account
                  security.
                </li>
                <li>
                  <strong>Currency</strong> – Select the currency you wish to
                  use for deposits, withdrawals, and wagering (from the
                  available currency options).
                </li>
              </ul>
              <p>
                Please note that you must confirm you are over 18 years of age
                to open an account. It is also required to accept our terms and
                conditions during registration.
              </p>
            </div>
          ),
        },
        {
          id: "account-password",
          question: "What should I do if I encounter a password error?",
          answer: (
            <p>
              If you experience a password error when trying to log in, first
              ensure that you have entered your password correctly. Remember
              that your password should be 8 to 10 characters long and include
              2–3 numeric digits. If you have confirmed the password is correct
              but still cannot log in, please do not hesitate to contact our
              Customer Service via Live Chat for further assistance.
            </p>
          ),
        },
        {
          id: "account-security",
          question: "Is my personal information secure with BK8?",
          answer: (
            <p>
              We take your privacy and security very seriously. BK8 operates
              under strict regulatory oversight and will not disclose your
              personal details to any third party unless legally required to do
              so by applicable laws, regulations, or a court order. We reserve
              the right to share necessary information with our payment
              processors and financial institutions solely for the purpose of
              processing transactions you request on our site. All personal data
              you provide is protected using Secure Socket Layer (SSL) 128-bit
              encryption and is stored in secure environments that are not
              accessible to the public. Additionally, we maintain strict
              internal controls to ensure that only authorized personnel can
              access your information.
            </p>
          ),
        },
        {
          id: "account-maintain",
          question: "How can I ensure my account remains secure and valid?",
          answer: (
            <p>
              To maintain the security and validity of your account, please make
              sure all your profile details are accurate and up-to-date. This
              includes information under Update Profile, Banking Information,
              your Phone Number, and Email Address. Double-check that your
              contact number and email address are correct before submitting any
              verification requests. If you need to update your email or phone
              number prior to verification, kindly contact our Live Support team
              for assistance. Keeping your account information current will help
              prevent issues and ensure smooth verification processes.
            </p>
          ),
        },
        {
          id: "account-deposit",
          question: "How do I deposit funds into my account?",
          answer: (
            <div className="space-y-4">
              <p>Funding your account is simple. BK8 offers the following deposit methods:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  Bank Transfer – Transfer funds from your bank account to your
                  BK8 account (a designated bank account will be provided for
                  local transfers).
                </li>
                <li>
                  E-Wallet Services – Use supported e-wallet options such as
                  Help2Pay or EeziePay to deposit funds.
                </li>
              </ul>
              <p>
                BK8 processes deposits quickly, ensuring that your funds are
                credited to your account as fast as possible. Please note that
                we do not accept deposits via cheque or bank draft (whether
                company or personal). Bank transfer deposits are only available
                in certain countries (currently Indonesia, Malaysia, Vietnam,
                Thailand, and select other regions in Asia). When you deposit
                via bank transfer, the funds will be added to your Main Wallet
                once our bank confirms receipt of the payment.
              </p>
            </div>
          ),
        },
        {
          id: "account-withdraw",
          question: "How do I withdraw funds from my account?",
          answer: (
            <p>
              Withdrawals at BK8 are designed to be swift and hassle-free.
              Currently, withdrawals are done via bank transfer for members in
              eligible countries. (Members from Thailand, Malaysia, Vietnam,
              Indonesia, Cambodia, the Philippines, India, and Korea can use
              this service.) To request a withdrawal, navigate to the withdrawal
              section on the site and choose the bank transfer option. Then,
              enter the amount you wish to withdraw and provide the necessary
              bank details (such as your bank name and your bank account
              number). Once submitted, your request will be processed and the
              approved amount will be transferred directly to your bank account.
              In some cases, we may require you to provide verification
              documents (for example, a valid ID or a recent bank statement) to
              ensure the security of the withdrawal process.
            </p>
          ),
        },
        {
          id: "account-withdrawal-time",
          question: "How long does it take to receive my funds after submitting a withdrawal?",
          answer: (
            <p>
              After you submit a withdrawal request, it will undergo our
              verification and approval process in accordance with BK8's
              withdrawal policies. Once all required account details are
              verified and any necessary information is provided, our efficient
              processing team will begin handling your request. Typically,
              internal processing takes around 25 minutes. After processing, the
              funds are released to your bank. The time it takes for the money
              to appear in your bank account will depend on your bank's
              processing speed and procedures. In general, you can expect the
              withdrawal to be completed shortly after our processing, though
              exact timing may vary by bank.
            </p>
          ),
        },
        {
          id: "account-fees",
          question: "Are there any fees for deposits or withdrawals?",
          answer: (
            <p>
              BK8 does not charge any fees for depositing to or withdrawing from
              your account. All deposit and withdrawal transactions from our side
              are free of charge. However, please be aware that your bank,
              e-wallet provider, or credit card company might impose their own
              transaction fees or service charges. These external fees are beyond
              BK8's control and will not be covered by us. We recommend checking
              with your financial institution for details on any applicable
              charges. (Please note that BK8 reserves the right to modify its
              policies in line with our terms and conditions, but we currently
              absorb all fees on our end.)
            </p>
          ),
        },
        {
          id: "account-wallet",
          question: 'What does "wallet" mean on BK8\'s platform?',
          answer: (
            <p>
              On BK8, your funds are managed through a Main Wallet and separate
              Product Wallets. The Main Wallet holds your overall balance – this
              is the total amount of money you have available for withdrawal or
              for transferring into games. All deposits you make and any new
              winnings are credited into your Main Wallet. Product Wallets, on
              the other hand, are specific to particular games or providers (for
              example, a wallet for slots, one for sportsbook, etc.). If you
              want to play a certain type of game, you can transfer funds from
              your Main Wallet to the corresponding Product Wallet for that game
              or provider. This system allows you to manage your bankroll across
              different gaming products. Any funds not in use in a specific game
              will remain in your Main Wallet, and you can move money between
              the Main Wallet and Product Wallets as needed.
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
          question: "How do I join a promotion?",
          answer: (
            <p>
              BK8 keeps members informed about the latest promotions through SMS
              and inbox notifications on your account. To participate in a
              promotion, you can click on the promotion notification sent to you,
              or simply visit our Promotions page on the website to see all
              current offers. Each promotion will have instructions on how to
              join or claim it. Be sure to read the terms and conditions for any
              promotion you're interested in, to ensure you meet the eligibility
              requirements. It's important to claim promotions within the valid
              period as instructed. If a promotion is not claimed before it
              expires, you will miss out on that offer and any associated
              benefits. If you have any questions about ongoing promotions or how
              to join them, feel free to contact our Customer Support for
              assistance.
            </p>
          ),
        },
      ],
    },
    {
      category: "Cash rebates",
      items: [
        {
          id: "rebates-what",
          question: "What are cash rebates?",
          answer: (
            <p>
              Cash rebates are a type of reward BK8 offers to members based on
              their wagering activity. In BK8's case, cash rebates apply to
              specific categories of games (such as Live Casino, Sports betting,
              Lottery, and Slots) and are calculated on your total amount wagered
              each day. In essence, the more you bet on eligible games in a
              given day, the more rebate bonus you can earn. These rebates are
              provided according to our promotion terms and conditions.
            </p>
          ),
        },
        {
          id: "rebates-how",
          question: "How do cash rebates work?",
          answer: (
            <p>
              Cash rebates are calculated and credited on a daily basis according
              to your betting turnover. At the end of each day (cut-off time is
              23:59:59 GMT+8), BK8's system totals up the amount you wagered on
              eligible games. Based on that daily total, a rebate (a percentage
              of your wagers, as defined by our rebate scheme) is computed. The
              appropriate rebate amount is then credited to your account the next
              day. For example, if you wager a significant amount on a given day,
              you will receive the corresponding cash rebate the following day,
              according to the rebate rate for that turnover amount.
            </p>
          ),
        },
        {
          id: "rebates-turnover",
          question: "Is there a turnover requirement to withdraw cash rebates?",
          answer: (
            <p>
              No, there is no additional turnover or rollover requirement to
              withdraw funds earned from cash rebates. This means that once you
              receive your rebate bonus, it is yours to use or withdraw as you
              wish without needing to wager it further. If you have any doubts or
              need clarification regarding withdrawing your rebates, you can
              contact our Customer Service via Live Chat at any time for
              assistance.
            </p>
          ),
        },
        {
          id: "rebates-check",
          question: "How do I check my rebates?",
          answer: (
            <p>
              You can easily check your cash rebate history through your account
              dashboard. After logging in, go to the "Deposit" section and click
              on History. Within your transaction history, find the
              Rebate/Cashback section and select the time frame or date of
              interest. There you will see entries detailing any cash rebates
              credited to your account, including the amount of the rebate and
              the turnover amount it was based on. All daily rebates are
              credited to eligible accounts before 16:00:00 (GMT+8) each day for
              the previous day's play. This means, for example, that any rebate
              you earn from your bets today will be credited by 4:00 PM (GMT+8)
              tomorrow. If a promotion has a specific period, any rebates from
              that promotion will be credited on the schedule stated in the
              promotion's terms.
            </p>
          ),
        },
      ],
    },
    {
      category: "Products",
      items: [
        {
          id: "products-gaming",
          question: "What gaming options are available on BK8?",
          answer: (
            <div>
              <p className="mb-4">
                BK8 offers a wide range of gaming products to suit all types of
                players. The available options include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://bk8mycasino.com/casino/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Live casino
                  </a>
                </li>
                <li>
                  <a
                    href="https://bk8mycasino.com/sports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    href="https://bk8mycasino.com/esports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    E-Sports
                  </a>
                </li>
                <li>
                  <a
                    href="https://bk8mycasino.com/fishing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Fishing
                  </a>
                </li>
                <li>
                  <a
                    href="https://bk8mycasino.com/slots/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Slot games
                  </a>
                </li>
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
          question: "Why can't I log in to my BK8 account?",
          answer: (
            <p>
              If you are unable to log in to your BK8 account, please consider
              the following troubleshooting steps: First, ensure that you are
              accessing our website from a country or region that is not
              restricted. If you are in a supported region and still cannot log
              in, try clearing your browser's cache and cookies. After doing so,
              close your browser completely and then reopen it to attempt the
              login again. Double-check that you are entering the correct
              username and password (remember that passwords should meet the
              required format and be entered exactly as created). If you have
              tried these steps and still cannot log in, please contact BK8's
              Customer Service via Live Chat. Our support team is available 24/7
              and will assist you in diagnosing and resolving the issue.
            </p>
          ),
        },
        {
          id: "technical-security",
          question: "How secure is the BK8 platform from a technical standpoint?",
          answer: (
            <div className="space-y-4">
              <p>
                We have implemented multiple layers of security to protect our
                platform and players' data. In particular, BK8 employs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Physical Security</strong>: Our servers are housed in
                  highly secure data center facilities. Only authorized
                  personnel with proper security clearance can access these
                  server locations.
                </li>
                <li>
                  <strong>Network Security</strong>: All servers are protected by
                  robust firewall systems to guard against data breaches and
                  unauthorized intrusions.
                </li>
                <li>
                  <strong>Data Encryption</strong>: All communication between
                  your web browser and our servers is encrypted. This means any
                  sensitive information (such as personal details and transaction
                  data) is securely transmitted and kept confidential.
                </li>
              </ul>
              <p>
                These measures ensure that the BK8 platform is safe and that
                your data is well-protected at all times.
              </p>
            </div>
          ),
        },
        {
          id: "technical-compatibility",
          question: "What are the system compatibility requirements for using BK8?",
          answer: (
            <div className="space-y-4">
              <p>
                For the best experience on BK8, we recommend using an up-to-date
                operating system and a modern web browser. Your display
                resolution should be set to at least 1024 × 768 to ensure the
                website displays optimally. Please note that older browsers (for
                example, Internet Explorer 8 or earlier) may not support some
                features of our site due to limited compatibility with newer web
                standards like HTML5 and CSS3. We also advise installing Adobe
                Flash Player version 9.0.115 or above if you plan to use
                features that rely on Flash. In general, using the latest
                version of browsers such as Chrome, Firefox, Safari, or a recent
                version of Internet Explorer/Edge will provide the smoothest
                performance on our platform.
              </p>
              <p>
                BK8 continuously works to improve platform compatibility and
                user experience. We apologize for any inconvenience these
                requirements may cause, and we are actively making transitions
                to updated technologies. Our team is dedicated to ensuring that
                as many users as possible can access BK8 without issues, and we
                appreciate your understanding as we implement these improvements.
              </p>
            </div>
          ),
        },
        {
          id: "technical-help",
          question: "What if I need information that isn't covered here?",
          answer: (
            <p>
              If you have questions or encounter issues that are not addressed
              in this FAQ section, you can always reach out to us for help. Our
              Customer Service team is available 24/7 via Live Chat to assist
              you with any inquiries or problems. Whether you need more details
              on a specific topic or personalized support, we are here to provide
              you with additional information and guidance. Feel free to contact
              us at any time for further assistance.
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
          Find answers to common questions about BK8
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
            If you have any questions about these FAQs or need further
            assistance, please contact our Customer Service team via Live Chat
            or email at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
