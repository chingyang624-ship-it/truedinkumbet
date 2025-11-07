import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SportsHeroSection from "@/components/sports/SportsHeroSection";
import SportsProvidersGrid from "@/components/sports/SportsProvidersGrid";
import SportsTypesSection from "@/components/sports/SportsTypesSection";
import SportsProvidersSection from "@/components/sports/SportsProvidersSection";
import SportsMobileAppSection from "@/components/sports/SportsMobileAppSection";
import SportsFAQSection from "@/components/sports/SportsFAQSection";

export const metadata = {
  title: "Sports Betting at Truedinkumbet | Best Odds & Markets Australia",
  description: "Bet on football, basketball, cricket, tennis, and more at Truedinkumbet. Competitive odds, live betting, and exclusive sports betting bonuses for Australians.",
  keywords: "sports betting Australia, online sportsbook, football betting, basketball betting, cricket betting, live betting, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Sports Betting at Truedinkumbet - Best Odds Australia",
    description: "Place bets on all major sports with competitive odds and live betting at Truedinkumbet. Licensed sports betting for Australian players.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/sports",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Sports Betting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Betting at Truedinkumbet - Best Odds Australia",
    description: "Bet on all major sports with competitive odds and live betting at Truedinkumbet.",
  },
  robots: "index, follow",
};

export default function SportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <SportsHeroSection />
        <SportsProvidersGrid />
        <SportsTypesSection />
        <SportsProvidersSection />
        <SportsMobileAppSection />
        <SportsFAQSection />
      </main>
      <Footer />
    </div>
  );
}
