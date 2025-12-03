import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/terms/TermsHeroSection";
import TermsContentSection from "@/components/terms/TermsContentSection";

export const metadata: Metadata = {
  title: "Truedinkumbet Terms & Conditions | Player Rights & Betting Rules 2025",
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
    description: "Understand your rights. Fair terms, secure gaming, and instant payouts.",
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <TermsHeroSection />
        <TermsContentSection />
      </main>
      <Footer />
    </div>
  );
}
