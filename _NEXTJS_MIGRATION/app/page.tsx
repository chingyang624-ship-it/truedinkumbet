export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">Truedinkumbet</h1>
          <p>Loading...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
