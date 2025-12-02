export default function LiveCasinoAllGamesGridSection() {
  const games = [
    {
      name: "Lightning Baccarat",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/lightning-baccarat.webp",
    },
    {
      name: "Super Sic Bo",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/super-sic-bo.webp",
    },
    {
      name: "Speed Roulette",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/speed-roulette.webp",
    },
    {
      name: "Thai Baccarat",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/thai-baccarat.webp",
    },
    {
      name: "Korean Speed Baccarat",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/korean-speed-baccarat.webp",
    },
    {
      name: "Dragon Tiger",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/dragon-tiger.webp",
    },
    {
      name: "French Gold Roulette",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/french-gold-roulette.webp",
    },
    {
      name: "Lightning Roulette",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/lightning-roulette.webp",
    },
    {
      name: "Live Blackjack",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/live-blackjack.webp",
    },
    {
      name: "Craps",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/craps.webp",
    },
    {
      name: "Japanese Baccarat",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/japanese-baccarat.webp",
    },
    {
      name: "Speed Baccarat",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/speed-baccarat.webp",
    },
    {
      name: "Free Bet Blackjack",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/free-bet-blackjack.webp",
    },
    {
      name: "Infinite Blackjack",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/infinite-blackjack.webp",
    },
    {
      name: "Live Blackjack",
      image:
        "https://static.gwvkyk.com/media/games/live-casino/lightning-blackjack.webp",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div key={index} className="relative">
              <img
                decoding="async"
                alt={game.name}
                width="240"
                height="300"
                loading="lazy"
                src={game.image}
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 rounded-b-lg p-2 flex justify-between items-center">
                <p className="text-white text-xs font-medium">{game.name}</p>
                <img
                  decoding="async"
                  alt="Info"
                  width="25"
                  height="25"
                  loading="lazy"
                  src="https://www.bk8.services/wp-content/uploads/2023/08/info.webp"
                  className="w-4 h-4 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            rel="nofollow"
            href="https://truedinkumbet.com/RFSEOTDK"
            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            Play Now at Truedinkumbet Australia
          </a>
        </div>
      </div>
    </section>
  );
}
