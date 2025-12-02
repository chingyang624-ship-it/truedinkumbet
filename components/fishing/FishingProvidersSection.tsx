export default function FishingProvidersSection() {
  const providers = [
    {
      name: "NextSpin",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8fe8d9b9688a41e9b75595f028b4cda4",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "Spadegaming",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F198349e6714a4cc3a3b63c51b7968ffe",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "JILI",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F65fe8620fc26451d939704e9f46eae6e",
    },
    {
      name: "YGR",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F555b5721e283415083fd5e5f10fdd826",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "JDB",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F38bf457bc43a4b4cbf5b87a87cd4b1a5",
    },
  ];

  return (
    <section
      className="w-full px-4 py-8 md:py-12"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {providers.map((provider, index) => (
            <div key={index} className="text-center relative">
              {provider.badge && (
                <div
                  style={{
                    backgroundColor: provider.badgeColor,
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "600",
                    padding: "2px 8px",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    zIndex: 10,
                  }}
                >
                  {provider.badge}
                </div>
              )}
              <a
                href="https://truedinkumbetaucasino.com/go/fishing"
                target="_blank"
                rel="sponsored noopener"
                className="block"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="300"
                  className="w-full h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
