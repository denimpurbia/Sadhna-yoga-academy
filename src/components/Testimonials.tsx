import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Video, Play, X } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isShowingAll, setIsShowingAll] = useState(false);

  // Monitor viewport size for precise responsive offsets
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5 seconds (only slide if modal player is closed)
  useEffect(() => {
    if (activeVideoUrl) return; // Don't auto-slide while watching high-quality student video
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, activeVideoUrl]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  // Safe wrapping offset calculation to handle infinite circular positions
  const getOffset = (index: number) => {
    const len = TESTIMONIALS_DATA.length;
    let offset = index - activeIndex;
    if (offset < -len / 2) offset += len;
    if (offset > len / 2) offset -= len;
    return offset;
  };

  const handleCardClick = (offset: number, videoUrl: string) => {
    if (offset === 0) {
      // Centered active card opens the premium in-app video player directly
      setActiveVideoUrl(videoUrl);
    } else {
      // Clicking left or right card slides center over to that specific card
      setActiveIndex((prev) => (prev + offset + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    }
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#FAF6F0] text-[#2D221C] overflow-hidden select-none">
      {/* Decorative Ornaments & Vignette lights */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D9C5]/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C8A97E]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Heading with Cormorant Garamond styled serif */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="block font-sans text-xs tracking-[0.25em] text-[#C8A97E] uppercase font-semibold">
            Transformative Journeys
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#6B4F3B] tracking-tight leading-tight">
            Client reviews that echo the soul of Sadhna Academy
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A97E] mx-auto mt-2" />
        </div>

        {/* Outer Grid & Floating Navigation layout */}
        <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[440px] md:min-h-[580px] px-2 md:px-10" id="carousel-outer-wrapper">
          
          {/* Left Arrow outside Left reel */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-40 w-12 h-12 rounded-full border border-[#E8D9C5] bg-white/90 backdrop-blur-md text-[#6B4F3B] hover:text-white hover:bg-[#C8A97E] hover:border-[#C8A97E] flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Success Story"
            id="reels-nav-prev"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Infinite Carousel Container */}
          <div className="relative w-full h-[380px] md:h-[500px] flex items-center justify-center overflow-visible" id="reels-track">
            {TESTIMONIALS_DATA.map((testimonial, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isVisible = Math.abs(offset) <= 1;

              // Compute responsive position translates dynamic values
              let translateX = "0%";
              if (isLeft) translateX = isMobile ? "-45%" : "-60%";
              if (isRight) translateX = isMobile ? "45%" : "60%";

              // Center is 1.05 scale, sides are 0.85
              const scale = isActive ? 1.05 : 0.84;
              // Center is zIndex 30, sides are 10
              const zIndex = isActive ? 30 : 10;
              // Opacity & blur effects
              const opacity = isActive ? 1 : isVisible ? 0.38 : 0;
              const blurPercent = isActive ? "blur(0px)" : isVisible ? "blur(7px)" : "blur(15px)";

              return (
                <motion.div
                  key={testimonial.id}
                  style={{ pointerEvents: isVisible ? "auto" : "none" }}
                  animate={{
                    x: translateX,
                    scale: scale,
                    opacity: opacity,
                    filter: blurPercent,
                    zIndex: zIndex
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 32,
                    mass: 0.8
                  }}
                  onClick={() => handleCardClick(offset, testimonial.videoEmbedUrl)}
                  className={`absolute w-[210px] md:w-[280px] aspect-[9/16] rounded-[28px] overflow-hidden bg-[#2D221C]/5 border border-[#E8D9C5]/40 shadow-[0_12px_45px_rgba(107,79,59,0.06)] hover:shadow-[0_28px_60px_rgba(107,79,59,0.22)] cursor-pointer select-none group transition-shadow duration-300`}
                  id={`reel-card-${testimonial.id}`}
                >
                  {/* Portrait Video Thumbnail */}
                  <img
                    src={testimonial.videoThumbUrl}
                    alt={`${testimonial.name} student review thumbnail`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700 group-hover:scale-105 brightness-95"
                  />

                  {/* Dark premium gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 z-10" />

                  {/* Top: Premium Video Review glass badges */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-[#C8A97E]/80">
                    <Video size={13} className="text-white" />
                    <span className="font-sans text-[9px] tracking-[0.16em] text-white uppercase font-bold">
                      Story
                    </span>
                  </div>

                  {/* Duration stamp */}
                  <div className="absolute top-4 right-4 z-20 font-mono text-[9px] tracking-wider text-white/90 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {testimonial.duration}
                  </div>

                  {/* Center highlighted luxury play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.05, 1] : 1,
                        opacity: isActive ? 1 : 0.4
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                      }}
                      className="w-15 h-15 rounded-full bg-white/95 backdrop-blur-md shadow-2xl text-[#6B4F3B] flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-[#C8A97E] group-hover:text-white"
                    >
                      <Play size={18} fill="currentColor" className="ml-1 text-inherit" />
                    </motion.div>
                  </div>

                  {/* Bottom details label for Center Reels (no name or review text) */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-left transition-all duration-500">
                    <span className="font-mono text-[10px] tracking-widest text-[#E8D9C5] uppercase font-semibold block mb-1">
                      {testimonial.name}
                    </span>
                    <span className="font-sans text-[11px] text-white/80 block leading-tight font-light truncate group-hover:text-white transition-colors">
                      {testimonial.role} ▷
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow outside Right reel */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-40 w-12 h-12 rounded-full border border-[#E8D9C5] bg-white/90 backdrop-blur-md text-[#6B4F3B] hover:text-white hover:bg-[#C8A97E] hover:border-[#C8A97E] flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Success Story"
            id="reels-nav-next"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Tiny centered luxury navigation dots under the main carousel */}
        <div className="flex gap-2.5 mt-8" id="carousel-bottom-indicators">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === idx 
                  ? "bg-[#6B4F3B] w-7" 
                  : "bg-[#E8D9C5] hover:bg-[#C8A97E] w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* View All Reviews Button */}
        <motion.button
          onClick={() => setIsShowingAll(!isShowingAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 px-8 py-3.5 rounded-full border border-[#C8A97E] text-[#6B4F3B] font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#C8A97E] hover:text-white transition-all duration-300 shadow-md cursor-pointer"
          id="view-all-reviews-button"
        >
          {isShowingAll ? "Go Back" : "View more Reviews"}
        </motion.button>

      </div>

      {/* All Reviews Grid View */}
      <AnimatePresence>
        {isShowingAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mt-20 px-6 md:px-12 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto">
              <h3 className="text-center font-serif text-2xl sm:text-3xl font-light text-[#6B4F3B] mb-12">All Student Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {TESTIMONIALS_DATA.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveVideoUrl(testimonial.videoEmbedUrl)}
                    className="relative w-full aspect-[9/16] rounded-[20px] overflow-hidden bg-[#2D221C]/5 border border-[#E8D9C5]/40 shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-300"
                  >
                    {/* Video Thumbnail */}
                    <img
                      src={testimonial.videoThumbUrl}
                      alt={`${testimonial.name} review`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110 brightness-90"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl text-[#6B4F3B] flex items-center justify-center group-hover:bg-[#C8A97E] group-hover:text-white transition-all"
                      >
                        <Play size={18} fill="currentColor" className="ml-1" />
                      </motion.div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 space-y-2">
                      <h4 className="font-sans text-sm font-semibold text-white leading-tight">{testimonial.name}</h4>
                      <p className="font-sans text-xs text-white/80">{testimonial.role}</p>
                      <p className="font-sans text-xs text-white/70 line-clamp-2 italic">{testimonial.quote}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium In-App Modal video player */}
      <AnimatePresence>
        {activeVideoUrl !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant micro blur reflection effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoUrl(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-lg"
              id="video-player-backdrop"
            />

            {/* Video container modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-video z-10 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl"
              id="video-player-container"
            >
              {/* Premium Close indicator button */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute right-4 top-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#C8A97E] transition-colors z-20 cursor-pointer"
                aria-label="Close video player"
                id="video-player-close-button"
              >
                <X size={18} />
              </button>

              <video
                src={activeVideoUrl}
                title="Student Journey Video Story"
                controls
                autoPlay
                className="w-full h-full border-none"
                id="video-player"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
