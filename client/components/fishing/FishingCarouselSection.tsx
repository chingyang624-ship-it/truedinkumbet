export default function FishingCarouselSection() {
  const games = [
    {
      title: 'Alien Hunter',
      provider: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-alien-hunter.webp',
    },
    {
      title: 'Fishing War',
      provider: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-war.webp',
    },
    {
      title: 'Fishing God',
      provider: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-god.webp',
    },
    {
      title: 'Zombie Party',
      provider: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-zombie-party.webp',
    },
    {
      title: 'Royal Fishing',
      provider: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-royal-fishing.webp',
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
