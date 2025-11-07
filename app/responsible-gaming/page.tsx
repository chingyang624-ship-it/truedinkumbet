import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsibleGamingHeroSection from "@/components/responsible-gaming/ResponsibleGamingHeroSection";
import ResponsibleGamingIntroSection from "@/components/responsible-gaming/ResponsibleGamingIntroSection";
import ResponsibleGamingStepsSection from "@/components/responsible-gaming/ResponsibleGamingStepsSection";
import ResponsibleGamingSignsSection from "@/components/responsible-gaming/ResponsibleGamingSignsSection";
import ResponsibleGamingSelfExclusionSection from "@/components/responsible-gaming/ResponsibleGamingSelfExclusionSection";
import ResponsibleGamingResourcesSection from "@/components/responsible-gaming/ResponsibleGamingResourcesSection";

export const metadata = {
  title: "Responsible Gaming - Truedinkumbet Commitment to Safe Play",
  description:
    "Learn about responsible gaming at Truedinkumbet. Tools, resources, and support for safe and enjoyable gaming experiences.",
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
