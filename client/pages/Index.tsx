import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 py-12">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Welcome to Your App
          </h1>
          <p className="text-slate-600 max-w-md mx-auto">
            Scroll down to see the complete layout with header and footer components.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
