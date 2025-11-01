const popularGames = [
  {
    name: 'Gates of Olympus (Pragmatic Play)',
    description:
      'A mythological slot with tumbling reels, increasing multipliers, and high variance. Known for explosive wins during the free spins round.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F53d621a837cd471aa08cac5b722e1e53',
  },
  {
    name: 'Super Pink Joker (BNG)',
    description:
      'Super Pink Joker by BNG combines classic fruit slot fun with modern Hold and Win features. Bright visuals and fast spins make it a hit among Australian players.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F00a8def432494716800fd73209dfa072',
  },
  {
    name: 'Boxing King (JILI)',
    description:
      'Boxing King by JILI delivers a high-energy slot experience set in the ring. With 5 reels, cascading combos, free spins and rising multipliers up to ×8, it\'s perfect for players who crave fast-paced action and knockout wins.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F079f50f1a17f407aa373eb6fe7eb770e',
  },
  {
    name: 'Big Red (Aristocrat-Slot)',
    description:
      'Big Red by Aristocrat is an iconic Australian-themed slot set in the outback. Featuring kangaroos, crocodiles, and wild boars, this classic pokie offers simple gameplay with powerful free spin rewards. Loved by Aussie players for its nostalgic design and big-win potential.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F818e79fc20204ac0811dcedece50c0b9',
  },
];

export default function SlotsPopularGamesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Popular Slot Games Among Australian Players
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Looking for games that other Australian players love? Check out these top picks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {popularGames.map((game, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{game.name}</h3>
                <p className="text-gray-600 leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
