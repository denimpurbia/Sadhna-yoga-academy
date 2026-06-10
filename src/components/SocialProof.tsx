import React from "react";
import { motion } from "motion/react";

interface SocialProofProps {}

const LOGO_BRANDS = [
  {
    id: "brand-1",
    name: "LUMI",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="transition-colors group-hover:fill-[#C8A97E]" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#C8A97E]",
  },
  {
    id: "brand-2",
    name: "SOMA",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#8E6F56]",
  },
  {
    id: "brand-3",
    name: "PRANA",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 15 7 15 11C15 14.866 11.866 18 8 18C4.13401 18 1 14.866 1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2C12 2 9 7 9 11C9 14.866 12.134 18 16 18C19.866 18 23 14.866 23 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-colors group-hover:stroke-[#4A6B53]" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#4A6B53]",
  },
  {
    id: "brand-4",
    name: "AURA_INTL",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.364 5.636 16.95 7.05M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05 5.636 5.636" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" className="transition-colors group-hover:stroke-[#D1B181]" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#D1B181]",
  },
  {
    id: "brand-5",
    name: "HAVEN",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12L12 4L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.5V19.5H18V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="2" fill="currentColor" className="transition-colors group-hover:fill-[#2E3C40]" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#2E3C40]",
  },
  {
    id: "brand-6",
    name: "VALE",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16C6.5 16 7.5 12 10 12C12.5 12 13.5 16 16 16C18.5 16 19.5 12 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 8C4.5 8 5.5 4 8 4C10.5 4 11.5 8 14 8C16.5 8 17.5 4 20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-colors group-hover:stroke-[#7D5F52]" />
      </svg>
    ),
    hoverColorClass: "group-hover:text-[#7D5F52]",
  },
];

const TOP_BRANDS = [LOGO_BRANDS[0], LOGO_BRANDS[1], LOGO_BRANDS[2]];
const BOTTOM_BRANDS = [LOGO_BRANDS[3], LOGO_BRANDS[4], LOGO_BRANDS[5]];

const TOP_ROW_ITEMS = [...TOP_BRANDS, ...TOP_BRANDS, ...TOP_BRANDS, ...TOP_BRANDS, ...TOP_BRANDS];
const BOTTOM_ROW_ITEMS = [...BOTTOM_BRANDS, ...BOTTOM_BRANDS, ...BOTTOM_BRANDS, ...BOTTOM_BRANDS, ...BOTTOM_BRANDS];

export default function SocialProof({}: SocialProofProps) {
  return (
    <section
      id="social-proof-section"
      className="relative bg-[#F6F0E8] py-12 md:py-16 overflow-hidden"
    >
      {/* Absolute subtle divider line above */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8D9C5]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">
        {/* Top Area: Overlapping profile images and beside text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 md:mb-12"
          id="social-proof-top-row"
        >
          {/* Overlapping profiles */}
          <div className="flex -space-x-3" id="social-proof-students-avatars">
            <img
              src="thumbnail/review1.png"
              alt="Ananya Yoga senior student avatar"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[#F6F0E8] shadow-md hover:z-20 hover:scale-110 transition-transform duration-300"
            />
            <img
              src="thumbnail/review2.png"
              alt="Ananya Yoga professional student avatar"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[#F6F0E8] shadow-md hover:z-20 hover:scale-110 transition-transform duration-300"
            />
            <img
              src="thumbnail/review3.png"
              alt="Ananya Yoga wellness regular avatar"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[#F6F0E8] shadow-md hover:z-20 hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Connected label text */}
          <div className="text-center sm:text-left space-y-0.5" id="social-proof-headline-wrapper">
            <p className="font-sans text-sm md:text-base font-normal text-dark-text/85">
              Trusted by <span className="font-semibold text-[#C8A97E]">5,000+ Students</span> worldwide
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#C8A97E] uppercase font-medium">
              Sanctuary of Deep Physical Realignment
            </p>
          </div>
        </motion.div>

        {/* Brand logo separator block */}
        <div className="w-full max-w-4xl h-px bg-[#E8D9C5]/40 mb-10 md:mb-12" />

        {/* Dual-direction Infinite Marquees */}
        <div className="w-full relative py-2 space-y-8 select-none" id="social-proof-logo-carousel-holder">
          
          {/* Gradient faded edges overlay */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F6F0E8] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F6F0E8] to-transparent z-20 pointer-events-none" />

          {/* Upper row: glides left-to-right (x: ["-50%", "0%"]) */}
          <div className="relative w-full overflow-hidden" id="social-proof-upper-carousel">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity
              }}
              className="flex gap-16 w-max whitespace-nowrap"
            >
              <div className="flex gap-16 whitespace-nowrap shrink-0">
                {TOP_ROW_ITEMS.map((brand, idx) => (
                  <div
                    key={`upper-a-${brand.id}-${idx}`}
                    className="group flex items-center gap-3 cursor-pointer text-[#6B4F3B]/90 hover:text-[#C8A97E] transition-colors duration-300"
                    id={`social-proof-upper-a-${brand.id}-${idx}`}
                  >
                    <div className={`transition-all duration-300 ${brand.hoverColorClass} w-6 h-6 flex items-center justify-center`}>
                      {brand.icon}
                    </div>
                    <span className={`font-serif text-[14px] md:text-[15px] tracking-[0.25em] font-medium transition-colors duration-300 ${brand.hoverColorClass}`}>
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-16 whitespace-nowrap shrink-0">
                {TOP_ROW_ITEMS.map((brand, idx) => (
                  <div
                    key={`upper-b-${brand.id}-${idx}`}
                    className="group flex items-center gap-3 cursor-pointer text-[#6B4F3B]/90 hover:text-[#C8A97E] transition-colors duration-300"
                    id={`social-proof-upper-b-${brand.id}-${idx}`}
                  >
                    <div className={`transition-all duration-300 ${brand.hoverColorClass} w-6 h-6 flex items-center justify-center`}>
                      {brand.icon}
                    </div>
                    <span className={`font-serif text-[14px] md:text-[15px] tracking-[0.25em] font-medium transition-colors duration-300 ${brand.hoverColorClass}`}>
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lower row: glides right-to-left (x: ["0%", "-50%"]) */}
          <div className="relative w-full overflow-hidden" id="social-proof-lower-carousel">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity
              }}
              className="flex gap-16 w-max whitespace-nowrap"
            >
              <div className="flex gap-16 whitespace-nowrap shrink-0">
                {BOTTOM_ROW_ITEMS.map((brand, idx) => (
                  <div
                    key={`lower-a-${brand.id}-${idx}`}
                    className="group flex items-center gap-3 cursor-pointer text-[#6B4F3B]/90 hover:text-[#C8A97E] transition-colors duration-300"
                    id={`social-proof-lower-a-${brand.id}-${idx}`}
                  >
                    <div className={`transition-all duration-300 ${brand.hoverColorClass} w-6 h-6 flex items-center justify-center`}>
                      {brand.icon}
                    </div>
                    <span className={`font-serif text-[14px] md:text-[15px] tracking-[0.25em] font-medium transition-colors duration-300 ${brand.hoverColorClass}`}>
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-16 whitespace-nowrap shrink-0">
                {BOTTOM_ROW_ITEMS.map((brand, idx) => (
                  <div
                    key={`lower-b-${brand.id}-${idx}`}
                    className="group flex items-center gap-3 cursor-pointer text-[#6B4F3B]/90 hover:text-[#C8A97E] transition-colors duration-300"
                    id={`social-proof-lower-b-${brand.id}-${idx}`}
                  >
                    <div className={`transition-all duration-300 ${brand.hoverColorClass} w-6 h-6 flex items-center justify-center`}>
                      {brand.icon}
                    </div>
                    <span className={`font-serif text-[14px] md:text-[15px] tracking-[0.25em] font-medium transition-colors duration-300 ${brand.hoverColorClass}`}>
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Absolute subtle divider line below */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8D9C5]/60 to-transparent" />
    </section>
  );
}
