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

export const metadata = {
  title: "Online Sports Betting Australia | Best Odds for AFL, NRL & EPL - Truedinkumbet",
  description: "Bet on your favourite sports with Truedinkumbet Australia. Live betting on AFL, NRL, Cricket, NBA & EPL. High odds, fast crypto payouts, and cash out features.",
  keywords: "sports betting Australia, online sportsbook AU, AFL betting odds, NRL betting, cricket betting Australia, live sports betting, crypto sportsbook, Truedinkumbet sports",
  authors: [{ name: "Truedinkumbet Sportsbook" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/sports",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Sports",
    title: "Truedinkumbet: #1 Sportsbook for Aussie Punters",
    description: "Join the action! Bet on thousands of live matches with instant withdrawals.",
    url: "https://truedinkumbetaucasino.com/sports",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Sports Betting",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Live Sports Betting - Best Odds Guaranteed",
    description: "Bet on AFL, NBA, EPL & more. Instant Crypto Payouts.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

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
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4d63e4c30b20476c8b60376956cab5d0",
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
        <section className="w-full">
          <div className="hidden md:flex gap-4 justify-center py-6 px-4">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: "#ffffff",
                color: "#1f2124",
                border: "1px solid #ddd",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-bold text-white transition-colors"
              style={{
                backgroundColor: "#ff6500",
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
