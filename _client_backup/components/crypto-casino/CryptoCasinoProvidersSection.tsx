export default function CryptoCasinoProvidersSection() {
  const cryptocurrencies = [
    {
      name: "Bitcoin (BTC)",
      description:
        "The original cryptocurrency. Fast, secure, and widely accepted.",
    },
    {
      name: "Ethereum (ETH)",
      description:
        "Leading blockchain platform with smart contracts. Reliable and innovative.",
    },
    {
      name: "Tether (USDT)",
      description:
        "Stablecoin pegged to USD. Ideal for consistent value while gaming.",
    },
    {
      name: "Litecoin (LTC)",
      description:
        "Faster transaction times than Bitcoin. Lightweight and efficient.",
    },
    {
      name: "Dogecoin (DOGE)",
      description:
        "Community-driven cryptocurrency. Fun and accessible for all players.",
    },
    {
      name: "Ripple (XRP)",
      description: "Low-cost international transfers. Fast payment settlement.",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Supported Cryptocurrencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cryptocurrencies.map((crypto, index) => (
            <div
              key={index}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1f2124" }}
              >
                {crypto.name}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                {crypto.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
