export default function SportsTypesSection() {
  const sportsTypes = [
    {
      title: 'Football (Soccer)',
      description: 'Football is by far the most popular sport for sports betting Malaysia players. Truedinkumbet offers comprehensive coverage of top-tier leagues like the English Premier League (EPL), UEFA Champions League, World Cup, and even the Malaysia Super League. Popular markets include 1X2 (Match Result), Asian Handicap, Over/Under Goals, and Correct Score. Live betting and early cash-out options are also available.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    },
    {
      title: 'Basketball',
      description: 'For fans of fast-paced action, basketball betting is available on leagues such as the NBA, EuroLeague, and FIBA Asia. Players can place pre-match bets or enjoy live in-play betting on markets like total points, spread betting, and quarter outcomes.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6',
    },
    {
      title: 'Badminton',
      description: 'Being a national favorite, badminton is hugely popular among Malaysian punters. Truedinkumbet offers odds on major tournaments like the BWF World Championships, Thomas Cup, All England Open, and regional competitions such as the SEA Games. Common markets include match winner, total sets, and set handicaps.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6',
    },
    {
      title: 'Tennis',
      description: 'Truedinkumbet covers all the major tennis tournaments, including the Grand Slams (Wimbledon, US Open, French Open, Australian Open) and ATP/WTA tours. Bettors can wager on set winners, game totals, and live point-by-point betting during matches.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6',
    },
    {
      title: 'Boxing',
      description: 'Boxing fans can place wagers on global title fights and undercard bouts. Markets include outright winner, round betting, and method of victory (e.g., knockout, decision, or TKO). Major boxing organizations like WBC, WBA, and WBO are all featured.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6',
    },
    {
      title: 'Cricket',
      description: 'Truedinkumbet caters to cricket lovers with odds on international test matches, One Day Internationals (ODIs), T20 matches, and popular leagues like the Indian Premier League (IPL) and The Ashes. Bet types include match winner, top batsman, total runs, and more.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6',
    },
    {
      title: 'Horse Racing',
      description: 'This classic betting sport is available with races from the UK, Australia, Japan, and Singapore. You can bet on win/place markets, trifectas, exactas, and more. Truedinkumbet also provides access to real-time race streaming and form guides to help you make smarter bets.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fg1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6',
    },
    {
      title: 'Rugby',
      description: 'From the Rugby World Cup to the Six Nations and Super Rugby, Truedinkumbet delivers comprehensive rugby coverage. Bettors can enjoy a variety of markets like match winner, handicap, first try scorer, and total points. No matter your favorite sport, Truedinkumbet gives you all the tools and coverage you need to confidently bet on sports from Australia.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fh1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6',
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
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
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
