import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

export const metadata = {
  title: "About Truedinkumbet | Trusted Australian Online Casino Platform",
  description: "Learn about Truedinkumbet's mission, values, and commitment to responsible gaming. Australia's premier licensed online casino with world-class gaming.",
  keywords: "about Truedinkumbet, online casino Australia, responsible gaming, PAGCOR licensed, trusted gambling platform",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "About Truedinkumbet - Australia's Trusted Online Casino",
    description: "Discover Truedinkumbet's mission, vision, and commitment to providing safe, secure, and enjoyable gaming experiences.",
    type: "website",
    url: "https://truedinkumbet.com/about",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "About Truedinkumbet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Truedinkumbet - Online Casino Australia",
    description: "Learn about Truedinkumbet's mission and commitment to responsible gaming in Australia.",
  },
  robots: "index, follow",
};

export default function AboutPage() {
  return (
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
  );
}
