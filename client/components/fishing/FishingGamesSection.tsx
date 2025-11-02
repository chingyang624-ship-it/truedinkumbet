export default function FishingGamesSection() {
  const games = [
    {
      title: 'Fishing War (Spadegaming)',
      description: 'Get ready to dive into an ocean of monsters and multipliers. Fishing War features power-up weapons, special bosses, and explosive gameplay. Players can choose their cannon level, target sea creatures, and earn big rewards through chain combos and multipliers.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Fishing-War.jpg',
    },
    {
      title: 'Fishing God (Spadegaming)',
      description: 'This game is all about timing and precision. With stunning visuals and a wide variety of fish, Fishing God also features golden dragons, treasure crabs, and other rare targets. It\'s one of the highest-paying fishing games in BK8\'s collection.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Fishing-God_.jpg',
    },
    {
      title: 'Happy Fishing (JILI)',
      description: 'Perfect for beginners, Happy Fishing offers a clean user interface and simple controls. It\'s fast-paced, colorful, and loaded with bonus features like random reward drops and locked targets. JILI has optimized this game for mobile play, making it perfect for on-the-go action.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Happy-Fishing_.jpg',
    },
    {
      title: 'Fishing Treasure (FastSpin)',
      description: 'Fishing Treasure brings high-definition visuals and modern game mechanics to the fishing category. With treasure chests, bonus rounds, and multi-cannon gameplay, it\'s a favorite for those seeking both excitement and innovation. The game also includes jackpots and customizable cannons for a personalized experience.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Fishing-Treasure.jpg',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: '#1f2124' }}
        >
          Top Fishing Games to Play at BK8
        </h2>

        <div className="space-y-12">
          {games.map((game, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                  width="390"
                  height="275"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#1f2124' }}
                >
                  {game.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
