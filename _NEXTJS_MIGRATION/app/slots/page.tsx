import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsCarouselSection from "@/components/slots/SlotsCarouselSection";
import SlotsAllGamesGridSection from "@/components/slots/SlotsAllGamesGridSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsPopularGamesSection from "@/components/slots/SlotsPopularGamesSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsTipsSection from "@/components/slots/SlotsTipsSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata = {
  title:
    "Online Slots Australia | Best Slot Games at Truedinkumbet | High RTP Slots",
  description:
    "Play thousands of online slot games at Truedinkumbet with high RTP, progressive jackpots, and exclusive slot bonuses. Enjoy the best slots experience in Australia from top providers like Pragmatic Play and JILI.",
  keywords:
    "online slots Australia, best slot games, progressive jackpots, high RTP slots, Pragmatic Play slots, JILI slots, slot machine games, Truedinkumbet slots",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Online Slots Australia - Thousands of Slot Games at Truedinkumbet",
    description:
      "Play thousands of online slot games with high RTP, progressive jackpots, and exclusive bonuses at Truedinkumbet. Licensed and secure slots gaming for Australian players.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/slots",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Slots Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Slots Australia - Best Slot Games at Truedinkumbet",
    description:
      "Play online slot games with high RTP, progressive jackpots, and exclusive bonuses at Truedinkumbet.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function SlotsPage() {
  const relatedGames = [
    {
      title: "Live Casino",
      description:
        "Experience authentic live casino gaming with professional dealers. Play live blackjack, roulette, baccarat, and more.",
      href: "/live-casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529",
    },
    {
      title: "Sports Betting",
      description:
        "Place bets on all major sports with competitive odds and live betting options. Football, basketball, cricket, tennis, and more.",
      href: "/sports",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5443f7041c3f4b079179c988f0da43b2",
    },
    {
      title: "Fishing Games",
      description:
        "Play exciting fishing games with stunning graphics and big payouts. Easy to play and loaded with bonus features.",
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
        <SlotsCarouselSection />
        <SlotsAllGamesGridSection />
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
