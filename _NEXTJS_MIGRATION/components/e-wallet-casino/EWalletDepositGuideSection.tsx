export default function EWalletDepositGuideSection() {
  const steps = [
    {
      step: 1,
      title: "Visit Truedinkumbet",
      description: "First, visit the online platform of Truedinkumbet. You can log in to your casino account through our web-optimized platform or download the Truedinkumbet app.",
    },
    {
      step: 2,
      title: "Click Deposit Button",
      description: "Once you are in your account, notice the Deposit button in the right section of the website header. Click on it to be redirected to our e-wallet deposit page.",
    },
    {
      step: 3,
      title: "Select Your Preferred Method",
      description: "The deposit page comprises various online payment methods, including e-wallet options. From our list of approved e-wallets, choose the method you prefer.",
    },
    {
      step: 4,
      title: "Deposit The Money",
      description: "As you click on your chosen method, our site will prompt you to complete the process. Follow the instructions precisely to load your account with your desired amount.",
    },
    {
      step: 5,
      title: "Completion",
      description: "Your money will be credited to your account immediately. You're ready to start playing your favorite games!",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          How to Deposit Using E-Wallet in Truedinkumbet?
        </h2>
        
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          If you plan to deposit funds in your casino account, go through our simple registration process first. We have kept this entire process quite easy so that you can be an esteemed member of our gambling platform without going through complicated procedures.
        </p>

        <div className="space-y-6 mb-12">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Important Reminders</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Always check the latest active deposit bank details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Your banking account name must match your registration name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Avoid using company or third-party accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>All deposits subject to 1x turnover requirement</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Deposit Benefits</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Instant account credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Automatic bonus assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Secure transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://truedinkumbet.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Deposit Now
          </a>
        </div>
      </div>
    </section>
  );
}
