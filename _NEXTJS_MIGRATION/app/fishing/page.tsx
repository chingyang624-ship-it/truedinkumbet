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

export const metadata = {
  title: "Best Online Fishing Games Australia | Play Real Money Fish Shooting",
  description:
    "Play the best arcade fishing games online at Truedinkumbet. Shoot fish, hunt dragons, and win real money in Fishing War & Fishing God. Instant crypto payouts.",
  keywords:
    "online fishing games Australia, fish shooting gambling, play fishing war, fishing god casino, JILI fishing games, arcade casino games, real money fish hunter",
  authors: [{ name: "Truedinkumbet Arcade" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/fishing",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Fishing",
    title: "Shoot & Win: Online Fishing Casino Australia",
    description:
      "Join the underwater hunt! Play top-rated fishing arcade games with high multipliers.",
    url: "https://truedinkumbetaucasino.com/fishing",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Fishing Games",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Real Money Fishing Games",
    description: "Fishing War, Fishing God & more. Instant payouts.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

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
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4d63e4c30b20476c8b60376956cab5d0",
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
      <main className="flex-1 pt-16">
        <FishingHeroSection />
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
