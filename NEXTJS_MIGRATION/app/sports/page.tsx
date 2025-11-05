import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Truedinkumbet Sports Betting - Bet on Your Favorite Sports",
  description:
    "Bet on all major sports at Truedinkumbet with competitive odds.",
};

export default function SportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="w-full bg-gray-800 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Sports Betting</h1>
          <p className="text-lg">Bet on all your favorite sports</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1f2124" }}>
            Popular Sports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Football", "Basketball", "Tennis"].map((sport, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-gray-300 h-40 rounded mb-4"></div>
                <h3 className="font-bold text-lg">{sport}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
