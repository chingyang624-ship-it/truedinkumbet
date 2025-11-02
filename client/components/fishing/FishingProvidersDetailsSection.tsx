export default function FishingProvidersDetailsSection() {
  const providers = [
    {
      title: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/spadegaming-logo-1.png',
      description:
        'A pioneer in the Asian arcade game market, Spadegaming is best known for titles like Fishing War and Fishing God. Their games are certified for fairness, and they consistently deliver top-tier graphics, multipliers, and engaging bonus features.',
    },
    {
      title: 'JILI',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/jili.jpg',
      description:
        'JILI specializes in mobile-first design. Their fishing games are smooth, user-friendly, and optimized for low-lag gameplay. Happy Fishing is a perfect example of how JILI merges casual fun with high payout potential.',
    },
    {
      title: 'FastSpin',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/fastspin.png',
      description:
        'A rising star in the fishing game Australia scene, FastSpin is known for innovation and visual polish. Fishing Treasure is one of their flagship titles, offering jackpot modes, high RTPs, and an engaging user experience across devices.',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: '#000000' }}
        >
          Trusted Fishing Game Providers at Truedinkumbet Online Casino
        </h2>

        <p
          className="text-center mb-12 text-lg"
          style={{
            color: '#7a7a7a',
            lineHeight: '1.8',
          }}
        >
          Truedinkumbet partners only with licensed, respected providers to ensure a
          high-quality gaming experience. Here's a quick look at the trusted names behind your
          favorite fishing games:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={provider.image}
                alt={provider.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto mb-6 max-h-40 object-contain"
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#000000' }}
              >
                {provider.title}
              </h3>
              <p
                style={{
                  color: '#7a7a7a',
                  lineHeight: '1.8',
                  fontSize: '16px',
                }}
              >
                {provider.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
          <p
            style={{
              color: '#7a7a7a',
              lineHeight: '1.8',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            By choosing Truedinkumbet online casino, you get access to these trusted developers
            and their best-performing fishing games are safe, fair, and action-packed.
          </p>
        </div>
      </div>
    </section>
  );
}
