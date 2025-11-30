export default function CryptoCasinoWhyChooseSection() {
  const reasons = [
    {
      title: "Instant Crypto Deposits",
      description:
        "Deposit with Bitcoin, Ethereum, and other cryptocurrencies. Funds arrive instantly to your account.",
    },
    {
      title: "Fast Withdrawals",
      description:
        "Withdraw your crypto winnings quickly and securely. No lengthy verification processes.",
    },
    {
      title: "Complete Anonymity",
      description:
        "Enjoy gaming privacy with blockchain-based transactions. No personal financial data required.",
    },
    {
      title: "Lower Fees",
      description:
        "Crypto transactions have minimal fees compared to traditional payment methods.",
    },
    {
      title: "24/7 Availability",
      description:
        "Access your account anytime, anywhere with 24/7 crypto casino gaming.",
    },
    {
      title: "Licensed & Regulated",
      description:
        "Truedinkumbet is officially licensed by PAGCOR, ensuring fair play and player protection.",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Why Choose Truedinkumbet Crypto Casino?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1f2124" }}
              >
                {reason.title}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
