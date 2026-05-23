import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WorkSection from "@/sections/WorkSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import { useEffect } from "react";
import { Loader, useLoader } from "./components/Loader";

export default function App() {
  // Initialize Lenis smooth scrolling globally
  const { isLoading, show, hide } = useLoader();
  useLenis();

  useEffect(() => {
    show();
    setTimeout(() => {
      hide();
    }, 2000);
  }, []);

  return (
    <main className="relative bg-[#000000] text-white antialiased">
      <Loader fullscreen isVisible={isLoading} />
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
