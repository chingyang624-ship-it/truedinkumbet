const bonuses = [
  {
    title: '288% "Have You Truedinkumbet?" Welcome Bonus',
    description:
      'New players can claim a huge 288% welcome bonus on their first deposit. Whether you\'re into slots, sports, or live casino games, this offer gives you a solid bankroll to get started.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/Instant-Birthday-Cash-Bonus.png',
  },
  {
    title: 'Claim 188 Slots Free Spins',
    description: 'Enjoy 188 free spins on popular slot games. A great way to explore new titles and win real cash without spending your own.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/Claim-188-Slots-Free-Spins.png',
  },
  {
    title: 'Instant Birthday Cash Bonus',
    description:
      'Celebrate your birthday with a special treat from Truedinkumbet. Just verify your identity, and your birthday cash will be instantly credited to your account.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/Instant-Birthday-Cash-Bonus.png',
  },
  {
    title: 'You Play, We Pay',
    description:
      'This promo acts like cashback — the more you play, the more you get back. Great for regulars who want to stretch their bankrolls further.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/You-Play-We-Pay-a-kind-of-extra-financial-boost-to-start-betting.png',
  },
  {
    title: 'Truedinkumbet App Exclusive Daily Reload Bonus',
    description:
      'Using the mobile app? You get daily reload bonuses just for playing. These exclusive offers keep your balance topped up and your gameplay going strong.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/Daily-Reload-Bonus.png',
  },
  {
    title: 'Weekly Rescue Bonus',
    description:
      'Truedinkumbet offers a weekly rebate if your week didn\'t go as planned. It\'s a little financial push to help you bounce back and keep playing with confidence.',
    image: 'https://truedinkumbet.com/wp-content/uploads/2025/06/Weekly-Rescue-Bonus.png',
  },
];

export default function BonusesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Truedinkumbet Bonuses and Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <img src={bonus.image} alt={bonus.title} className="w-24 h-24 mx-auto mb-4 rounded" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{bonus.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
