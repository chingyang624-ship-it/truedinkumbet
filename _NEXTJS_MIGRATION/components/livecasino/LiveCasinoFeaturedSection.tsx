export default function LiveCasinoFeaturedSection() {
  const featuredProviders = [
    {
      name: "Evolution Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-evo.webp",
      games: "Roulette, Blackjack, Baccarat",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Live Casino Providers
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Play with the best live casino providers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProviders.map((provider, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <div className="relative pb-[133%]">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{provider.games}</p>
                <a
                  href="https://truedinkumbet.com/RFSEOTDK"
                  className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors text-center block"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
