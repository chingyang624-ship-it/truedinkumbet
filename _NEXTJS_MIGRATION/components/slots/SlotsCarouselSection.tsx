export default function SlotsCarouselSection() {
  const featuredGames = [
    {
      title: "Thunder Coins XXL",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc1f22ae8e0cb4b72ac18d2e3d886314b",
      provider: "BNG",
      rtp: "97.05",
    },
    {
      title: "Coin Strike 2",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2d750595f6854b1ebec8d6a1de0f6e05",
      provider: "BNG",
      rtp: "96.75",
    },
    {
      title: "Cash Coin",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2aac83baa38f45a893130b9537416678",
      provider: "JILI",
      rtp: "96.73",
    },
    {
      title: "Pirate Queen 2",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdea56528893740118078f68cd11c8549",
      provider: "JILI",
      rtp: "96.73",
    },
    {
      title: "Treasure Aztec",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6aa8e0ce5b74489bbae7a48bdbf52db6",
      provider: "SLOT MANIA",
      rtp: "96.95",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Slots
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Play our most popular slot games
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {featuredGames.map((game, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <div className="relative pb-[133%]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-gray-900">
                  {game.title}
                </h3>
                <p className="text-xs text-gray-600">{game.provider}</p>
                <p className="text-xs text-orange-500 font-semibold">
                  RTP: {game.rtp}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
