export default function FeaturesSection() {
  const features = [
    "Safe & Secure",
    "100+ Games",
    "Live Dealers",
    "24/7 Support",
    "Fast Payouts",
    "Mobile App",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Why Play at Truedinkumbet?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#1f2124" }}
              >
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
