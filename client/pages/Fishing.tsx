import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FishingHeroSection from '@/components/fishing/FishingHeroSection';
import FishingIntroSection from '@/components/fishing/FishingIntroSection';
import FishingCarouselSection from '@/components/fishing/FishingCarouselSection';
import FishingProvidersSection from '@/components/fishing/FishingProvidersSection';
import FishingAboutSection from '@/components/fishing/FishingAboutSection';
import FishingWhyChooseSection from '@/components/fishing/FishingWhyChooseSection';
import FishingGamesSection from '@/components/fishing/FishingGamesSection';
import FishingProvidersDetailsSection from '@/components/fishing/FishingProvidersDetailsSection';
import FishingMobileAppSection from '@/components/fishing/FishingMobileAppSection';
import FishingFAQSection from '@/components/fishing/FishingFAQSection';

export default function Fishing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FishingHeroSection />
        <FishingIntroSection />
        <FishingCarouselSection />
        <FishingProvidersSection />
        <FishingAboutSection />
        <FishingWhyChooseSection />
        <FishingGamesSection />
        <FishingProvidersDetailsSection />
        <FishingMobileAppSection />
        <FishingFAQSection />
      </main>
      <Footer />
    </div>
  );
}
