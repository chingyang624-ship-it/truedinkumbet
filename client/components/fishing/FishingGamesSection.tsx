export default function FishingGamesSection() {
  const games = [
    {
      title: 'Fishing War (Spadegaming)',
      description:
        'Get ready to dive into an ocean of monsters and multipliers. Fishing War features power-up weapons, special bosses, and explosive gameplay. Players can choose their cannon level, target sea creatures, and earn big rewards through chain combos and multipliers.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa8f1cc83c5244d7cae455de4ed405d3f',
    },
    {
      title: 'Fishing God (Spadegaming)',
      description:
        'This game is all about timing and precision. With stunning visuals and a wide variety of fish, Fishing God also features golden dragons, treasure crabs, and other rare targets. It\'s one of the highest-paying fishing games in Truedinkumbet\'s collection.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fde5161bfd0fc4f338c2c0d210b59a4b0',
    },
    {
      title: 'Happy Fishing (JILI)',
      description:
        'Perfect for beginners, Happy Fishing offers a clean user interface and simple controls. It\'s fast-paced, colorful, and loaded with bonus features like random reward drops and locked targets. JILI has optimized this game for mobile play, making it perfect for on-the-go action.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffabb4e33fcaa4cb3b3a925b05678b630',
    },
    {
      title: 'Fishing II (YL Gaming)',
      description:
        'Fishing 2 brings high-definition visuals and modern game mechanics to the fishing category. With treasure chests, bonus rounds, and multi-cannon gameplay, it\'s a favorite for those seeking both excitement and innovation. The game also includes jackpots and customizable cannons for a personalized experience.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2221ab5c90414553aa8d1dfcac5ce7b8',
      imageWidth: '80%',
      imageHeight: '400px',
    },
  ];

  return (
    <>
      {/* Section Title */}
      <section className="w-full px-4 py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>
            Top Fishing Games to Play at Truedinkumbet
          </h2>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="w-full px-4 py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#7a7a7a', lineHeight: '1.8' }}>
            Truedinkumbet features a variety of high-quality fishing games to match every play
            style. Here are some of the most popular titles available now:
          </p>
        </div>
      </section>

      {/* Games Details */}
      <section className="w-full px-4 py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {games.map((game, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                style={{ gridAutoFlow: index % 2 === 1 ? 'dense' : 'initial' }}
              >
                <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
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
                <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                    {game.title}
                  </h3>
                  <p style={{ color: '#7a7a7a', lineHeight: '1.8' }}>
                    {game.description}
                  </p>
                  {index === games.length - 1 && (
                    <p style={{ color: '#7a7a7a', lineHeight: '1.8', marginTop: '16px' }}>
                      These titles represent the best of fishing game online casino content,
                      blending fast shooting action with rewarding outcomes.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
