export default function SportsTypesSection() {
  const sportsTypes = [
    {
      title: 'Football (Soccer)',
      description: 'Football is one of the most beloved sports among Australian sports bettors. Truedinkumbet offers extensive coverage of major global competitions like the English Premier League (EPL), UEFA Champions League, FIFA World Cup, and even the A-League. Key betting markets include 1X2 (Match Result), Asian Handicap, Over/Under Goals, and Correct Score. With live betting and early cash-out options, players can enjoy real-time action and greater flexibility.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9c15f86679244ac7936e1d266362350e',
    },
    {
      title: 'Basketball',
      description: 'For fans of fast-paced action, basketball betting is available on leagues such as the NBA, EuroLeague, and FIBA Asia. Players can place pre-match bets or enjoy live in-play betting on markets like total points, spread betting, and quarter outcomes.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F03c7095dea574158a060c9970937f5f0',
    },
    {
      title: 'Badminton',
      description: 'Badminton enjoys a dedicated following among Australian sports bettors. Truedinkumbet provides odds on major international tournaments like the BWF World Championships, Thomas Cup, All England Open, and regional events such as the Commonwealth Games. Popular betting markets include match winner, total sets, and set handicaps, allowing fans to get in on the action and bet on their favorite players and outcomes.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffc662d148c784f35a4433bbaa6c5ab43',
    },
    {
      title: 'Tennis',
      description: 'Truedinkumbet covers all the major tennis tournaments, including the Grand Slams like Wimbledon, US Open, French Open, and Australian Open, along with the ATP and WTA tours. Australian bettors can place wagers on set winners, game totals, and even enjoy live point-by-point betting during matches, offering a thrilling experience for tennis fans nationwide.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb254a64ed0854affa223445fa192f5c8',
    },
    {
      title: 'Boxing',
      description: 'Boxing remains a favorite for Australian sports bettors, with opportunities to wager on major global title fights and undercard bouts. Truedinkumbet offers markets including outright winner, round betting, and method of victory (e.g., knockout, decision, or TKO). Bettors can also find odds for major boxing organizations like the WBC, WBA, and WBO, making it easy for fans to back their favorite fighters and fight outcomes.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F427f82f4137d455ebdcd71323aca0e60',
    },
    {
      title: 'Cricket',
      description: 'Truedinkumbet offers extensive coverage for cricket lovers, with odds on international Test matches, One Day Internationals (ODIs), T20 matches, and iconic competitions like The Ashes and the Indian Premier League (IPL). Popular bet types include match winner, top batsman, total runs, and more, giving Australian cricket fans plenty of options to place their bets on both domestic and international cricket events.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8b0723b2567b49f9a9c755d4eb171b3d',
    },
    {
      title: 'Horse Racing',
      description: 'Truedinkumbet brings the excitement of horse racing with races from top locations including Australia, the UK, Japan, and Singapore. Australian bettors can wager on win/place markets, trifectas, exactas, and more. Additionally, Truedinkumbet offers real-time race streaming and form guides, ensuring that Australian bettors have the tools they need to make informed and smarter bets.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa20a49698752476a8ce9b6b2a0f40107',
    },
    {
      title: 'Rugby',
      description: 'Truedinkumbet offers extensive rugby coverage, from the Rugby World Cup to the Six Nations and Super Rugby, catering to Australian rugby fans. Bettors can enjoy a variety of markets, including match winner, handicap, first try scorer, and total points. Whether you\'re a fan of international tournaments or local matches, Truedinkumbet provides all the tools and coverage you need to confidently place your rugby bets in Australia.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5f8d7f6ce7924ef1b3d5b11cd30e55c9',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#1f2124', textAlign: 'center' }}>
          Types of Sports Available to Bet in Truedinkumbet
        </h2>

        <div className="space-y-12">
          {sportsTypes.map((sport, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/2">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full rounded-lg"
                  style={{ height: '300px', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>
                  {sport.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8', fontSize: '16px' }}>
                  {sport.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
