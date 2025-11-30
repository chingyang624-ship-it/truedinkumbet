export default function AboutValuesSection() {
  const values = [
    {
      letter: 'F',
      title: 'Fast',
      description: 'Deposits and withdrawals are processed quickly, and all games run smoothly without lag thanks to cutting-edge technology.',
    },
    {
      letter: 'I',
      title: 'Innovative',
      description: 'We work closely with top developers to regularly introduce fresh, high-quality games with engaging graphics and audio.',
    },
    {
      letter: 'R',
      title: 'Rewarding',
      description: 'Bonuses and promotions are continually updated to enhance your excitement on our platform.',
    },
    {
      letter: 'S',
      title: 'Secure',
      description: 'Advanced security measures ensure every transaction is safe and all personal data remains fully protected.',
    },
    {
      letter: 'T',
      title: 'Transparent',
      description: 'All processes and bonus terms are clearly explained and fair; there are no hidden conditions or rigged games ever.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-10">
          Truedinkumbet Player-First Values (F.I.R.S.T.)
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          To achieve our objectives, Truedinkumbet adheres to a F.I.R.S.T. philosophy—an acronym that reflects our drive to deliver excellence:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-6 py-4 text-left font-bold text-gray-900">Letter</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Value</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {values.map((value) => (
                <tr key={value.letter} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-lg text-gray-900">{value.letter}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{value.title}</td>
                  <td className="px-6 py-4 text-gray-700">{value.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Every game on the Truedinkumbet platform is professionally regulated and licensed, allowing you to play with complete confidence.
        </p>
      </div>
    </section>
  );
}
