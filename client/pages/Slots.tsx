import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SlotsHeroSection from '@/components/slots/SlotsHeroSection';
import SlotsCarouselSection from '@/components/slots/SlotsCarouselSection';
import SlotsIntroSection from '@/components/slots/SlotsIntroSection';
import SlotsWhyChooseSection from '@/components/slots/SlotsWhyChooseSection';
import SlotsProvidersSection from '@/components/slots/SlotsProvidersSection';
import SlotsPopularGamesSection from '@/components/slots/SlotsPopularGamesSection';
import SlotsBonusesSection from '@/components/slots/SlotsBonusesSection';
import SlotsTipsSection from '@/components/slots/SlotsTipsSection';
import SlotsFAQSection from '@/components/slots/SlotsFAQSection';

export default function Slots() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SlotsHeroSection />
        <section className="py-6 px-4" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="max-w-6xl mx-auto">
            {/* Desktop buttons */}
            <div className="hidden md:flex gap-4 justify-center flex-wrap">
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

            {/* Mobile buttons (red and blue) */}
            <div className="md:hidden flex gap-2">
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="flex-1 py-3 bg-red-700 text-white font-semibold text-center rounded hover:bg-red-800 transition-colors"
              >
                Join
              </a>
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="flex-1 py-3 bg-blue-600 text-white font-semibold text-center rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        </section>
        <SlotsCarouselSection />
        <SlotsIntroSection />
        <SlotsWhyChooseSection />
        <SlotsProvidersSection />
        <SlotsPopularGamesSection />
        <SlotsBonusesSection />
        <SlotsTipsSection />
        <SlotsFAQSection />
      </main>
      <Footer />
    </div>
  );
}
