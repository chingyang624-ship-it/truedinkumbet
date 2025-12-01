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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Popular Games We Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <a key={game.id} href="/slots" className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <img
                  src={game.image}
                  alt={`BK8 ${game.title} Slots Game`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {game.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">{game.provider}</p>
                    <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
                      RTP {game.rtp}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
