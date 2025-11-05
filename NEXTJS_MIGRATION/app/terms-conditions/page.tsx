import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms & Conditions - Truedinkumbet',
  description: 'Read the terms and conditions for using Truedinkumbet.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#1f2124' }}>Terms & Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>1. General</h2>
              <p style={{ color: '#6b7280' }}>
                When you use Truedinkumbet's main domain, subdomains, or links connected to Truedinkumbet's social media pages, you are entering into a legally binding agreement with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>2. Membership Account</h2>
              <p style={{ color: '#6b7280' }}>
                To open an account, you must be at least 18 years old and meet all eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>3. Deposits and Withdrawals</h2>
              <p style={{ color: '#6b7280' }}>
                All deposits and withdrawals are subject to our verification procedures.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
