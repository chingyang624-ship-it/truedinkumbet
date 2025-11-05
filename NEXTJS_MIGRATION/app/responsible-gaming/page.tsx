import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Responsible Gaming - Truedinkumbet',
  description: 'Truedinkumbet promotes responsible gaming and player protection.',
}

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#1f2124' }}>Responsible Gaming</h1>
          <p className="text-lg mb-6" style={{ color: '#6b7280' }}>
            At Truedinkumbet, we are committed to promoting responsible gaming and protecting our players.
          </p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>Player Protection</h2>
          <ul className="space-y-2" style={{ color: '#6b7280' }}>
            <li>• Deposit limits</li>
            <li>• Session timeouts</li>
            <li>• Self-exclusion options</li>
            <li>• Access to support resources</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
