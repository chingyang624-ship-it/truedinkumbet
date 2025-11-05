export default function BonusesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Welcome Bonuses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">100% Welcome Bonus</h3>
            <p>Up to 10,000 on your first and second deposits</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Daily Promotions</h3>
            <p>Exclusive offers every single day</p>
          </div>
        </div>
      </div>
    </section>
  )
}
