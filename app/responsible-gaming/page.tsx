import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsibleGamingHeroSection from "@/components/responsible-gaming/ResponsibleGamingHeroSection";
import ResponsibleGamingIntroSection from "@/components/responsible-gaming/ResponsibleGamingIntroSection";
import ResponsibleGamingStepsSection from "@/components/responsible-gaming/ResponsibleGamingStepsSection";
import ResponsibleGamingSignsSection from "@/components/responsible-gaming/ResponsibleGamingSignsSection";
import ResponsibleGamingSelfExclusionSection from "@/components/responsible-gaming/ResponsibleGamingSelfExclusionSection";
import ResponsibleGamingResourcesSection from "@/components/responsible-gaming/ResponsibleGamingResourcesSection";

export const metadata = {
  title: "Responsible Gaming | Safe Gaming Tools - Truedinkumbet Australia",
  description: "Truedinkumbet's commitment to responsible gaming. Access tools, resources, and support for safe gaming. Self-exclusion and limit setting available.",
  keywords: "responsible gaming, safe gambling, gambling addiction support, self-exclusion, gaming limits, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Responsible Gaming - Truedinkumbet Safe Gaming Resources",
    description: "Truedinkumbet promotes responsible gaming with tools, resources, and support. Play safely and enjoyably.",
    type: "website",
    url: "https://truedinkumbet.com/responsible-gaming",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Responsible Gaming at Truedinkumbet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Gaming - Truedinkumbet Safe Gaming",
    description: "Learn about responsible gaming tools and support at Truedinkumbet.",
  },
  robots: "index, follow",
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
