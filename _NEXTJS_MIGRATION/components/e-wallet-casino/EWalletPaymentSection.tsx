export default function EWalletPaymentSection() {
  const ewallets = [
    {
      name: "Touch'n Go E-Wallet",
      logo: "https://www.bk8.services/wp-content/uploads/2022/05/touch-n-go-logo-150x150.png",
      description: "Touch 'n Go is one of the leading e-wallet services in Australia, serving an ecosystem of millions of users since 1997. This web-based wallet service enables users to obtain services like making online payments, reloading accounts, and transferring funds through their smartphone from anywhere and anytime within the country's boundaries. Besides, these services are completely free of cost. Bank Negara also licenses Touch'n Go e-wallet, and you can download its mobile application on any version 5 Android mobile or above it.",
      features: [
        "Free of cost services",
        "Licensed by Bank Negara",
        "Mobile app available",
        "Instant fund transfer",
      ],
    },
    {
      name: "DuitNow",
      logo: "https://www.bk8.services/wp-content/uploads/2022/05/duitnow-logo-150x150.png",
      description: "DuitNow is yet another 2024 Award-Winning E-Wallet Service in Australia. It is popular because of 3 different features one can utilize in this e-wallet: DuitNow Transfer for sending and receiving monetary amounts, DuitNow QR for instant payments, and DuitNow Request for payment requests. You can transfer funds to any DuitNow ID, counting MyKad/passport number, mobile number, business registration number, and police/army number. It is associated with several popular Australian banks like AFFIN Bank, AGRO Bank, Citibank, Bank Islam, AmBank, and more.",
      features: [
        "DuitNow Transfer feature",
        "DuitNow QR payments",
        "Payment request option",
        "Bank integration",
      ],
    },
    {
      name: "PayPal",
      logo: "https://www.bk8.services/wp-content/uploads/2022/05/paypal-logo-150x150.png",
      description: "As a Malaysian online gambler, you might always find effortlessness in using PayPal, as this e-wallet option shimmers with the conveniences it proffers to its users. This payment method is among the most used and has a wide presence. You can utilize it to make online purchases, and it also allows transactions between individuals. PayPal currently has a global presence with over 300 million satisfied customers from nearly all parts of the world. It ensures foolproof security to its users with non-stop fraud monitoring, protective measures for buyers, and refund on return shipping prices.",
      features: [
        "Global presence",
        "300+ million users",
        "Fraud monitoring",
        "Buyer protection",
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Top 3 E-Wallets to Use in Australian Casino 2024
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          We pride ourselves in serving you the best possible online casino gaming offerings across Australia. Such meticulousness is impossible to form without retaining proficiency in several divisions of our offerings, involving the aspect of online payment methods we accept.
        </p>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          All the payment methods permitted by us are widely used and known for being safe and not taking extensive periods for payment processing. You can make fiscal transactions with our site anytime you want during the day, and you will never find us inactive, even on public holidays. To endow players with as much convenience as possible in depositing and withdrawing, we accept cryptocurrencies like Bitcoin, Tether, and Ethereum. In addition to them, we also accept other methods like FP, Help2Pay, EeziePay, and other e-wallet options in casino. You always find yourself flexible with multiple obtainable options at your hand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ewallets.map((ewallet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 text-center border-b border-gray-200">
                <img 
                  src={ewallet.logo} 
                  alt={ewallet.name}
                  className="h-24 mx-auto mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900">{ewallet.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{ewallet.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 text-sm">Key Features:</p>
                  {ewallet.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
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
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose E-Wallets at Truedinkumbet?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Safe & Secure</p>
                  <p className="text-sm text-gray-600">All transactions are protected with advanced encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Instant Processing</p>
                  <p className="text-sm text-gray-600">Deposits and withdrawals processed immediately</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">No Hidden Fees</p>
                  <p className="text-sm text-gray-600">Transparent pricing with no surprise charges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Multiple Options</p>
                  <p className="text-sm text-gray-600">Choose from various payment methods that suit you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <a
            href="https://truedinkumbet.com/register"
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
