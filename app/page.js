import AboutSection from "./components/about";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
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
      <div className="container mt-24 mx-auto px-1 py-4">
        <Projects/>
      </div>
      <div className="container mt-24 mx-auto px-1 py-4">
        <Footer/>
      </div>
    </main>
  );
}
