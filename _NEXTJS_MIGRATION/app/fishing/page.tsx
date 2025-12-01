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
import FishingComprehensiveSEOContent from "@/components/fishing/FishingComprehensiveSEOContent";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export default function FishingPage() {
  const relatedGames = [
    {
      title: "Online Slots",
      description:
        "Play thousands of online slot games with high RTP and big wins. From classic to progressive jackpot slots.",
      href: "/slots",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b",
    },
    {
      title: "Live Casino",
      description:
        "Experience authentic live casino gaming with professional dealers. Play live blackjack, roulette, baccarat, and more.",
      href: "/live-casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    },
    {
      title: "Sports Betting",
      description:
        "Bet on all major sports with competitive odds and live betting. Football, basketball, cricket, and more.",
      href: "/sports",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5443f7041c3f4b079179c988f0da43b2",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FishingHeroSection />
        <FishingCarouselSection />
        <FishingProvidersSection />
        <FishingIntroSection />
        <FishingWhyChooseSection />
        <FishingGamesSection />
        <FishingProvidersDetailsSection />
        <FishingMobileAppSection />
        <FishingFAQSection />
        <FishingComprehensiveSEOContent />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
