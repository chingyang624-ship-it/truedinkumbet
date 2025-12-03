import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/terms/TermsHeroSection";
import TermsContentSection from "@/components/terms/TermsContentSection";

export const metadata: Metadata = {
  title:
    "Truedinkumbet Terms & Conditions | Player Rights & Betting Rules 2025",
  description:
    "Read the official Truedinkumbet Terms of Service. Clear rules on bonuses, withdrawals, and account security. We ensure fair play and transparent gaming for all Australian players.",
  keywords:
    "Truedinkumbet terms, betting rules Australia, casino bonus terms, withdrawal policy, account verification rules, Truedinkumbet legal, gambling terms and conditions",
  authors: [{ name: "Truedinkumbet Legal Team" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/terms-conditions",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Legal",
    title: "Truedinkumbet User Agreement & Policies",
    description:
      "Understand your rights. Fair terms, secure gaming, and instant payouts.",
    url: "https://truedinkumbetaucasino.com/terms-conditions",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Terms and Conditions",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    site: "@truedinkumbet",
    title: "Truedinkumbet Terms & Conditions",
    description: "Official rules for gameplay, bonuses, and banking.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: "Terms and Conditions",
                description:
                  "The legal agreement between Truedinkumbet and its players.",
                datePublished: "2025-01-01",
                dateModified: "2025-12-03",
                publisher: {
                  "@type": "Organization",
                  name: "Truedinkumbet Australia",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can I open multiple accounts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, Truedinkumbet strictly allows only one account per person, household, or IP address to ensure fair play and prevent bonus abuse.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the bonus wagering requirements?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most bonuses come with a standard turnover requirement (e.g., 10x or 20x) which must be met before winnings can be withdrawn. Specific terms vary by promotion.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is my withdrawal pending?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Withdrawals may be subject to security checks or KYC verification. Once verified, crypto payouts are instant, and bank transfers take up to 24 hours.",
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
        <main className="flex-1 pt-16">
          <TermsHeroSection />
          <TermsContentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
