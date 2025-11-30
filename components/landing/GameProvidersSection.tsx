"use client";

export default function GameProvidersSection() {
  const providers = [
    { name: "Evolution Gaming", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd70ed0c152e24c659f1bdcb32bd4d1cc" },
    { name: "Pragmatic Play", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9d4a67dcc46542b182f48cd4cc324a41" },
    { name: "Microgaming", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F30246c2dd4034e0a9bfd510466932b24" },
    { name: "NetEnt", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0f9112dcba64412a9879ce1d9588d138" },
    { name: "Playtech", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd70ed0c152e24c659f1bdcb32bd4d1cc" },
    { name: "Play'n GO", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9d4a67dcc46542b182f48cd4cc324a41" },
    { name: "Red Tiger", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F30246c2dd4034e0a9bfd510466932b24" },
    { name: "Yggdrasil", logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0f9112dcba64412a9879ce1d9588d138" },
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
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img
                src={provider.logo}
                alt={provider.name}
                className="h-12 w-auto"
                style={{ filter: "grayscale(0.3)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
