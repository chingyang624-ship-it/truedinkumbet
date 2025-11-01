export default function LiveCasinoWhyChooseSection() {
  const reasons = [
    {
      title: 'Real Dealers, Real Tables',
      description: 'Experience authentic casino gameplay with professional live dealers streaming in real-time.',
    },
    {
      title: 'HD Streaming Quality',
      description: 'Crystal-clear video and audio streams ensure you never miss a moment of the action.',
    },
    {
      title: 'Multiple Game Varieties',
      description: 'Play classic games like Baccarat, Roulette, Blackjack, and more exclusive live games.',
    },
    {
      title: 'Aussie Providers',
      description: 'Access the best live casino providers tailored for Australian players.',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Why Play Live Casino Games Online in Australia?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1f2124' }}>
                {reason.title}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
