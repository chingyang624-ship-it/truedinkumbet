import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function InfoCentreFAQSection() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'General',
      items: [
        {
          question: 'Is Truedinkumbet Legal?',
          answer: 'Truedinkumbet is a legitimate online casino operating globally. Our platform is fully licensed and regulated by the Government of Curacao under the Master Gaming License. We offer a state-of-the-art online casino experience with live dealer games, slot machines, sports betting, and much more. Players can enjoy thrilling online entertainment along with attractive promotions, rewards, and a comprehensive loyalty program.'
        },
        {
          question: 'How can I open an account at Truedinkumbet?',
          answer: 'Simply visit our website and click the "Join" button. Follow the on-screen instructions to create your account. The registration process is straightforward and quick.'
        },
        {
          question: 'Which Currencies Does Truedinkumbet Accept?',
          answer: (
            <div>
              <p className="mb-4">Truedinkumbet accepts the following currencies for transactions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Australian Dollar (AUD)</li>
                <li>US Dollar (USD)</li>
                <li>Bitcoin (BTC)</li>
                <li>Ethereum (ETH)</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: 'My Account',
      items: [
        {
          question: 'How to open your Truedinkumbet account?',
          answer: (
            <div>
              <p className="mb-4">Truedinkumbet has made it quick and easy to register a new account. On the homepage of the Truedinkumbet website, click the "Join" button at the top-right corner. You will be directed to the registration form where you need to provide:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Username</strong> – Choose a unique username that you will use to log in.</li>
                <li><strong>Password</strong> – Create a secure password (8-10 characters, including at least two numbers). Note that the password field is not case-sensitive. Always keep your password confidential.</li>
                <li><strong>Full name</strong> – Enter your full legal name, which will be used for payment verification purposes.</li>
                <li><strong>Date of Birth</strong> – Provide your date of birth (this is used for age verification).</li>
                <li><strong>Phone Number</strong> – Supply a valid phone number. This helps us offer better support and enhances your account security.</li>
                <li><strong>Currency</strong> – Select the currency you wish to use for deposits, withdrawals, and wagering (from the available currency options).</li>
              </ul>
              <p className="mt-4">Please note that you must confirm you are over 18 years of age to open an account. It is also required to accept our terms and conditions during registration.</p>
            </div>
          )
        },
        {
          question: 'What should I do if I encounter a password error?',
          answer: 'If you experience a password error when trying to log in, first ensure that you have entered your password correctly. Remember that your password should be 8 to 10 characters long and include 2–3 numeric digits. If you have confirmed the password is correct but still cannot log in, please do not hesitate to contact our Customer Service via Live Chat for further assistance.'
        },
        {
          question: 'Is my personal information secure with Truedinkumbet?',
          answer: 'We take your privacy and security very seriously. Truedinkumbet operates under strict regulatory oversight and will not disclose your personal details to any third party unless legally required to do so by applicable laws, regulations, or a court order. We reserve the right to share necessary information with our payment processors and financial institutions solely for the purpose of processing transactions you request on our site. All personal data you provide is protected using Secure Socket Layer (SSL) 128-bit encryption and is stored in secure environments that are not accessible to the public. Additionally, we maintain strict internal controls to ensure that only authorized personnel can access your information.'
        },
        {
          question: 'How can I ensure my account remains secure and valid?',
          answer: 'To maintain the security and validity of your account, please make sure all your profile details are accurate and up-to-date. This includes information under Update Profile, Banking Information, your Phone Number, and Email Address. Double-check that your contact number and email address are correct before submitting any verification requests. If you need to update your email or phone number prior to verification, kindly contact our Live Support team for assistance. Keeping your account information current will help prevent issues and ensure smooth verification processes.'
        },
        {
          question: 'How do I deposit funds into my account?',
          answer: (
            <div>
              <p className="mb-4">Funding your account is simple. Truedinkumbet offers the following deposit methods:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Bank Transfer – Transfer funds from your bank account to your Truedinkumbet account (a designated bank account will be provided for local transfers).</li>
                <li>E-Wallet Services – Use supported e-wallet options to deposit funds.</li>
                <li>Cryptocurrency – Bitcoin, Ethereum, and other supported digital currencies.</li>
              </ul>
              <p>Truedinkumbet processes deposits quickly, ensuring that your funds are credited to your account as fast as possible. Please note that we do not accept deposits via cheque or bank draft. Bank transfer deposits are only available in certain countries. When you deposit via bank transfer, the funds will be added to your Main Wallet once our bank confirms receipt of the payment.</p>
            </div>
          )
        },
        {
          question: 'How do I withdraw funds from my account?',
          answer: 'Withdrawals at Truedinkumbet are designed to be swift and hassle-free. Withdrawals are done via bank transfer or cryptocurrency transfer for members in eligible countries. To request a withdrawal, navigate to the withdrawal section on the site and choose your preferred method. Then, enter the amount you wish to withdraw and provide the necessary details. Once submitted, your request will be processed and the approved amount will be transferred directly to your bank account or wallet. In some cases, we may require you to provide verification documents (for example, a valid ID or a recent bank statement) to ensure the security of the withdrawal process.'
        },
        {
          question: 'How long does it take to receive my funds after submitting a withdrawal?',
          answer: 'After you submit a withdrawal request, it will undergo our verification and approval process in accordance with Truedinkumbet\'s withdrawal policies. Once all required account details are verified and any necessary information is provided, our efficient processing team will begin handling your request. Typically, internal processing takes around 25 minutes. After processing, the funds are released to your bank. The time it takes for the money to appear in your bank account will depend on your bank\'s processing speed and procedures. In general, you can expect the withdrawal to be completed shortly after our processing, though exact timing may vary by bank.'
        },
        {
          question: 'Are there any fees for deposits or withdrawals?',
          answer: 'Truedinkumbet does not charge any fees for depositing to or withdrawing from your account. All deposit and withdrawal transactions from our side are free of charge. However, please be aware that your bank, e-wallet provider, or cryptocurrency exchange might impose their own transaction fees or service charges. These external fees are beyond Truedinkumbet\'s control and will not be covered by us. We recommend checking with your financial institution for details on any applicable charges.'
        },
        {
          question: 'What does "wallet" mean on Truedinkumbet\'s platform?',
          answer: 'On Truedinkumbet, your funds are managed through a Main Wallet and separate Product Wallets. The Main Wallet holds your overall balance – this is the total amount of money you have available for withdrawal or for transferring into games. All deposits you make and any new winnings are credited into your Main Wallet. Product Wallets, on the other hand, are specific to particular games or providers. If you want to play a certain type of game, you can transfer funds from your Main Wallet to the corresponding Product Wallet for that game. This system allows you to manage your bankroll across different gaming products. Any funds not in use in a specific game will remain in your Main Wallet, and you can move money between the Main Wallet and Product Wallets as needed.'
        }
      ]
    },
    {
      title: 'Promotions',
      items: [
        {
          question: 'How do I join a promotion?',
          answer: 'Truedinkumbet keeps members informed about the latest promotions through SMS and inbox notifications on your account. To participate in a promotion, you can click on the promotion notification sent to you, or simply visit our Promotions page on the website to see all current offers. Each promotion will have instructions on how to join or claim it. Be sure to read the terms and conditions for any promotion you\'re interested in, to ensure you meet the eligibility requirements. It\'s important to claim promotions within the valid period as instructed. If a promotion is not claimed before it expires, you will miss out on that offer and any associated benefits. If you have any questions about ongoing promotions or how to join them, feel free to contact our Customer Support for assistance.'
        }
      ]
    },
    {
      title: 'Cash rebates',
      items: [
        {
          question: 'What are cash rebates?',
          answer: 'Cash rebates are a type of reward Truedinkumbet offers to members based on their wagering activity. In Truedinkumbet\'s case, cash rebates apply to specific categories of games and are calculated on your total amount wagered each day. In essence, the more you bet on eligible games in a given day, the more rebate bonus you can earn. These rebates are provided according to our promotion terms and conditions.'
        },
        {
          question: 'How do cash rebates work?',
          answer: 'Cash rebates are calculated and credited on a daily basis according to your deposits amount. At the end of each day (cut-off time is 23:59:59 GMT+10), Truedinkumbet\'s system totals up the amount you wagered on eligible games. Based on that daily total, a rebate (a percentage of your wagers, as defined by our rebate scheme) is computed. The appropriate rebate amount is then credited to your account the next day. For example, if you wager a significant amount on a given day, you will receive the corresponding cash rebate the following day, according to the rebate rate for that turnover amount.'
        },
        {
          question: 'Is there a turnover requirement to withdraw cash rebates?',
          answer: 'Yes, there is a additional rollover requirement to withdraw funds earned from cash rebates. Once you receive your rebate bonus, it will be subject to a 3x rollover requirement before withdrawal. The maximum cashout from this rebate is limited to AUD 1,000. If you have any questions or need clarification, please contact our Customer Service via Live Chat at any time for assistance.'
        },
        {
          question: 'How do I check my rebates?',
          answer: 'You can easily check your cash rebate history through your account dashboard. After logging in, go to the "History" section. Within your transaction history, find the Rebate/Cashback section and select the time frame or date of interest. There you will see entries detailing any cash rebates credited to your account, including the amount of the rebate and the turnover amount it was based on. All daily rebates are credited to eligible accounts before 00:00:00 (GMT+10) each day for the previous day\'s play. This means, for example, that any rebate you earn from your bets today will be credited by 00:00 AM (GMT+10) tomorrow. If a promotion has a specific period, any rebates from that promotion will be credited on the schedule stated in the promotion\'s terms.'
        }
      ]
    },
    {
      title: 'Products',
      items: [
        {
          question: 'What gaming options are available on Truedinkumbet?',
          answer: (
            <div>
              <p className="mb-4">Truedinkumbet offers a wide range of gaming products to suit all types of players. The available options include:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Live Casino</li>
                <li>Sports Betting</li>
                <li>Esports</li>
                <li>Fishing Games</li>
                <li>Slot Games</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: 'Technical',
      items: [
        {
          question: 'Why can\'t I log in to my Truedinkumbet account?',
          answer: 'If you are unable to log in to your Truedinkumbet account, please consider the following troubleshooting steps: First, ensure that you are accessing our website from a country or region that is not restricted. If you are in a supported region and still cannot log in, try clearing your browser\'s cache and cookies. After doing so, close your browser completely and then reopen it to attempt the login again. Double-check that you are entering the correct username and password (remember that passwords should meet the required format and be entered exactly as created). If you have tried these steps and still cannot log in, please contact Truedinkumbet\'s Customer Service via Live Chat. Our support team is available 24/7 and will assist you in diagnosing and resolving the issue.'
        },
        {
          question: 'How secure is the Truedinkumbet platform from a technical standpoint?',
          answer: (
            <div>
              <p className="mb-4">We have implemented multiple layers of security to protect our platform and players\' data. In particular, Truedinkumbet employs:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>Physical Security</strong>: Our servers are housed in highly secure data center facilities. Only authorized personnel with proper security clearance can access these server locations.</li>
                <li><strong>Network Security</strong>: All servers are protected by robust firewall systems to guard against data breaches and unauthorized intrusions.</li>
                <li><strong>Data Encryption</strong>: All communication between your web browser and our servers is encrypted. This means any sensitive information (such as personal details and transaction data) is securely transmitted and kept confidential.</li>
              </ul>
              <p>These measures ensure that the Truedinkumbet platform is safe and that your data is well-protected at all times.</p>
            </div>
          )
        },
        {
          question: 'What are the system compatibility requirements for using Truedinkumbet?',
          answer: 'For the best experience on Truedinkumbet, we recommend using an up-to-date operating system and a modern web browser. Your display resolution should be set to at least 1024 × 768 to ensure the website displays optimally. In general, using the latest version of browsers such as Chrome, Firefox, Safari, or a recent version of Edge will provide the smoothest performance on our platform. Truedinkumbet continuously works to improve platform compatibility and user experience. We apologize for any inconvenience these requirements may cause, and we are actively making transitions to updated technologies. Our team is dedicated to ensuring that as many users as possible can access Truedinkumbet without issues.'
        },
        {
          question: 'What if I need information that isn\'t covered here?',
          answer: 'If you have questions or encounter issues that are not addressed in this FAQ section, you can always reach out to us for help. Our Customer Service team is available 24/7 via Live Chat to assist you with any inquiries or problems. Whether you need more details on a specific topic or personalized support, we are here to provide you with additional information and guidance. Feel free to contact us at any time for further assistance.'
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">Frequently Asked Questions (FAQs)</h1>
        
        {faqCategories.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.items.map((item, index) => {
                const itemKey = `${category.title}-${index}`;
                const isExpanded = expandedItems[itemKey] || false;

                return (
                  <div key={itemKey} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(itemKey)}
                      className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 text-left">{item.question}</h3>
                      <span className={`ml-4 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <div className="text-gray-700 space-y-2">
                          {typeof item.answer === 'string' ? (
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
    </div>
  );
}
