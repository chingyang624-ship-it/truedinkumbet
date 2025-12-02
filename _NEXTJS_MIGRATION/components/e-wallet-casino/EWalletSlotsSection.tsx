export default function EWalletSlotsSection() {
  const providers = [
    {
      name: "Pragmatic Play",
      image: "https://www.bk8.services/wp-content/uploads/2020/03/pragmaticplay-300x90.png",
      description: "Gates of Olympus, Sweet Bonanza",
    },
    {
      name: "JILI",
      image: "https://www.bk8.services/wp-content/uploads/2022/06/BK8-E-Wallet-Slot-Games-Providers.png",
      description: "Golden Empire, Crazy 777, MoneyComing",
    },
    {
      name: "SpadeGaming",
      image: "https://www.bk8.services/wp-content/uploads/2020/03/spadegaming-300x90.png",
      description: "Cai Shen 888, Double Flame, Roma",
    },
    {
      name: "Microgaming",
      image: "https://www.bk8.services/wp-content/uploads/2020/03/microgaming-300x90.png",
      description: "Soccer Striker, Fruit Blast, 9 Masks of Fire",
    },
    {
      name: "NextSpin",
      image: "https://www.bk8.services/wp-content/uploads/2020/03/pragmaticplay-300x90.png",
      description: "Long Long Long, 7 Dragons, Buffalo King",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          The Best Slot E-Wallet Casino Games
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          At Truedinkumbet online casino, we love being a master of tendering players with nearly every possible avenue of wagering money online. Our slot e-wallet compilation snatches the limelight with ease due to its affluence in diversity, presence of high-paying games, and variety in their themes and gaming setups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Truedinkumbet Slots?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Easy to learn and exceptionally engaging gameplay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Relaxing experience without social communication required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Innovative fruit machines with limited paylines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Video slots with heavy graphics and extensive storylines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Titles with thousands of winning ways</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Top Slot Providers</h3>
            <p className="text-gray-700 mb-6">
              We've partnered with the world's top-tier slot machine developers to bring you the best gaming experience.
            </p>
            {providers.slice(0, 3).map((provider, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <h4 className="font-bold text-gray-900">{provider.name}</h4>
                <p className="text-sm text-gray-600">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Featured Game Providers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {providers.map((provider, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
