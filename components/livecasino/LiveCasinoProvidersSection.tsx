export default function LiveCasinoProvidersSection() {
  const providers = [
    {
      name: 'Pragmatic Play',
      description: 'Experience the excitement of Pragmatic Play Live Casino, featuring premium games like blackjack, baccarat, and popular game shows. With flawless streaming, professional dealers, and multi-language support, it\'s the ultimate live casino experience for players in Australia and beyond.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd311eed0693347ae8ec9768f049bf589',
      imageStyle: {},
    },
    {
      name: 'Playtech',
      description: 'Playtech\'s live tables offer a clean, reliable interface with classic games like roulette, blackjack, and baccarat. The streams are smooth, the betting system is intuitive, and mobile performance is top-notch.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd45218bbd03940af845fa4746f921e5f',
      imageStyle: { marginTop: '26px' },
    },
    {
      name: 'Sexy Baccarat',
      description: 'Sexy Baccarat is one of the most popular live casino games among Australian players. With friendly, English-speaking dealers and an energetic atmosphere, each table feels personal and engaging. The game combines the thrill of classic baccarat with lively presentation and real-time interaction — making it a perfect choice for players who enjoy a more dynamic live casino experience.',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd389399b08dc4065a8c2c80aeaf096ca?format=webp',
      imageStyle: { margin: '14px 0 0 -3px' },
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
                  style={{ maxHeight: '200px', maxWidth: '320px', ...provider.imageStyle }}
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
