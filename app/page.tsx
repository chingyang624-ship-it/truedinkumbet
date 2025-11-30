import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarouselSection from "@/components/landing/CarouselSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CarouselSection />
      </main>
      <Footer />
    </div>
  );
}
