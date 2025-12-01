import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsCarouselSection from "@/components/slots/SlotsCarouselSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsPopularGamesSection from "@/components/slots/SlotsPopularGamesSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsTipsSection from "@/components/slots/SlotsTipsSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export default function SlotsPage() {
  const relatedGames = [
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
    {
      title: "Fishing Games",
      description:
        "Enjoy exciting fishing games with amazing graphics and big rewards. Easy to play, fun, and rewarding.",
      href: "/fishing",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F159a9265e32840a3a0b88b88fc82f47f",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <SlotsHeroSection />
        <SlotsCarouselSection />
        <SlotsIntroSection />
        <SlotsWhyChooseSection />
        <SlotsBonusesSection />
        <SlotsProvidersSection />
        <SlotsPopularGamesSection />
        <SlotsTipsSection />
        <SlotsFAQSection />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
