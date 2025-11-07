import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveCasinoHeroSection from "@/components/livecasino/LiveCasinoHeroSection";
import LiveCasinoFeaturedSection from "@/components/livecasino/LiveCasinoFeaturedSection";
import LiveCasinoIntroSection from "@/components/livecasino/LiveCasinoIntroSection";
import LiveCasinoWhyChooseSection from "@/components/livecasino/LiveCasinoWhyChooseSection";
import LiveCasinoProvidersSection from "@/components/livecasino/LiveCasinoProvidersSection";
import LiveCasinoPopularGamesSection from "@/components/livecasino/LiveCasinoPopularGamesSection";
import LiveCasinoMobileAppSection from "@/components/livecasino/LiveCasinoMobileAppSection";
import LiveCasinoFAQSection from "@/components/livecasino/LiveCasinoFAQSection";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata = {
  title: "Live Casino Australia | Real Dealers & Live Games at Truedinkumbet",
  description:
    "Experience authentic live casino gaming with professional dealers at Truedinkumbet. Play live blackjack, roulette, baccarat, poker, and more. Licensed and secure for Australian players.",
  keywords:
    "live casino Australia, live dealers, live blackjack, live roulette, live baccarat, live poker, real money casino games, Truedinkumbet live casino",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Live Casino Australia - Real Dealers at Truedinkumbet",
    description:
      "Join real live casino games with professional dealers at Truedinkumbet. Immersive gaming experience with exclusive live casino bonuses and 24/7 availability.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/live-casino",
    type: "website",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Live Casino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Casino Australia - Real Dealers at Truedinkumbet",
    description:
      "Experience authentic live casino gaming with professional dealers. Play live blackjack, roulette, baccarat, and more at Truedinkumbet.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function LiveCasinoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <LiveCasinoHeroSection />
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
        <LiveCasinoFeaturedSection />
        <LiveCasinoIntroSection />
        <LiveCasinoWhyChooseSection />
        <LiveCasinoProvidersSection />
        <LiveCasinoPopularGamesSection />
        <LiveCasinoMobileAppSection />
        <LiveCasinoFAQSection />
      </main>
      <Footer />
    </div>
  );
}
