import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronDown, Compass, Award } from "lucide-react";
import { BIO_DATA } from "../data";

interface AboutMeProps {}

export default function AboutMe({}: AboutMeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg text-dark-text">
      {/* Decorative botanical floating shapes */}
      <div className="absolute right-[-10%] top-[10%] w-[40vw] h-[40vw] max-w-[500px] pointer-events-none opacity-10" id="decorative-leaf-container-1">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-olive-green">
          <path d="M50,0 C65,10 75,30 75,50 C75,70 65,90 50,100 C35,90 25,70 25,50 C25,30 35,10 50,0 Z" />
        </svg>
      </div>

      <div className="absolute left-[-5%] bottom-[5%] w-[35vw] h-[35vw] max-w-[400px] pointer-events-none opacity-10 rotate-45" id="decorative-leaf-container-2">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-earth-brown">
          <path d="M50,0 C65,10 75,30 75,50 C75,70 65,90 50,100 C35,90 25,70 25,50 C25,30 35,10 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Elegant Rounded Image Card Container */}
          <div className="lg:col-span-5 flex justify-center" id="about-image-layout-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white/60 bg-[#E8D9C5]"
              id="about-image-card-outer"
            >
              {/* Premium image representing the male instructor */}
              <img
                src="self yoga/main.jpeg"
                alt="Representative portrait of Shubham - Luxury Yoga Academy Founder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[15%] brightness-[98%]"
                id="about-instructor-profile-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-text/40 via-transparent to-transparent" />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive-green/20 flex items-center justify-center text-olive-green">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-[11px] font-sans tracking-widest uppercase font-semibold text-earth-brown">
                    SHUBHAM PURBIA
                  </h4>
                  <p className="text-[9px] font-sans tracking-wide text-dark-text/70 uppercase">
                    Founder & Head Instructor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text & Journeys Container */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left" id="about-text-narrative-container">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-[0.25em] text-soft-gold uppercase font-semibold block">
                Founder of Sadhna Yoga Academy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-dark-text leading-tight">
                {BIO_DATA.title}
              </h2>
              {/* Elegant divider icon */}
              <div className="flex items-center gap-4 py-2" id="about-custom-divider">
                <div className="h-[1px] w-12 bg-earth-brown/40" />
                <Compass size={18} className="text-soft-gold animate-spin-slow" />
                <div className="h-[1px] w-12 bg-earth-brown/40" />
              </div>
            </div>

            <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed font-light">
              {BIO_DATA.aboutText}
            </p>

            {/* Premium Journey Text Expandable segment */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                  id="about-extended-journey-block"
                >
                  <p className="font-sans text-sm md:text-base text-dark-text/85 leading-relaxed font-light border-l-2 border-soft-gold/40 pl-4 py-1 italic">
                    {BIO_DATA.extendedText}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-2 flex items-center gap-4" id="about-action-buttons-group">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-earth-brown hover:text-dark-text transition-colors duration-300"
                id="about-journey-toggle"
              >
                <span>{isExpanded ? "Show Less" : "Know More About Me"}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
