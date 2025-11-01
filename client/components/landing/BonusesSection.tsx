const bonuses = [
  {
    title: '100% "Have You Truedinkumbet?" Welcome Bonus',
    description:
      'New players can enjoy a massive 100% welcome bonus on their first and second deposits, exclusively for slot games. Spin your way to big wins with Truedinkumbet\'s exciting collection of slots!',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6d54e2d1325f4c089d7f7418e2ef603f',
  },
  {
    title: 'Claim 1888 Jackpot Cash',
    description: 'Enjoy 1888 jackpot cash on popular Truedinkumbet. A great way to explore new titles and win real cash without spending your own.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F79d07dae9d48497ea47a914a665b58a2',
  },
  {
    title: 'Instant Birthday Cash Bonus',
    description:
      'Celebrate your birthday with a special treat from Truedinkumbet. Just verify your identity, and your birthday cash will be instantly credited to your account.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6d54e2d1325f4c089d7f7418e2ef603f',
  },
  {
    title: 'You Play, We Pay',
    description:
      'This promo acts like cashback — the more you play, the more you get back. Great for regulars who want to stretch their bankrolls further.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F57dc2a3174f44066a33bcef5e1585741',
  },
  {
    title: 'Truedinkumbet App Exclusive Daily Reload Bonus',
    description:
      'Using the mobile app? You get daily reload bonuses just for playing. These exclusive offers keep your balance topped up and your gameplay going strong.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F353c7407950a4ab3a0364d43f4a8f43f',
  },
  {
    title: 'Daily Rescue Bonus',
    description:
      'Truedinkumbet offers a Daily rebate if your day didn\'t go as planned. It\'s a little financial push to help you bounce back and keep playing with confidence.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fbc62c096dabe4ef795785a564f133043',
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
