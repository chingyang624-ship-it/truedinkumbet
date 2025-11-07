export default function FishingProvidersSection() {
  const providers = [
    {
      name: "NextSpin",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F24e3b9630802496099b0ec46185eb0b5",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "Spadegaming",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3978d86782704225ab7bca9eb7655846",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "JILI",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F32f47ae662a4414785c5685d9e7d240e",
    },
    {
      name: "YGR",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F147c670b9d2a4a5a8de30b6454e331ba",
      badge: "Hot",
      badgeColor: "#ff650f",
    },
    {
      name: "JDB",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd036ff4c56984eef8120e9006cf6e1e5",
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
