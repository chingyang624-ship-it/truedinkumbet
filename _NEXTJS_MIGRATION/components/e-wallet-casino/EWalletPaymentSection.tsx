export default function EWalletPaymentSection() {
  const ewallets = [
    {
      name: "Apple Pay",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F91b945e2ff654056b8dc2a5b0d1c1d46",
      description:
        "Apple Pay is a secure digital payment method that works seamlessly across Apple devices. It uses advanced encryption and tokenization to keep your financial information safe. With Apple Pay, you can make fast and secure deposits at Truedinkumbet Casino with just a tap on your iPhone, iPad, or Apple Watch. Enjoy instant transactions without exposing your card details.",
      features: [
        "Fast and secure payments",
        "Works on all Apple devices",
        "Advanced encryption protection",
        "Instant transaction processing",
      ],
    },
    {
      name: "Google Pay",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3b8ac57cdfb9418fa74854a46ff04e9c",
      description:
        "Google Pay is the digital wallet from Google that provides a secure and convenient way to make payments. Available on Android devices worldwide, Google Pay protects your payment information using advanced security features. Deposit funds into your Truedinkumbet Casino account quickly and safely with Google Pay, and enjoy the convenience of one-touch payments.",
      features: [
        "Secure digital payments",
        "Available on Android devices",
        "One-touch payment option",
        "Protection against fraud",
      ],
    },
    {
      name: "Neteller",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9cdab7ae211843aabbe0ada4d4c30566",
      description:
        "Neteller is a trusted e-wallet solution that serves millions of users worldwide. It offers fast and secure deposits and withdrawals for online gaming. With Neteller, you get instant transfers, competitive fees, and a user-friendly platform. The service is regulated and monitored by the Financial Conduct Authority (FCA), ensuring complete safety and security for your transactions at Truedinkumbet Casino.",
      features: [
        "FCA regulated and monitored",
        "Instant transactions",
        "Competitive fees",
        "Global acceptance",
      ],
    },
    {
      name: "Skrill",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3feb6106de2440adb3bb1ef123b70bcc?format=webp",
      description:
        "Skrill is a leading digital payment solution trusted by millions of online gamers and merchants. It provides secure, fast, and reliable deposit and withdrawal services with low fees. Skrill is regulated by the Financial Conduct Authority (FCA) and offers multiple layers of security to protect your funds. Enjoy hassle-free gaming at Truedinkumbet Casino with Skrill's seamless payment experience.",
      features: [
        "FCA regulated service",
        "Low transaction fees",
        "Multiple security layers",
        "Fast fund transfers",
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Common Payment Methods Used by Casino Players
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          We pride ourselves in serving you the best possible online casino
          gaming offerings across Australia. Such meticulousness is impossible
          to form without retaining proficiency in several divisions of our
          offerings, involving the aspect of online payment methods we accept.
        </p>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          All the payment methods permitted by us are widely used and known for
          being safe and not taking extensive periods for payment processing.
          You can make fiscal transactions with our site anytime you want during
          the day, and you will never find us inactive, even on public holidays.
          To endow players with as much convenience as possible in depositing
          and withdrawing, we accept cryptocurrencies like Bitcoin, Tether, and
          Ethereum. In addition to them, we also accept other methods like FP,
          Help2Pay, EeziePay, and other e-wallet options in casino. You always
          find yourself flexible with multiple obtainable options at your hand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ewallets.map((ewallet, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 text-center border-b border-gray-200">
                <img
                  src={ewallet.logo}
                  alt={ewallet.name}
                  className="h-24 mx-auto mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {ewallet.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {ewallet.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 text-sm">
                    Key Features:
                  </p>
                  {ewallet.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="text-orange-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Why Choose E-Wallets at Truedinkumbet?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Safe & Secure</p>
                  <p className="text-sm text-gray-600">
                    All transactions are protected with advanced encryption
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Instant Processing
                  </p>
                  <p className="text-sm text-gray-600">
                    Deposits and withdrawals processed immediately
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">No Hidden Fees</p>
                  <p className="text-sm text-gray-600">
                    Transparent pricing with no surprise charges
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Multiple Options
                  </p>
                  <p className="text-sm text-gray-600">
                    Choose from various payment methods that suit you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <a
            href="https://truedinkumbet.com/RFSEOTDK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Deposit Now
          </a>
        </div>
      </div>
    </section>
  );
}
