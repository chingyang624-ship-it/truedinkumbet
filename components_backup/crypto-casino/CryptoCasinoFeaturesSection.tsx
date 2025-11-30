export default function CryptoCasinoFeaturesSection() {
  const features = [
    {
      title: 'Slots Games',
      description: 'Explore thousands of crypto-powered slot games with instant payouts.',
    },
    {
      title: 'Live Casino',
      description: 'Real dealers, live games, and immersive experience on the blockchain.',
    },
    {
      title: 'Roulette',
      description: 'Classic roulette with crypto betting. Fair, transparent, and secure.',
    },
    {
      title: 'Blackjack',
      description: 'Beat the dealer with crypto chips. Provably fair gaming guaranteed.',
    },
    {
      title: 'Baccarat',
      description: 'Sophisticated card game with cryptocurrency wagering.',
    },
    {
      title: 'Dragon Tiger',
      description: 'Fast-paced card game perfect for crypto enthusiasts.',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Crypto Casino Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1f2124' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
