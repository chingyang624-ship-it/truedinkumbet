const providers = [
  {
    name: 'Pragmatic Play',
    description:
      'This fan-favorite provider powers some of the most dynamic slots at Truedinkumbet. Games like Gates of Olympus offer high volatility, multipliers, and regular "Drops & Wins" tournaments for cash prizes.',
    logo: 'https://bk8mycasino.com/wp-content/uploads/2023/05/pragmatic-play-logo.webp',
    featured: 'Gates of Olympus',
  },
  {
    name: 'Booongo',
    description:
      'Popular in the Asia-Pacific market, BNG has also gained strong traction in the Australian market. Known for vibrant visuals and creative gameplay. Titles like Super Pink Joker feature free spin bonuses and engaging themes optimized for mobile.',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9d1a8148f05547549c43fa2220f56fef',
    featured: 'Super Pink Joker',
  },
  {
    name: 'Spadegaming',
    description:
      'A trusted name for Australian players, Spadegaming delivers culturally relevant games like Roma with rich storylines, bonus games, and high win potential.',
    logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/spadegaming-logo-1-1024x270.png',
    featured: 'Roma',
  },
  {
    name: '918Kiss',
    description:
      'An iconic brand in the slot game Australia scene, 918Kiss focuses on simplicity and fast gameplay. Its classic slots remain a go-to choice for players who enjoy retro-style games with real win potential.',
    logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/kiss918-logo-1024x724.png',
    featured: 'Classic Slots',
  },
  {
    name: 'Microgaming',
    description:
      'As one of the pioneers in online gaming, Microgaming is home to the famous Mega Moolah series. These games are known for life-changing progressive jackpots and smooth gameplay.',
    logo: 'https://bk8mycasino.com/wp-content/uploads/2025/06/microgaming-logo-1024x724.png',
    featured: 'Mega Moolah',
  },
];

export default function SlotsProvidersSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Trusted Online Slot Game Providers and Their Exclusive Offers
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Truedinkumbet partners only with certified, respected slot developers, ensuring fair play, smooth gameplay, and exciting bonus features. Here are some of the trusted slot game Australia providers featured at Truedinkumbet:
        </p>

        <div className="space-y-12">
          {providers.map((provider, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/3">
                <img src={provider.logo} alt={provider.name} className="max-h-20 w-auto" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{provider.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-2">{provider.description}</p>
                <p className="text-sm text-gray-500">Featured Game: <em>{provider.featured}</em></p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg">
          <p className="text-center text-gray-600">
            All of these providers are available in the Truedinkumbet slot section, accessible with just a few clicks.
          </p>
        </div>
      </div>
    </section>
  );
}
