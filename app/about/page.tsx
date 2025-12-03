import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

export const metadata: Metadata = {
  title: "About Truedinkumbet | Australia's #1 Trusted Online Casino Since 2017",
  description:
    "Truedinkumbet is Australia's premier licensed crypto casino. Established in 2017, we offer 5000+ games, instant withdrawals, and 24/7 support. Learn our story.",
  keywords:
    "about Truedinkumbet, Truedinkumbet history, legit casino Australia, Truedinkumbet owner, licensed crypto casino, Australian gambling site reviews",
  authors: [{ name: "Truedinkumbet Team" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/about",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet About",
    title: "Who is Truedinkumbet? The Story Behind #1 Aussie Casino",
    description: "Licensed. Secure. Fast. Discover why 50,000+ Australians choose us.",
    url: "https://truedinkumbetaucasino.com/about",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "About Truedinkumbet",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "About Truedinkumbet Australia",
    description: "Est. 2017. Curacao Licensed. 15-min Payouts.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                mainEntity: {
                  "@type": "Organization",
                  name: "Truedinkumbet Australia",
                  foundingDate: "2017",
                  url: "https://truedinkumbetaucasino.com/",
                  logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
                  sameAs: [
                    "https://x.com/truedinkumbet",
                    "https://t.me/truedinkumbetau",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    email: "vip.truedinkumbet@gmail.com",
                    areaServed: "AU",
                  },
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "When was Truedinkumbet established?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Truedinkumbet was established in 2017 and has since grown to become one of Australia's most trusted online gaming platforms.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Truedinkumbet licensed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we operate under a strict Curacao Gaming License, ensuring fair play and security for all our players.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AboutHeroSection />
          <AboutIntroSection />
          <AboutMissionSection />
          <AboutValuesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
