export default function PopularGamesSection() {
  const games = [
    {
      id: 1,
      title: "Bonanza 2",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5e8f1a2c3d4e5f6a7b8c9d0e1f2g3h4i",
      provider: "Pragmatic",
    },
    {
      id: 2,
      title: "Sweet Bonanza",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6f9g2b3c4d5e6f7g8h9i0j1k2l3m4n5o",
      provider: "Pragmatic",
    },
    {
      id: 3,
      title: "Gates of Olympus",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7g0h3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
      provider: "Pragmatic",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Games
          </h2>
          <p className="text-gray-600 text-lg">
            Play the most popular games at Truedinkumbet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <div className="relative pb-[133%]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{game.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{game.provider}</p>
                <a
                  href="https://truedinkumbet.com/RFSEOTDK"
                  className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors text-center block"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
