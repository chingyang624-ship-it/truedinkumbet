export default function LiveCasinoPopularGamesSection() {
  const games = [
    {
      name: 'Live Baccarat',
      description: 'Loved for its simplicity, Live Baccarat remains a favorite among live casino Australia fans. Truedinkumbet offers traditional tables, No-Commission Baccarat, and even squeeze options for those who enjoy a little drama.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe2b3c208d2fd4e58aa63d1115bb85886',
    },
    {
      name: 'Live Blackjack',
      description: 'Think fast and play smart. Live Blackjack lets you take on the dealer with side bets, insurance, and multi-seat options. Choose from standard or VIP tables and interact with real dealers in a high-energy environment.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F303477ac2d1c40db80b094c24ee5c456',
    },
    {
      name: 'Live Roulette',
      description: 'A true casino classic. Truedinkumbet features multiple live roulette styles, including European, French, and the electrifying Lightning Roulette. Watch the ball spin on a real wheel and bet in real-time with others at the table.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2472171a77be48b2a5057673425fcf5d',
    },
    {
      name: 'Live Poker',
      description: 'Poker fans can enjoy live dealer versions like Casino Hold\'em and Caribbean Stud. These games combine the best of live interaction with real strategy and payout potential.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fec73d59713b54ec08b40485df764f064',
    },
    {
      name: 'Sic Bo',
      description: 'This traditional dice game is a huge hit in Asia and Australia. With clear visual interfaces, fast rounds, and multipliers, Live Sic Bo gives you a great blend of strategy and chance.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb8e0d0bf303f484eae7dfcd5c423a011',
    },
    {
      name: 'Dragon Tiger',
      description: 'Lightning-fast and straightforward, Dragon Tiger is a two-card showdown between the "Dragon" and the "Tiger." It\'s popular with players who want to enjoy quick, exciting bets.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fceb3bd1106744c578c4eb83a47fe7ee7',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Top Live Casino Online Games Available on Truedinkumbet
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {games.map((game, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/2">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>
                  {game.name}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8', fontSize: '16px' }}>
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8' }}>
            From table staples to fast-paced showdowns, Truedinkumbet covers every type of live casino games Australia players are looking for.
          </p>
        </div>
      </div>
    </section>
  );
}
