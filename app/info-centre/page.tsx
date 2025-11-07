import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Truedinkumbet Info Centre - Guides & Help",
  description:
    "Get help and information about Truedinkumbet games and features.",
};

export default function InfoCentrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8" style={{ color: "#1f2124" }}>
            Info Centre
          </h1>
          <div className="space-y-6">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#1f2124" }}
              >
                How to Play
              </h2>
              <p style={{ color: "#6b7280" }}>
                Learn how to play all our games and get the most out of your
                experience.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#1f2124" }}
              >
                Payment Methods
              </h2>
              <p style={{ color: "#6b7280" }}>
                We accept various payment methods for your convenience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
