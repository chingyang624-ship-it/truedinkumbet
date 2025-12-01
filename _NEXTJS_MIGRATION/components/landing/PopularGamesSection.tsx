export default function PopularGamesSection() {
  const games = [
    {
      id: 1,
      title: "Candy Bonanza",
      provider: "Next Spin",
      rtp: "96.73",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-1.webp",
    },
    {
      id: 2,
      title: "Triple Panda",
      provider: "Next Spin",
      rtp: "96.93",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-2.webp",
    },
    {
      id: 3,
      title: "Magical Lamp",
      provider: "Next Spin",
      rtp: "97.01",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-3.webp",
    },
    {
      id: 4,
      title: "Dragon Clan",
      provider: "Next Spin",
      rtp: "96.93",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-4.webp",
    },
    {
      id: 5,
      title: "Maya Quest",
      provider: "Next Spin",
      rtp: "96.84",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-5.webp",
    },
    {
      id: 6,
      title: "Dragon Blitz",
      provider: "Next Spin",
      rtp: "96.87",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/04/popular-game-slot-carousel-6.webp",
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
