export default function FishingWhyChooseSection() {
  const features = [
    {
      title: 'Top Providers',
      description: 'BK8 features fishing games from leading developers like Spadegaming, JILI Games, and FastSpin.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Wide-Range-of-Games.png',
    },
    {
      title: 'Localized Platform',
      description: 'The site supports MYR deposits and e-wallets like Touch \'n Go and DuitNow.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Licensed-and-Trusted.png',
    },
    {
      title: 'Fast & Secure',
      description: 'BK8 is fully licensed and offers secure payments and instant withdrawals.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Mobile-Friendly.png',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Clean layout, intuitive controls, and optimized for both desktop and mobile users.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/High-Quality-Graphics.png',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: '#1f2124' }}
        >
          Why Choose BK8 for Online Fishing Games?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  width="100"
                  height="100"
                  className="w-24 h-24"
                />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: '#1f2124' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
