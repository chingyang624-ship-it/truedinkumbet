export default function GamesSection() {
  const games = [
    { name: "Slots", icon: "🎰" },
    { name: "Live Casino", icon: "🎲" },
    { name: "Sports", icon: "⚽" },
    { name: "Fishing", icon: "🎣" },
    { name: "Esports", icon: "🎮" },
    { name: "Crypto Casino", icon: "₿" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Our Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{game.icon}</div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "#1f2124" }}
              >
                {game.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
