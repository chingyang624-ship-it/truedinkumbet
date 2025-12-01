import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SportsHeroSection from "@/components/sports/SportsHeroSection";
import SportsProvidersGrid from "@/components/sports/SportsProvidersGrid";
import SportsTypesSection from "@/components/sports/SportsTypesSection";
import SportsProvidersSection from "@/components/sports/SportsProvidersSection";
import SportsMobileAppSection from "@/components/sports/SportsMobileAppSection";
import SportsFAQSection from "@/components/sports/SportsFAQSection";
import SportsComprehensiveSEOContent from "@/components/sports/SportsComprehensiveSEOContent";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export default function SportsPage() {
  const relatedGames = [
    {
      title: "Online Slots",
      description:
        "Play thousands of online slot games with high RTP and big payouts. From classic machines to progressive jackpots.",
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
        <SportsHeroSection />
        <SportsProvidersGrid />
        <SportsTypesSection />
        <SportsProvidersSection />
        <SportsMobileAppSection />
        <SportsFAQSection />
        <SportsComprehensiveSEOContent />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
