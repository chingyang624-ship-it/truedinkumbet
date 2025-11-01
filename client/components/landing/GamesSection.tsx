const games = [
  {
    title: 'Live Casino',
    description:
      'BK8 online casino features a live casino games section powered by top providers like Evolution and Playtech. Enjoy the thrill of real-time gaming with professional dealers hosting games like Baccarat, Roulette, Blackjack, and more.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Live-casino.jpg',
    link: '#casino',
  },
  {
    title: 'Online Slots',
    description:
      'With hundreds of online slot games from leading developers like Pragmatic Play, Spadegaming, and NetEnt, BK8 Malaysia offers endless spinning fun. From classic fruit machines to jackpot slots, every spin brings a new chance to win.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Slots.jpg',
    link: '#slots',
  },
  {
    title: 'Sports Betting',
    description:
      'BK8\'s sportsbook covers all the popular sports such as football, basketball, tennis, badminton, and more. Bet pre-match or live with competitive odds and numerous betting options, including Asian Handicap and Over/Under.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Sport-betting.jpg',
    link: '#sports',
  },
  {
    title: 'Esports Betting',
    description:
      'Experience the next-gen thrill of esports betting on titles like Dota 2, League of Legends, and CS:GO. With real-time odds and in-play markets, BK8 Casino keeps you ahead in this rapidly growing segment.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Esports.jpg',
    link: '#esports',
  },
  {
    title: 'Fishing Games',
    description:
      'BK8 casino Malaysia features fan-favorite fishing games like Fishing War and Monkey King Fishing. Easy to play, visually stunning, and loaded with bonus features, they offer great casual fun and rewards.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Fishing.jpg',
    link: '#fishing',
  },
  {
    title: 'Lottery',
    description:
      'Try your luck with BK8\'s selection of lottery games, including Magnum and Damacai-style 4D draws. Fast, easy, and rewarding, just choose your lucky numbers and wait for the win.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Lottery.jpg',
    link: '#lottery',
  },
];

export default function GamesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Explore BK8 Casino Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{game.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
