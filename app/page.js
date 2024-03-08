import AboutSection from "./components/about";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050709]">
      <Navbar />
      <div className="container mt-24 mx-auto px-1 py-4">
        <HeroSection />
      </div>
      <div className="container mt-24 mx-auto px-1 py-4">
        <AboutSection />
      </div>
      <div className="container mt-24 mx-auto px-1 py-4">
        <Skills/>
      </div>
    </main>
  );
}
