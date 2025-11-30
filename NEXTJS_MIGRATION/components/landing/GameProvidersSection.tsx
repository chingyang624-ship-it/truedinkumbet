"use client";

export default function GameProvidersSection() {
  const providers = [
    { name: "Evolution Gaming", logo: "🎮" },
    { name: "Pragmatic Play", logo: "🎰" },
    { name: "Microgaming", logo: "🎲" },
    { name: "NetEnt", logo: "🎯" },
    { name: "Playtech", logo: "🃏" },
    { name: "Play'n GO", logo: "🎪" },
    { name: "Red Tiger", logo: "🐅" },
    { name: "Yggdrasil", logo: "🌳" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Top-Tier Game Providers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We partner with the world's leading game developers to bring you the best gaming experience
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{provider.logo}</div>
              <p className="text-sm font-semibold text-gray-800 text-center">
                {provider.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
