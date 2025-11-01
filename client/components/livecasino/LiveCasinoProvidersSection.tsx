export default function LiveCasinoProvidersSection() {
  const providers = [
    {
      name: 'Evolution',
      description: 'Evolution is the gold standard in live casino software. Known for game shows like Crazy Time and Lightning Roulette, as well as premium blackjack and baccarat tables, Evolution brings innovative features and multi-language dealers. Their real-time streaming is flawless, making them a top choice for players across Australia.',
      logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/EG.png',
    },
    {
      name: 'Microgaming',
      description: 'Microgaming\'s live tables offer a clean, reliable interface with classic games like roulette, blackjack, and baccarat. The streams are smooth, the betting system is intuitive, and mobile performance is top-notch.',
      logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/microgaming-logo-300x212.png',
    },
    {
      name: 'AE Casino',
      description: 'AE Casino, also known as AE Sexy, is wildly popular in Australia. With attractive live dealers fluent in English, the tables feel personal and localized. AE Casino focuses on games like Sexy Baccarat, which blends engaging gameplay with a high-energy presentation, perfect for Australian players.',
      logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/AE-casino.png',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Trusted Live Casino Providers at Truedinkumbet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {providers.map((provider, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-xs h-auto"
                  style={{ maxHeight: '200px' }}
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
