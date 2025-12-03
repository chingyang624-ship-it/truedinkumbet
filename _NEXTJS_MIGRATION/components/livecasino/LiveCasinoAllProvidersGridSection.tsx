export default function LiveCasinoAllProvidersGridSection() {
  const providers = [
    {
      name: "Evolution Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F17bcbc97eef146d3a9436eca8beb663e?format=webp",
      badge: "Hot",
    },
    {
      name: "AE Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe4f8258df9ef4a5fa97d5785dcab15dc?format=webp",
      badge: "Hot",
    },
    {
      name: "Pragmatic Play Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6f60c743633b4d92b3b192e8c40e7e67?format=webp",
      badge: "Hot",
    },
    {
      name: "Asia Gaming Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9e2922065a1d43e795cc9b984de09673?format=webp",
      badge: null,
    },
    {
      name: "SA Gaming Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb9c81c15976d48368cb0742ba575b761?format=webp",
      badge: "Hot",
    },
    {
      name: "WM Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4278e4a8abae4cbfa498331bd382659b?format=webp",
      badge: "New",
    },
    {
      name: "Dragon Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F68a009626ce045cf9454d173aa196ac4?format=webp",
      badge: "Hot",
    },
    {
      name: "Big Gaming Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc2cd3eaf403a42248b6303c0655de3d4?format=webp",
      badge: "New",
    },
    {
      name: "Binl Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F68a7d75bf49f4c3ea55e5189a2a5ea63?format=webp",
      badge: null,
    },
    {
      name: "Allbet Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fce286e93999d499e9cb6b979e8233eea?format=webp",
      badge: null,
    },
    {
      name: "Microgaming Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc65670ea1a28499caaed109b76b69c3c?format=webp",
      badge: null,
    },
    {
      name: "Gameplay Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4bb580436eb941dcb958274f5f998a2c?format=webp",
      badge: null,
    },
    {
      name: "Playtech Live Casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fba8f9971648849f7a0f1ca672bc603c0?format=webp",
      badge: null,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {providers.map((provider, index) => (
            <div key={index} className="relative">
              <img
                decoding="async"
                alt={provider.name}
                width="240"
                height="300"
                loading="lazy"
                src={provider.image}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
