export default function LiveCasinoAllProvidersGridSection() {
  const providers = [
    {
      name: "Evolution Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-evo.webp",
      badge: "Hot",
    },
    {
      name: "AE Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-ug.webp",
      badge: "Hot",
    },
    {
      name: "Pragmatic Play Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-pp.webp",
      badge: "Hot",
    },
    {
      name: "Asia Gaming Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-ag.webp",
      badge: null,
    },
    {
      name: "SA Gaming Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-sa.webp",
      badge: "Hot",
    },
    {
      name: "WM Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-wm.webp",
      badge: "New",
    },
    {
      name: "Dragon Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-dg.webp",
      badge: "Hot",
    },
    {
      name: "Big Gaming Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-bg.webp",
      badge: "New",
    },
    {
      name: "Truedinkumbet Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-ebet.webp",
      badge: null,
    },
    {
      name: "Allbet Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-allbet.webp",
      badge: null,
    },
    {
      name: "Microgaming Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-mg.webp",
      badge: null,
    },
    {
      name: "Gameplay Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-gp.webp",
      badge: null,
    },
    {
      name: "Playtech Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-pt.webp",
      badge: null,
    },
    {
      name: "Binl Live Casino",
      image:
        "https://www.bk8.services/wp-content/uploads/2023/08/casino-binl.webp",
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
