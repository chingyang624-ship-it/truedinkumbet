import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsHeroSection from "@/components/reviews/ReviewsHeroSection";
import ReviewsArchiveSection from "@/components/reviews/ReviewsArchiveSection";

export const metadata = {
  title:
    "Best E-Wallet Casino Australia 2025 | Instant PayID & Crypto Withdrawals",
  description:
    "Play at Truedinkumbet, the top E-Wallet Casino in Australia. We accept PayID, Apple Pay, Google Pay, and USDT. Enjoy instant withdrawals and 0% fees.",
  keywords:
    "e-wallet casino Australia, PayID casino, fast withdrawal casino, apple pay casino Australia, google pay gambling, crypto casino wallet, Truedinkumbet payment methods",
  authors: [{ name: "Truedinkumbet Payments" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/e-wallet-casino",
  openGraph: {
    type: "article",
    siteName: "Truedinkumbet Banking",
    title: "Instant Payout Casino: PayID, Apple Pay & Crypto",
    description:
      "No more waiting. Get your winnings in minutes with our E-Wallet options.",
    url: "https://truedinkumbetaucasino.com/e-wallet-casino",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "E-Wallet Casino Australia",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Best E-Wallet Casino in Australia",
    description: "Fastest withdrawals via PayID & USDT. Join now.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Wallet Casino Payments",
    provider: {
      "@type": "Organization",
      name: "Truedinkumbet Australia",
    },
    serviceType: "Online Payment Processing",
    areaServed: "AU",
    description:
      "Secure and instant deposit and withdrawal services for online gaming using PayID, Apple Pay, and Cryptocurrency.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
      availability: "http://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accepted Payment Methods",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PayID (Instant Bank Transfer)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Apple Pay Deposit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Pay Deposit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "USDT (Tether) Crypto",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Truedinkumbet accept PayID?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we support PayID (OSKO) for instant deposits and withdrawals directly to your Australian bank account.",
        },
      },
      {
        "@type": "Question",
        name: "Are there fees for e-wallet withdrawals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Truedinkumbet does not charge any fees for using e-wallets or crypto for deposits or withdrawals.",
        },
      },
    ],
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReviewsHeroSection />
        <ReviewsArchiveSection />
      </main>
      <Footer />
    </div>
  );
}
