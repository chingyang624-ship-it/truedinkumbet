import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FishingHeroSection from "@/components/fishing/FishingHeroSection";
import FishingCarouselSection from "@/components/fishing/FishingCarouselSection";
import FishingProvidersSection from "@/components/fishing/FishingProvidersSection";
import FishingIntroSection from "@/components/fishing/FishingIntroSection";
import FishingWhyChooseSection from "@/components/fishing/FishingWhyChooseSection";
import FishingGamesSection from "@/components/fishing/FishingGamesSection";
import FishingProvidersDetailsSection from "@/components/fishing/FishingProvidersDetailsSection";
import FishingMobileAppSection from "@/components/fishing/FishingMobileAppSection";
import FishingFAQSection from "@/components/fishing/FishingFAQSection";

export const metadata = {
  title: "Truedinkumbet Fishing Games - Play Fishing Game Online Australia",
  description:
    "Enjoy exciting fishing games at Truedinkumbet with amazing graphics, huge payouts, and exclusive bonuses for Australian players.",
};

export default function FishingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <FishingHeroSection />
        <FishingCarouselSection />
        <FishingProvidersSection />
        <FishingIntroSection />
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
