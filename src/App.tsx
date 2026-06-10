import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import AboutMe from "./components/AboutMe";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import GalleryPage from "./components/GalleryPage";
import MarqueeBanner from "./components/MarqueeBanner";
import Testimonials from "./components/Testimonials";
import SocialPresence from "./components/SocialPresence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingSocials from "./components/FloatingSocials";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("navigate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("navigate", handleLocationChange);
    };
  }, []);

  const navigateTo = (newPath: string) => {
    window.history.pushState({}, "", newPath);
    window.dispatchEvent(new Event("navigate"));
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleDiscoverMore = () => {
    // Smooth scroll down to About Me section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (path === "/gallery") {
    return (
      <GalleryPage 
        onBack={() => navigateTo("/")} 
        onNavigate={navigateTo} 
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-brand-bg text-dark-text selection:bg-soft-gold selection:text-dark-text overflow-x-hidden" id="app-landing-root">
      {/* Global Transparent Navbar */}
      <Navbar currentPath={path} onNavigate={navigateTo} />

      {/* Hero Header Segment */}
      <Hero />

      {/* Premium Social Proof Section */}
      <SocialProof />

      {/* Interactive premium Social Presence Reels carousel */}
      <SocialPresence />

      {/* Meet Ananya Founders Segment */}
      <AboutMe />

      {/* Golden Accented Credentials Awards */}
      <Awards />

      {/* Photo Editorial Portfolios */}
      <Gallery onViewFullGallery={() => navigateTo("/gallery")} />

      {/* Infinite Horizontal Custom Luxury Marquee Banner */}
      <MarqueeBanner />

      {/* Client Video Review Transformations */}
      <Testimonials />

      {/* Elegant minimalist FAQ Segment */}
      <FAQ />

      {/* Dynamic Botanical Contact & Quick Social Channels */}
      <Contact />

      {/* Luxury Minimalist Footer */}
      <Footer currentPath={path} onNavigate={navigateTo} />

      {/* Floating Staggered Premium Social Links */}
      <FloatingSocials />
    </div>
  );
}
