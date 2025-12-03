import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsCarouselSection from "@/components/slots/SlotsCarouselSection";
import SlotsAllGamesGridSection from "@/components/slots/SlotsAllGamesGridSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsTipsSection from "@/components/slots/SlotsTipsSection";
import SlotsPopularGamesSection from "@/components/slots/SlotsPopularGamesSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";
import SlotsNewIntroSection from "@/components/slots/SlotsNewIntroSection";
import SlotsNewProvidersSection from "@/components/slots/SlotsNewProvidersSection";
import SlotsNewBonusesSection from "@/components/slots/SlotsNewBonusesSection";
import SlotsPaymentSection from "@/components/slots/SlotsPaymentSection";
import SlotsDemoSection from "@/components/slots/SlotsDemoSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsAppSection from "@/components/slots/SlotsAppSection";
import SlotsResponsibleGamingSection from "@/components/slots/SlotsResponsibleGamingSection";
import SlotsConclusionSection from "@/components/slots/SlotsConclusionSection";
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata: Metadata = {
  title: "Play Online Slots Australia | High RTP Pokies & Jackpots - Truedinkumbet",
  description:
    "Spin 3000+ top-rated online slots and pokies at Truedinkumbet. Featuring Pragmatic Play, JILI, and Microgaming. High RTP, huge jackpots, and 100% Welcome Bonus.",
  keywords:
    "online slots Australia, play pokies online, crypto slots, Pragmatic Play slots, JILI slots, jackpot pokies, high RTP slots, Truedinkumbet slots",
  authors: [{ name: "Truedinkumbet Casino" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://truedinkumbetaucasino.com/slots",
  },
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Slots",
    title: "Best Online Slots & Pokies in Australia 2025",
    description: "Play 3000+ slots with instant crypto payouts. Join now for a $20 Free Chip.",
    url: "https://truedinkumbetaucasino.com/slots",
    images: [
      {
        url: "https://static.gwvkyk.com/media/ef3d53a54b296d128f1f3.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Slots",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Play Premium Slots & Win Big",
    description: "Top-tier pokies from Pragmatic & JILI. Instant withdrawals.",
    images: ["https://static.gwvkyk.com/media/ef3d53a54b296d128f1f3.png"],
  },
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

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Online Slots Collection",
    description: "A curated collection of the best online slots and pokies available in Australia.",
    url: "https://truedinkumbetaucasino.com/slots",
    hasPart: [
      {
        "@type": "VideoGame",
        name: "Gates of Olympus",
        author: { "@type": "Organization", name: "Pragmatic Play" },
        description: "High volatility slot with multipliers up to 5000x.",
        operatingSystem: "Any",
      },
      {
        "@type": "VideoGame",
        name: "Sweet Bonanza",
        author: { "@type": "Organization", name: "Pragmatic Play" },
        description: "Candy-themed slot with tumbling reels and free spins.",
        operatingSystem: "Any",
      },
      {
        "@type": "VideoGame",
        name: "Roma X",
        author: { "@type": "Organization", name: "JILI Games" },
        description: "Popular action slot with bonus games and combos.",
        operatingSystem: "Any",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Truedinkumbet",
      logo: {
        "@type": "ImageObject",
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
      },
    },
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best paying slots at Truedinkumbet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer high RTP slots like Gates of Olympus (96.5%), Sweet Bonanza, and Money Train 3, giving players the best chance to win.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play slots for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Most of our slot games have a 'Demo Mode' allowing you to practice and have fun without risking real money.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Script
        id="collection-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        strategy="afterInteractive"
      />
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
        <SlotsProvidersSection />
        <SlotsBonusesSection />
        <SlotsTipsSection />
        <SlotsPopularGamesSection />
        <SlotsFAQSection />
        <SlotsNewIntroSection />
        <SlotsNewProvidersSection />
        <SlotsNewBonusesSection />
        <SlotsPaymentSection />
        <SlotsDemoSection />
        <SlotsWhyChooseSection />
        <SlotsAppSection />
        <SlotsResponsibleGamingSection />
        <SlotsConclusionSection />
        <RelatedGamesSection relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
