"use client";

export default function PaymentMethodsSection() {
  const paymentMethods = [
    {
      category: "E-Wallets",
      methods: [
        { name: "Touch 'n Go", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F34de12af57824581b81cb9bc89ad7057" },
        { name: "GrabPay", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F88c7899e9f4b4d61969d87d300ed6d56" },
        { name: "Boost", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9c91b42e2bb844b49f4f0c8f8053a7b7" },
        { name: "ShopeePay", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffb01ba7b451c4f57ad13b6bceec2b178" },
      ],
    },
    {
      category: "Online Banking",
      methods: [
        { name: "Maybank", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6e377f4b452c435f86f2b2448f69f57d" },
        { name: "CIMB", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9c91b42e2bb844b49f4f0c8f8053a7b7" },
        { name: "Public Bank", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffb01ba7b451c4f57ad13b6bceec2b178" },
        { name: "RHB", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6e377f4b452c435f86f2b2448f69f57d" },
        { name: "Hong Leong", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9c91b42e2bb844b49f4f0c8f8053a7b7" },
        { name: "AmBank", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffb01ba7b451c4f57ad13b6bceec2b178" },
      ],
    },
    {
      category: "Cryptocurrency",
      methods: [
        { name: "Bitcoin (BTC)", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9c91b42e2bb844b49f4f0c8f8053a7b7" },
        { name: "Tether (USDT)", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffb01ba7b451c4f57ad13b6bceec2b178" },
        { name: "Ethereum (ETH)", image: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6e377f4b452c435f86f2b2448f69f57d" },
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
              <div className="flex flex-wrap gap-4 justify-center">
                {category.methods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-12 w-auto mx-auto"
                      style={{ filter: "grayscale(0.5)" }}
                    />
                    <p className="text-xs text-gray-600 mt-2">{method.name}</p>
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
