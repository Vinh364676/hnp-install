import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#111] antialiased selection:bg-[#111] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
