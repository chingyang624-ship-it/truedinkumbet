export default function FishingCarouselSection() {
  const games = [
    {
      title: 'Shark Hunter',
      provider: 'YL Gaming',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8520f83ae89c4457ba60056c3b4af4bd',
    },
    {
      title: 'Jackpot Fishery',
      provider: 'YL Gaming',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F01b9421c31e8445995b9e1e5c25af71f',
    },
    {
      title: 'Fishing II',
      provider: 'YL Gaming',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2221ab5c90414553aa8d1dfcac5ce7b8',
    },
    {
      title: 'New Fishing Season',
      provider: 'YL Gaming',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7f7473ee501045b1a8e7993c682fa828',
    },
    {
      title: 'Heroes of the Deep Sea',
      provider: 'YL Gaming',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0929c9332adc4660980af4ef0554a08b',
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:py-12" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {games.map((game, index) => (
            <div key={index} className="text-center">
              <a
                href="https://truedinkumbet.com/go/fishing"
                target="_blank"
                rel="sponsored noopener"
                className="block"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
              <h3 className="mt-3 font-bold text-sm" style={{ color: '#1f2124' }}>
                {game.title}
              </h3>
              <p className="text-xs" style={{ color: '#6b7280' }}>
                {game.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
