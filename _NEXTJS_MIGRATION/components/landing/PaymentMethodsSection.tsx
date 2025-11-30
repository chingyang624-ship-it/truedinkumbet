"use client";

export default function PaymentMethodsSection() {
  const paymentMethods = [
    {
      category: "Cryptocurrency",
      methods: [
        {
          name: "Bitcoin",
          image: "https://static.gwvkyk.com/media/7c55805b6e1963dfc6406.png",
        },
        {
          name: "USDT",
          image: "https://static.gwvkyk.com/media/d9b4ccaa6e196e6769344.png",
        },
        {
          name: "Ethereum",
          image: "https://static.gwvkyk.com/media/a5d2fcba6e1964ba77217.png",
        },
      ],
    },
    {
      category: "Online Banking",
      methods: [
        {
          name: "Bank Transfer",
          image: "https://static.gwvkyk.com/media/7f2d76c5ef196ebc22405.png",
        },
        {
          name: "PayID",
          image: "https://static.gwvkyk.com/media/96d8e24a6f19693c596b3.webp",
        },
        {
          name: "Osko",
          image: "https://static.gwvkyk.com/media/15a5123a6f196e776a39a.png",
        },
        {
          name: "NAB",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa576b281a46246da84e14fdf618e35e6?format=webp&width=800",
        },
        {
          name: "Commonwealth Bank",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd5380bcfbe16495b814c39ec4b62198b?format=webp&width=800",
        },
        {
          name: "Westpac",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F97c5c61e850d4463b73d3a816645e75f?format=webp&width=800",
        },
        {
          name: "ANZ",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F76e156d10e1a4dc7a81ee6017313d296?format=webp&width=800",
        },
      ],
    },
    {
      category: "E-Wallets",
      methods: [
        {
          name: "Apple Pay",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F36dba85993004d909882c19a5d088ea7?format=webp&width=800",
        },
        {
          name: "Google Pay",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4e000524e9c045fb93e57e5f7d1c1c6e?format=webp&width=800",
        },
        {
          name: "Neteller",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F842b0268a1134f40bafea6193be11f6b?format=webp&width=800",
        },
        {
          name: "Skrill",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F41234177d63e421a98de4f35b1ce82e5?format=webp&width=800",
        },
      ],
    },
    {
      category: "Cards",
      methods: [
        {
          name: "Visa",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcb03f2879e87411587a5bbd24c3ca3b7?format=webp&width=800",
        },
        {
          name: "MasterCard",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0252c504dd2747f3b8ab6e885d3545e7?format=webp&width=800",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Secure Payment Methods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.methods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 hover:shadow-md transition-shadow flex items-center justify-center"
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                      loading="lazy"
                    />
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
