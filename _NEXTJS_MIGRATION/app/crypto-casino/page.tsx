import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CryptoCasinoHeroSection from "@/components/crypto-casino/CryptoCasinoHeroSection";
import CryptoCasinoIntroSection from "@/components/crypto-casino/CryptoCasinoIntroSection";
import CryptoCasinoWhyChooseSection from "@/components/crypto-casino/CryptoCasinoWhyChooseSection";
import CryptoCasinoProvidersSection from "@/components/crypto-casino/CryptoCasinoProvidersSection";
import CryptoCasinoFeaturesSection from "@/components/crypto-casino/CryptoCasinoFeaturesSection";
import CryptoCasinoFAQSection from "@/components/crypto-casino/CryptoCasinoFAQSection";
import CryptoCasinoComprehensiveSEOContent from "@/components/crypto-casino/CryptoCasinoComprehensiveSEOContent";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata = {
  title:
    "Best Crypto Casino Australia | Play with Bitcoin & USDT - Truedinkumbet",
  description:
    "Join Truedinkumbet, the #1 Crypto Casino in Australia. Deposit & withdraw instantly with Bitcoin (BTC), Ethereum (ETH), and Tether (USDT). 100% Anonymous & Secure.",
  keywords:
    "crypto casino Australia, bitcoin gambling site, USDT casino, ethereum slots, play casino with crypto, instant withdrawal crypto casino, anonymous gambling Australia",
  authors: [{ name: "Truedinkumbet Crypto" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/crypto-casino",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Crypto",
    title: "Play & Win Crypto Instantly at Truedinkumbet",
    description:
      "The fastest way to gamble online. Accept BTC, ETH, USDT. No waiting for bank transfers.",
    url: "https://truedinkumbetaucasino.com/crypto-casino",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Crypto Casino",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Australia's Best Bitcoin Casino",
    description: "Anonymous play. Instant payouts. 5000+ games.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function CryptoCasinoPage() {
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
    <div className="min-h-screen flex flex-col" style={{ minHeight: "910px" }}>
      <Header />
      <main className="flex-1 pt-16">
        <CryptoCasinoHeroSection />
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
        <CryptoCasinoIntroSection />
        <CryptoCasinoWhyChooseSection />
        <CryptoCasinoProvidersSection />
        <CryptoCasinoFeaturesSection />
        <CryptoCasinoFAQSection />
        <CryptoCasinoComprehensiveSEOContent />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
