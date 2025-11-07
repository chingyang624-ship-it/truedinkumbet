const features = [
  {
    title: "Customer Support",
    description:
      "Truedinkumbet Australia provides reliable, around-the-clock customer service through live chat, WhatsApp, and email in multiple languages, ensuring quick, polite, and professional responses for a smooth experience.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9b943cb5cf344fbf976f8e82ae1c0c15",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Truedinkumbet features a user-friendly interface designed for seamless play across both desktop and mobile platforms, ensuring easy navigation and smooth gameplay.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F79dcc6f324114cc8b7eb5676a3050d19",
  },
  {
    title: "Multiple Payment Options",
    description:
      "Truedinkumbet supports a wide range of payment methods, including local Australian bank transfers, e-wallets, and cryptocurrency, allowing users to deposit and withdraw funds with ease through fast transactions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd136e1a243a8437083ec45971e386e74",
  },
  {
    title: "Licensed and Secure",
    description:
      "Truedinkumbet Casino Australia is fully licensed by a recognized international regulator, ensuring that every game is tested for fairness, every transaction is encrypted, and your data, money, and trust are always protected.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fda8872c26a8c47aeb93ea9d84132aef4",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose Truedinkumbet Australia?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
