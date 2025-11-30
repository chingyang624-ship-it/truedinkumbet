export default function DetailedWhyChooseSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Top Reasons Players Choose Truedinkumbet
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Players choose Truedinkumbet because we offer higher RTP, faster
          withdrawals, and more exclusive promotions than others. With certified
          fair play, strong security, and wider sportsbook coverage, we deliver
          a safer and more rewarding experience. This combination of trust and
          performance makes us the top choice for online casino players in
          Australia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Licensing & Regulation */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Licensing & Regulation
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Truedinkumbet is licensed and regulated by the{" "}
              <strong>
                Philippine Amusement and Gaming Corporation (PAGCOR)
              </strong>
              , under License No. <strong>ALSI-202504032-FI2</strong>.
            </p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              With certifications from <strong>BMM Testlabs</strong>,{" "}
              <strong>iTech Labs</strong>, and{" "}
              <strong>Gaming Laboratories International (GLI)</strong>, every
              game is tested for fairness and all operations comply with
              responsible gambling frameworks.
            </p>
          </div>

          {/* Column 2: Why Trust Us */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Why Players Trust Truedinkumbet
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600">
                  <strong>Higher RTP</strong> - Better odds and payout rates
                  than competitors
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600">
                  <strong>Fast Withdrawals</strong> - 92% processed within 15
                  minutes
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600">
                  <strong>24/7 Support</strong> - Always available via chat,
                  email, or phone
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600">
                  <strong>Wide Coverage</strong> - Broader sportsbook and game
                  selection
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600">
                  <strong>SSL Encryption</strong> - All transactions secured
                  with advanced protection
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Exclusive Promotions */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Exclusive Promotions
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">🎁</span>
                <span className="text-gray-600">
                  <strong>Welcome Bonus</strong> - 100% match on first deposit
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">🎁</span>
                <span className="text-gray-600">
                  <strong>VIP Rewards</strong> - Exclusive perks for loyal
                  players
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">🎁</span>
                <span className="text-gray-600">
                  <strong>Daily Reload</strong> - Bonus credits every day
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">🎁</span>
                <span className="text-gray-600">
                  <strong>Cashback</strong> - Get back a percentage of losses
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">🎁</span>
                <span className="text-gray-600">
                  <strong>Birthday Bonus</strong> - Special birthday rewards
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Multi-Payment Support */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Multi-Payment Support
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Payment Methods
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>💳 Credit & Debit Cards</li>
                  <li>📱 E-Wallets (PayPal, etc.)</li>
                  <li>🏦 Bank Transfer</li>
                  <li>₿ Cryptocurrency (Bitcoin, USDT)</li>
                  <li>💰 Local Payment Methods</li>
                </ul>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs text-gray-600">
                  <strong>Fast Deposits:</strong> Instant to 1 hour
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Fast Withdrawals:</strong> 15 minutes - 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
