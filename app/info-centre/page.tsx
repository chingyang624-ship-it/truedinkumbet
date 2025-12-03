import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCentreHeroSection from "@/components/info-centre/InfoCentreHeroSection";
import InfoCentreFAQSection from "@/components/info-centre/InfoCentreFAQSection";

export const metadata: Metadata = {
  title: "Truedinkumbet Info Centre | FAQ, Guides & 24/7 Support",
  description:
    "Get instant help at Truedinkumbet Info Centre. Find guides on Account Verification, Crypto Deposits, Withdrawals, and Bonus Rules. 24/7 Live Chat available.",
  keywords:
    "Truedinkumbet help, Truedinkumbet FAQ, how to deposit Truedinkumbet, Truedinkumbet withdrawal time, is Truedinkumbet safe, casino account verification, Truedinkumbet support",
  authors: [{ name: "Truedinkumbet Support" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/info-centre",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Help",
    title: "Truedinkumbet Knowledge Base & FAQ",
    description: "Everything you need to know about playing at Truedinkumbet. Guides, Rules & Tips.",
    url: "https://truedinkumbetaucasino.com/info-centre",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Info Centre",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Truedinkumbet Support Center",
    description: "Need help? Find answers fast or chat with us 24/7.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function InfoCentrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                name: "Truedinkumbet Information Hub",
                description:
                  "A centralized resource for all Truedinkumbet guides, policies, and tutorials.",
                hasPart: [
                  { "@type": "WebPage", name: "Account Management Guide" },
                  { "@type": "WebPage", name: "Deposit & Withdrawal Guide" },
                  { "@type": "WebPage", name: "Bonus & Promotion Rules" },
                  { "@type": "WebPage", name: "Security & Safety" },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How do I verify my Truedinkumbet account?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "To verify your account, go to 'My Profile' and upload a valid photo ID and proof of address. Verification is typically completed within 24 hours.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What should I do if I forgot my password?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Click the 'Forgot Password' link on the login page. Enter your registered email or phone number to receive a reset link instantly.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Truedinkumbet safe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Truedinkumbet uses advanced SSL encryption and is fully licensed, ensuring your personal data and funds are always secure.",
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
          <InfoCentreHeroSection />
          <InfoCentreFAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
