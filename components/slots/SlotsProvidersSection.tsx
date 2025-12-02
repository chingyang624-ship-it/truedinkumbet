const providers = [
  {
    name: "918Kiss / Kiss918",
    description:
      "A Malaysian favorite for years, 918Kiss (also known as Kiss918) is known for its smooth gameplay, classic slot feel, and high RTP rates. Players love titles like Great Blue and Highway Kings for their nostalgic yet rewarding experience.",
  },
  {
    name: "SCR888",
    description:
      "SCR888 is one of the oldest online slot providers in Malaysia. With simple mechanics and straightforward wins, it's the go-to for beginners. The platform focuses on player experience, offering consistent payouts and stable performance across devices.",
  },
  {
    name: "Mega888",
    description:
      "Mega888 is popular among mobile users. The app offers a mix of slots and mini-games, all with fast loading and attractive bonuses. Many Malaysian players rate Mega888 as the 'easiest to win' slot platform.",
  },
  {
    name: "Asia Gaming",
    description:
      "Asia Gaming (AG) provides locally themed slot titles inspired by Asian myths and traditions. Their graphics and sounds appeal strongly to Malaysian players who enjoy a cultural connection while spinning for prizes.",
  },
  {
    name: "SpadeGaming",
    description:
      "With hits like Cai Shen 888 and Double Flame, SpadeGaming has a cult following. The games are colorful, fast-paced, and built to attract players who enjoy quick action and high volatility slots.",
  },
  {
    name: "Microgaming",
    description:
      "Microgaming is a global legend in online slot software. Their titles — such as Mega Moolah and Immortal Romance — are loved for big jackpots and progressive prizes. If you want to chase life-changing wins, Microgaming's slots are the place to start.",
  },
  {
    name: "SA Gaming",
    description:
      "SA Gaming brings triple-A graphics and immersive sound effects to the table. Every slot feels premium, and it's clear why SA Gaming remains one of Asia's top developers for both live and slot games.",
  },
  {
    name: "Playtech",
    description:
      "As one of the world's biggest software brands, Playtech continues to innovate with every release. Their omnichannel gaming experience means you can switch between desktop and mobile without losing progress — ideal for Malaysian players on the go.",
  },
];

export default function SlotsProvidersSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
          Top Online Slot Providers at BK8 Malaysia
        </h2>

        <div className="space-y-12">
          {providers.map((provider, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                {index + 1}. {provider.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {provider.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-center text-gray-600">
            All of these providers are available in the BK8 slot section, accessible
            with just a few clicks.
          </p>
        </div>
      </div>
    </section>
  );
}
