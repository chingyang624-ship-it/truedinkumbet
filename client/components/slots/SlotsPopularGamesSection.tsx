const popularGames = [
  {
    name: 'Gates of Olympus (Pragmatic Play)',
    description:
      'A mythological slot with tumbling reels, increasing multipliers, and high variance. Known for explosive wins during the free spins round.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/gates-of-olypus.jpg',
  },
  {
    name: 'Candy Bonanza (NextSpin)',
    description:
      'Bright, playful, and loaded with sweet wins. This slot includes cluster pays, cascading reels, and bonus spin features that keep players hooked.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/candy-bonanaza.jpg',
  },
  {
    name: 'Roma (Spadegaming)',
    description:
      'Inspired by the Roman empire, Roma combines nostalgic graphics with modern bonus rounds. It\'s one of the most-played titles in the online slot game Malaysia category.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/roma.jpg',
  },
  {
    name: 'Lucky Twins (Microgaming)',
    description:
      'A game that blends Malaysian cultural motifs with simple mechanics. It\'s great for players looking for low volatility and steady payouts.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/lucky-twins.jpg',
  },
];

export default function SlotsPopularGamesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Popular Slot Games Among Malaysian Players
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Looking for games that other Malaysian players love? Check out these top picks:
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
