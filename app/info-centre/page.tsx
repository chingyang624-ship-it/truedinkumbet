import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCentreHeroSection from "@/components/info-centre/InfoCentreHeroSection";
import InfoCentreFAQSection from "@/components/info-centre/InfoCentreFAQSection";

export const metadata = {
  title: "Info Centre - Truedinkumbet Help & Support",
  description:
    "Get answers to your questions about Truedinkumbet games, accounts, bonuses, and responsible gaming.",
};

export default function InfoCentrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <InfoCentreHeroSection />
        <InfoCentreFAQSection />
      </main>
      <Footer />
    </div>
  );
}
