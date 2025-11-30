export default function FishingWhyChooseSection() {
  const features = [
    {
      title: "Top Providers",
      description:
        "Truedinkumbet features fishing games from leading developers like Spadegaming, JILI Games, and FastSpin.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd802fe78caa141c692e677af8781168a",
    },
    {
      title: "Localized Platform",
      description:
        "The site supports AUD deposits and local payment methods for Australian players.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff4b8137a095c41b884f458481754068c",
    },
    {
      title: "Fast & Secure",
      description:
        "Truedinkumbet is fully licensed and offers secure payments and instant withdrawals.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2238714179814097a1c1aa0e025ae4d4",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Clean layout, intuitive controls, and optimized for both desktop and mobile users.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa78a1702ae7e48f88303c9a70249cafb",
    },
  ];

  return (
    <>
      {/* Section Title */}
      <section
        className="w-full px-4 py-8"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#000000" }}>
            Why Choose Truedinkumbet for Online Fishing Games?
          </h2>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section
        className="w-full px-4 py-8"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "#7a7a7a", lineHeight: "1.8" }}>
            Truedinkumbet online casino is one of the most trusted platforms
            when it comes to fishing game online casino entertainment in
            Australia. Here's why thousands of players choose Truedinkumbet for
            their fishing game sessions:
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="w-full px-4 py-8"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="100"
                    className="w-24 h-24"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#000000" }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#7a7a7a", lineHeight: "1.8" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section
        className="w-full px-4 py-8"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "#7a7a7a", lineHeight: "1.8" }}>
            Whether you're new to fishing games or a seasoned shooter,
            Truedinkumbet online casino delivers a smooth, rewarding, and
            enjoyable experience every time you play.
          </p>
        </div>
      </section>
    </>
  );
}
