import React from "react";
import { motion } from "motion/react";
import { Award, Compass, Sparkles, Star } from "lucide-react";
import { AWARDS_DATA } from "../data";

export default function Awards() {
  const getIcon = (id: string) => {
    switch (id) {
      case "award-1":
        return <Award size={24} className="text-soft-gold" />;
      case "award-2":
        return <Compass size={24} className="text-soft-gold" />;
      case "award-3":
        return <Sparkles size={24} className="text-soft-gold" />;
      default:
        return <Star size={24} className="text-soft-gold" />;
    }
  };

  return (
    <section id="awards" className="relative py-24 md:py-32 bg-dark-text text-[#FAF6F0] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-radial-gradient from-earth-brown/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] height-[600px] border border-soft-gold/10 rounded-full select-none pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] height-[900px] border border-soft-gold/5 rounded-full select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-xs tracking-[0.25em] text-soft-gold uppercase font-semibold">
            Distinguished Recognition
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF6F0]">
            Our Celebrated Journey
          </h2>
          <p className="font-sans text-sm text-[#FAF6F0]/75 tracking-wide max-w-md mx-auto">
            Honored milestones across the years for pioneering excellence, profound compassion and sustainable organic designs.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="awards-cards-grid">
          {AWARDS_DATA.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, borderColor: "rgba(200, 169, 126, 0.7)" }}
              className="group relative rounded-[20px] bg-[#3A2D25] border border-warm-beige/10 p-6 flex flex-col justify-between min-h-[250px] transition-all duration-300"
              id={`award-card-${award.id}`}
            >
              <div className="space-y-4">
                {/* Gold Mini Icon */}
                <div className="w-12 h-12 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(award.id)}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-soft-gold font-semibold">
                    {award.organization} — {award.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#FAF6F0]">
                    {award.title}
                  </h3>
                </div>
              </div>

              <p className="font-sans text-xs text-[#FAF6F0]/70 leading-relaxed pt-4 border-t border-[#FAF6F0]/10 mt-4">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
