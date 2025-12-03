import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsibleGamingHeroSection from "@/components/responsible-gaming/ResponsibleGamingHeroSection";
import ResponsibleGamingIntroSection from "@/components/responsible-gaming/ResponsibleGamingIntroSection";
import ResponsibleGamingStepsSection from "@/components/responsible-gaming/ResponsibleGamingStepsSection";
import ResponsibleGamingSignsSection from "@/components/responsible-gaming/ResponsibleGamingSignsSection";
import ResponsibleGamingSelfExclusionSection from "@/components/responsible-gaming/ResponsibleGamingSelfExclusionSection";
import ResponsibleGamingResourcesSection from "@/components/responsible-gaming/ResponsibleGamingResourcesSection";

export const metadata: Metadata = {
  title: "Responsible Gambling | Safe Gaming Tools & Self-Exclusion - Truedinkumbet",
  description:
    "Play safely at Truedinkumbet. Access tools for Deposit Limits, Time-Outs, and Self-Exclusion. Get confidential support 24/7. We care about you.",
  keywords:
    "responsible gambling Australia, gambling addiction help, self exclusion casino, deposit limits, Truedinkumbet safer gambling, GamCare support",
  authors: [{ name: "Truedinkumbet Safer Gaming Team" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/responsible-gaming",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Safer Gaming",
    title: "Play Responsibly: You Are In Control",
    description: "Access our suite of player protection tools. Set limits or take a break anytime.",
    url: "https://truedinkumbetaucasino.com/responsible-gaming",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Responsible Gaming at Truedinkumbet",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Responsible Gambling Tools",
    description: "Deposit Limits, Reality Checks & Self-Exclusion available.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ResponsibleGamingHeroSection />
        <ResponsibleGamingIntroSection />
        <ResponsibleGamingStepsSection />
        <ResponsibleGamingSignsSection />
        <ResponsibleGamingSelfExclusionSection />
        <ResponsibleGamingResourcesSection />
      </main>
      <Footer />
    </div>
  );
}
