export default function FishingProvidersSection() {
  const providers = [
    {
      name: 'NextSpin',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-ns.webp',
    },
    {
      name: 'Spadegaming',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-sg.webp',
      badge: 'Hot',
      badgeColor: '#ff650f',
    },
    {
      name: 'JILI',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-jl.webp',
      badge: 'New',
      badgeColor: '#e00928',
    },
    {
      name: 'YGR',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-ygr.webp',
    },
    {
      name: 'Fa Chai',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-fc.webp',
    },
    {
      name: 'CQ9',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-cq9.webp',
    },
    {
      name: 'JDB',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-jdb.webp',
      badge: 'New',
      badgeColor: '#e00928',
    },
    {
      name: 'PS',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/fishing-ps.webp',
      badge: 'New',
      badgeColor: '#e00928',
    },
  ];

  return (
    <section className="w-full px-4 py-8 md:py-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {providers.map((provider, index) => (
            <div key={index} className="text-center relative">
              {provider.badge && (
                <div
                  style={{
                    backgroundColor: provider.badgeColor,
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '15px',
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    zIndex: 10,
                  }}
                >
                  {provider.badge}
                </div>
              )}
              <a
                href="https://bk8mycasino.com/go/fishing"
                target="_blank"
                rel="sponsored noopener"
                className="block"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="300"
                  className="w-full h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
