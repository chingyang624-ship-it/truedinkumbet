import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Truedinkumbet - About Us",
  description:
    "Learn more about Truedinkumbet and our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8" style={{ color: "#1f2124" }}>
            About Truedinkumbet
          </h1>
          <p className="text-lg mb-6" style={{ color: "#6b7280" }}>
            Truedinkumbet is a leading online casino platform licensed by
            PAGCOR. We are committed to providing the best gaming experience to
            players in Australia and around the world.
          </p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1f2124" }}>
            Our Mission
          </h2>
          <p style={{ color: "#6b7280" }}>
            To provide a safe, secure, and entertaining online gaming experience
            for all our players.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
