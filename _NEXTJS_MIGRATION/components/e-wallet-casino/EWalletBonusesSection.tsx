export default function EWalletBonusesSection() {
  const bonuses = [
    {
      title: "Free Credit Offers",
      description: "Claim free credit bonuses without making any deposit. We'll load your account with the offer value, and you can invest it in different games and win real money.",
      icon: "🎁",
    },
    {
      title: "Welcome Bonus",
      description: "Receive an exclusive welcome bonus right after registration. Deposit as per the terms and conditions to get your bonus credited immediately. AUD 1,080 welcome bonus available.",
      icon: "🎉",
    },
    {
      title: "Daily Reload Bonuses",
      description: "Enjoy your bankroll being increased every day with our daily reload bonus offers. Match-up bonuses that reward your consistent play.",
      icon: "💰",
    },
    {
      title: "Referral Bonus",
      description: "Refer your friends and family to Truedinkumbet and both of you receive attractive bonus prizes. Share your referral code and earn rewards.",
      icon: "👥",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          E-Wallet Casino Bonuses
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          We know that no other facilities of online casinos can suffice the scarcity of promotions and bonuses offered by the platform provider. Hence, we would love to keep you amidst the prosperity of both of them. A galore of offers come from our end routinely and remain active so that each of our eligible users can enjoy their benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gray-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{bonus.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{bonus.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Our Bonus Range</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We know that no other facilities of online casinos can suffice the scarcity of promotions and bonuses offered by the platform provider. Hence, we would love to keep you amidst the prosperity of both of them. A galore of offers come from our end routinely and remain active so that each of our eligible users can enjoy their benefits.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Free credit bonuses have been more widely available in Australia in recent years. They are also often known as bonus credit opportunities. Our e-wallet bonus range occurs in free credit offers, money discounts, and many exclusive prizes that players continuously receive from us.
          </p>
          <p className="text-sm text-gray-600">
            Besides, we also have an elongated catalogue of welcome offers. Simultaneously, you will find several competitions and campaigns concurrently tendering gamblers with free spins, monetary prizes, wager credits, and more.
          </p>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <a
            href="https://truedinkumbet.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Claim Bonus Now
          </a>
        </div>
      </div>
    </section>
  );
}
