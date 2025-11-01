export default function LiveCasinoMobileAppSection() {
  const features = [
    'Real-time HD streams',
    'Touch-optimized betting interfaces',
    'Quick access to account and payment features',
    'Live chat with dealers and players',
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#1f2124' }}>
          Truedinkumbet Mobile App Experience: Live Casino Anytime, Anywhere
        </h2>

        <p className="text-lg text-center mb-8" style={{ color: '#6b7280', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 32px' }}>
          Truedinkumbet knows that most players want to game on the go. That's why the Truedinkumbet live casino platform is fully optimized for mobile devices. Whether you're using Android or iOS, you can access all your favorite tables directly from your smartphone.
        </p>

        <p style={{ color: '#6b7280', fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>
          The mobile version offers:
        </p>

        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '12px', maxWidth: '600px', margin: '0 auto 32px' }}>
          {features.map((feature, index) => (
            <li key={index} style={{ color: '#6b7280', fontSize: '16px', padding: '8px 0' }}>
              • {feature}
            </li>
          ))}
        </ul>

        <p style={{ color: '#6b7280', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Whether you're on your couch or commuting, you can enjoy the full live casino online Australia experience in your palm anytime, anywhere.
        </p>
      </div>
    </section>
  );
}
