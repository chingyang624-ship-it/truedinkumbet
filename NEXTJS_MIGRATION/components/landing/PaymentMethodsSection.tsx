"use client";

export default function PaymentMethodsSection() {
  const paymentMethods = [
    {
      category: "E-Wallets",
      methods: [
        { name: "Touch 'n Go", icon: "💳" },
        { name: "GrabPay", icon: "🚗" },
        { name: "Boost", icon: "🚀" },
        { name: "ShopeePay", icon: "🛍️" },
      ],
    },
    {
      category: "Online Banking",
      methods: [
        { name: "Maybank", icon: "🏦" },
        { name: "CIMB", icon: "🏦" },
        { name: "Public Bank", icon: "🏦" },
        { name: "RHB", icon: "🏦" },
        { name: "Hong Leong", icon: "🏦" },
        { name: "AmBank", icon: "🏦" },
      ],
    },
    {
      category: "Cryptocurrency",
      methods: [
        { name: "Bitcoin (BTC)", icon: "₿" },
        { name: "Tether (USDT)", icon: "₮" },
        { name: "Ethereum (ETH)", icon: "Ξ" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Secure Payment Methods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {paymentMethods.map((category, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.methods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between"
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <p className="text-sm text-gray-700 font-medium flex-1 text-left ml-3">
                      {method.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
