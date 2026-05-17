import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WorkSection from "@/sections/WorkSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";

export default function App() {
  // Initialize Lenis smooth scrolling globally
  useLenis();

  return (
    <main className="relative bg-[#000000] text-white antialiased">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
