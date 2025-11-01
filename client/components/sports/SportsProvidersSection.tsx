export default function SportsProvidersSection() {
  const providers = [
    {
      name: 'CMD368',
      description: 'CMD368 is a favorite among Malaysian bettors thanks to its easy-to-navigate platform and strong focus on Asian Handicap betting, particularly in football and badminton. It updates odds in real-time and supports quick bet placement.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    },
    {
      name: 'Truedinkumbet Sports',
      description: 'Built into the Truedinkumbet platform itself, Truedinkumbet Sports is a proprietary sportsbook offering unique betting markets, boosted odds, and exclusive promotions for members. It\'s tightly integrated with the loyalty program and supports both pre-match and live betting.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
    },
    {
      name: 'M8Bet',
      description: 'M8Bet is known for its wide sports coverage, offering over 30 types of sports. The platform features detailed analytics, match stats, and live streaming for selected events, making it ideal for data-driven bettors.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r',
    },
    {
      name: 'SBOBET',
      description: 'SBOBET is a global name in online sportsbook Malaysia betting. It\'s ideal for players looking for high-limit betting, and it covers everything from football and basketball to rugby, cricket, and esports. SBOBET also offers fast market updates and strong mobile optimization.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Trusted Sportsbook Providers at Truedinkumbet
        </h2>

        <div className="space-y-8">
          {providers.map((provider, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-xs h-auto"
                  style={{ maxHeight: '200px', maxWidth: '320px' }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>
                  {provider.name}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  {provider.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
