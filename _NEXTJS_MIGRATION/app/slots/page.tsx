import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsPaymentSection from "@/components/slots/SlotsPaymentSection";
import SlotsDemoSection from "@/components/slots/SlotsDemoSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsAppSection from "@/components/slots/SlotsAppSection";
import SlotsResponsibleGamingSection from "@/components/slots/SlotsResponsibleGamingSection";
import SlotsConclusionSection from "@/components/slots/SlotsConclusionSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata = {
  title:
    "Slot Malaysia | Best Online Slot Games at BK8 | Play with MYR",
  description:
    "Play the best online slot games at BK8 Malaysia with top providers like 918Kiss, Mega888, Microgaming and more. Enjoy high RTP slots, exciting bonuses, and fast MYR withdrawals.",
  keywords:
    "slot Malaysia, online slots Malaysia, BK8 slots, 918Kiss, Mega888, Microgaming, best slot games Malaysia, MYR slots",
  authors: [{ name: "BK8 Malaysia" }],
  openGraph: {
    title: "Slot Malaysia - Best Online Slot Games at BK8",
    description:
      "Play the best online slot games at BK8 Malaysia with fast payouts, exciting bonuses, and top providers. Licensed and secure slots gaming.",
    type: "website",
    url: "https://www.bk8.services/",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "BK8 Malaysia Slots Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slot Malaysia - Best Online Slot Games at BK8",
    description:
      "Play online slot games at BK8 with top providers, fast payouts, and exclusive bonuses. Licensed for Malaysia.",
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
        "Experience authentic live casino gaming with professional dealers. Play live blackjack, roulette, baccarat, and more at BK8 Malaysia.",
      href: "https://www.bk8.services/live-casino/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529",
    },
    {
      title: "Sports Betting",
      description:
        "Place bets on all major sports with competitive odds. Football, basketball, cricket, tennis, and more with BK8.",
      href: "https://www.bk8.services/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5443f7041c3f4b079179c988f0da43b2",
    },
    {
      title: "Fishing Games",
      description:
        "Play exciting fishing games with stunning graphics and big payouts. Easy to play and loaded with bonus features.",
      href: "https://www.bk8.services/",
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
              href="https://www.bk8.services/"
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
              href="https://www.bk8.services/"
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
              href="https://www.bk8.services/"
              className="flex-1 py-3 bg-red-700 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Join
            </a>
            <a
              href="https://www.bk8.services/"
              className="flex-1 py-3 bg-blue-600 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Login
            </a>
          </div>
        </section>
        <SlotsIntroSection />
        <SlotsProvidersSection />
        <SlotsBonusesSection />
        <SlotsPaymentSection />
        <SlotsDemoSection />
        <SlotsWhyChooseSection />
        <SlotsAppSection />
        <SlotsResponsibleGamingSection />
        <SlotsConclusionSection />
        <SlotsFAQSection />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
