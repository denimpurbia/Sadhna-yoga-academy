import React from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, CheckCircle, Flame, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF6F0]"
    >
      {/* Background Image with warm golden sunset/mountain/meditation layout */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />
        <img
          src="landing.png"
          alt="Ethereal sunrise meditation on Udaipur Pichola Lake mountains - Sadhna Yoga Academy"
          className="absolute inset-0 w-full h-full object-cover scale-100 pointer-events-none brightness-[1.02] contrast-[1.05]"
          id="hero-background-image"
        />
        {/* Soft Golden Gradient Lights */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-soft-gold/15 blur-[120px] mix-blend-screen animate-float pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-warm-beige/15 blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:pl-[112px] pt-32 pb-24 w-full flex flex-col justify-center min-h-screen">
        <div className="max-w-[580px] text-left space-y-8" id="hero-cta-wrapper">
          
          {/* Main Title heading with Cormorant Garamond */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7.5xl font-light text-[#FAF6F0] leading-[1.12] tracking-tight"
            id="hero-main-title"
          >
            Sadhna Yoga Academy <br />
            <span className="italic font-normal text-soft-gold text-glow">
              Gateway to Absolute Presence
            </span>
          </motion.h1>

          {/* Subheading Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="font-sans text-xs sm:text-sm lg:text-base text-[#FAF6F0]/90 leading-relaxed font-light"
            id="hero-sub-text"
          >
            Transform your physical alignment, restore conscious peace, and discover sacred mindfulness. Experience premium yoga, meditation, and luxury retreats in Udaipur, Rajasthan.
          </motion.p>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer pointer-events-none"
          id="hero-scroll-indicator"
        >
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#FAF6F0]/70">
            Scroll To Breathe
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#FAF6F0]/75 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
