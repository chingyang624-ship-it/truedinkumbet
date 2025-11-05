import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CryptoCasinoHeroSection from '@/components/crypto-casino/CryptoCasinoHeroSection';
import CryptoCasinoIntroSection from '@/components/crypto-casino/CryptoCasinoIntroSection';
import CryptoCasinoWhyChooseSection from '@/components/crypto-casino/CryptoCasinoWhyChooseSection';
import CryptoCasinoProvidersSection from '@/components/crypto-casino/CryptoCasinoProvidersSection';
import CryptoCasinoFeaturesSection from '@/components/crypto-casino/CryptoCasinoFeaturesSection';
import CryptoCasinoFAQSection from '@/components/crypto-casino/CryptoCasinoFAQSection';

export default function CryptoCasino() {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: "910px" }}>
      <Header />
      <main className="flex-1">
        <CryptoCasinoHeroSection />
        <section className="w-full">
          <div className="hidden md:flex gap-4 justify-center py-6 px-4">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: '#ffffff',
                color: '#1f2124',
                border: '1px solid #ddd',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-bold text-white transition-colors"
              style={{
                backgroundColor: '#ff6500',
              }}
            >
              Join Now
            </a>
          </div>

          <div className="md:hidden w-full flex gap-0">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 py-3 bg-red-700 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Join
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 py-3 bg-blue-600 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Login
            </a>
          </div>
        </section>
        <CryptoCasinoIntroSection />
        <CryptoCasinoWhyChooseSection />
        <CryptoCasinoProvidersSection />
        <CryptoCasinoFeaturesSection />
        <CryptoCasinoFAQSection />
      </main>
      <Footer />
    </div>
  );
}
