import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SlotsHeroSection from '@/components/slots/SlotsHeroSection';
import SlotsCarouselSection from '@/components/slots/SlotsCarouselSection';
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
        <SlotsCarouselSection />
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
