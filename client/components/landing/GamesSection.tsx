const games = [
  {
    title: 'Live Casino',
    description:
      'Truedinkumbet online casino features a live casino games section powered by top providers like Evolution and Playtech. Enjoy the thrill of real-time gaming with professional dealers hosting games like Baccarat, Roulette, Blackjack, and more.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
    link: '#casino',
  },
  {
    title: 'Online Slots',
    description:
      'With hundreds of online slot games from leading developers like Pragmatic Play, Spadegaming, and NetEnt, Truedinkumbet Australia offers endless spinning fun. From classic fruit machines to jackpot slots, every spin brings a new chance to win.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
    link: '#slots',
  },
  {
    title: 'Sports Betting',
    description:
      'Truedinkumbet\'s sportsbook covers all the popular sports such as football, basketball, tennis, badminton, and more. Bet pre-match or live with competitive odds and numerous betting options, including Asian Handicap and Over/Under.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5443f7041c3f4b079179c988f0da43b2',
    link: '#sports',
  },
  {
    title: 'Esports Betting',
    description:
      'Experience the next-gen thrill of esports betting on titles like Dota 2, League of Legends, and CS:GO. With real-time odds and in-play markets, Truedinkumbet Casino keeps you ahead in this rapidly growing segment.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faa28d6e79535439e9424cf65c6f660ad',
    link: '#esports',
  },
  {
    title: 'Fishing Games',
    description:
      'Truedinkumbet casino Australia features fan-favorite fishing games like Fishing War and Monkey King Fishing. Easy to play, visually stunning, and loaded with bonus features, they offer great casual fun and rewards.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F159a9265e32840a3a0b88b88fc82f47f',
    link: '#fishing',
  },
  {
    title: 'Lottery',
    description: (
      <p>
        Try your luck with Truedinkumbet's selection of lottery games, including Grand Lotto 4D draws. Fast, easy, and rewarding, just choose your lucky numbers and wait for the win.
      </p>
    ),
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1595b35f96e44dd9b73e8a4311caf245',
    link: '#lottery',
  },
];

export default function GamesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Explore Truedinkumbet Casino Games</h2>
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
