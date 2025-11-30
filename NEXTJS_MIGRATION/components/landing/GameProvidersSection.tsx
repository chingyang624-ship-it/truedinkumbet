"use client";

export default function GameProvidersSection() {
  const providers = [
    { 
      name: "Evolution Gaming", 
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7495d6913744419fb529ec28af93f0a1?format=webp&width=800" 
    },
    {
      name: "Pragmatic Play",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5cf83950d1894db7a800916fa976bc64?format=webp&width=800"
    },
    {
      name: "Microgaming",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F96b968ba065a4b0ca4d56aa47bf558e1?format=webp&width=800"
    },
    { 
      name: "Playtech", 
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdd0b2c1988574f75b311ef206ea39cbe?format=webp&width=800" 
    },
    { 
      name: "Play'n GO", 
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4988d426ac444e389741208ababcfecf?format=webp&width=800" 
    },
    { 
      name: "Red Tiger", 
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fda9462dd466940c59768a2191f76eb3b?format=webp&width=800" 
    },
    { 
      name: "Yggdrasil", 
      logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4b237b89427e497aafe3458f7e14ad6f?format=webp&width=800" 
    },
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
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow min-h-[120px]"
            >
              <img
                src={provider.logo}
                alt={provider.name}
                className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
