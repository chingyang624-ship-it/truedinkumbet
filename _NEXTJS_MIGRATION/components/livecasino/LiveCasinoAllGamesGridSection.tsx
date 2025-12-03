export default function LiveCasinoAllGamesGridSection() {
  const games = [
    {
      name: "Lightning Baccarat",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Super Sic Bo",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Speed Roulette",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Thai Baccarat",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Korean Speed Baccarat",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Dragon Tiger",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "French Gold Roulette",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Lightning Roulette",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Live Blackjack",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Craps",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Japanese Baccarat",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Speed Baccarat",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Free Bet Blackjack",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Infinite Blackjack",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      name: "Live Blackjack",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
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
