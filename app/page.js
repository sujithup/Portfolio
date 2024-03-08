import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#050709]"
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
