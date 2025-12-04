import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">About Truedinkumbet</h1>
          <p className="text-lg mb-4">
            Welcome to Truedinkumbet, your trusted online casino platform.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
