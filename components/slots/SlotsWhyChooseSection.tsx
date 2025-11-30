const features = [
  {
    title: "Convenience",
    description:
      "Truedinkumbet offers seamless gaming with instant-play access to your favorite slots anytime on desktop or mobile.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb9601035075544ab91b74630f06b6461",
  },
  {
    title: "Variety",
    description:
      "The platform features a constantly updated library of classic, themed, and jackpot slots from top global and Aussie providers.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faaf11a045b0247cbab2f345da2c5a545",
  },
  {
    title: "Bonuses",
    description:
      "New players get generous welcome bonuses, while regular promotions like reloads and free spins keep loyal players engaged.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff2c5ab51da52411fb4cda5d9094513b6",
  },
  {
    title: "High Payout Percentages",
    description:
      "Many games offer RTP rates above 96%, giving players fair odds and consistent winning potential.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F11938edbcab348fa9a9a44c4bae60fca",
  },
];

export default function SlotsWhyChooseSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose Truedinkumbet to Play Online Slot Games?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Truedinkumbet isn't just another online casino, it's a premium
          destination for Australian slot players. Here's why:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
