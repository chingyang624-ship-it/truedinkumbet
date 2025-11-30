"use client";

export default function GamingCategoriesSection() {
  const categories = [
    {
      title: "Sports Betting",
      description:
        "Bet on football, basketball, cricket, and more with smooth, real-time odds and live markets. Fast, secure, and built for players who want every match to matter.",
      buttonText: "Place Bet",
      link: "/sports",
      bgColor: "bg-blue-600",
    },
    {
      title: "Live Casino",
      description:
        "Step into real-time tables with professional dealers and smooth HD streams. Blackjack, baccarat, roulette — all delivered with fast results and seamless play on any device.",
      buttonText: "Play Now",
      link: "/live-casino",
      bgColor: "bg-purple-600",
    },
    {
      title: "Online Slots",
      description:
        "Spin through a wide mix of slots with sharp visuals, high RTPs, and smooth mobile gameplay. Classic picks, modern hits, and new releases waiting for your next spin.",
      buttonText: "Spin Now",
      link: "/slots",
      bgColor: "bg-pink-600",
    },
    {
      title: "Fishing",
      description:
        "Aim, shoot, and collect rewards in fast-paced fishing games filled with power-ups and big-win moments. Quick action, colorful effects, and nonstop fun across all devices.",
      buttonText: "Play Now",
      link: "/fishing",
      bgColor: "bg-cyan-600",
    },
    {
      title: "Lottery",
      description:
        "Enjoy quick number games with instant results and easy play. From keno-style picks to digital draws, every round is simple, fast, and made for players who want quick excitement.",
      buttonText: "Bet Now",
      link: "https://truedinkumbet.com/RFSEOTDK",
      bgColor: "bg-yellow-600",
    },
    {
      title: "Esports",
      description:
        "Bet on top esports titles with live odds, real-time stats, and smooth match tracking. From shooters to MOBAs, every game comes with fast updates and easy, intuitive betting.",
      buttonText: "Bet Now",
      link: "https://truedinkumbet.com/RFSEOTDK",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-all`}
            >
              <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
              <p className="text-sm mb-6 leading-relaxed opacity-90">
                {category.description}
              </p>
              <a
                href={category.link}
                {...(category.link.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-block px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {category.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
