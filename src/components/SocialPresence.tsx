import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, ArrowLeft, ArrowRight, Play, ExternalLink } from "lucide-react";

interface ReelItem {
  id: string;
  thumbnailUrl: string;
  instagramUrl: string;
  caption: string;
  likes?: number;
  comments?: number;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: "reel-1",
    thumbnailUrl: "thumbnail/reel1.jpeg",
    instagramUrl: "https://www.instagram.com/reel/DYQuMZyv7rT/?igsh=NHVjNHFtdXAwMWs4",
    caption: "पानी के अन्दर योग अभ्यास (Aqua Yoga)🧘🏼‍♂️🧘🏼‍♂️🧘🏼‍♂️🧘🏼‍♂️🧘🏼‍♂️🧘🏼‍♂️ aquayoga #yogalife #goodhelth❤️💪💯💯"
  },
  {
    id: "reel-2",
    thumbnailUrl: "thumbnail/reel2.jpeg",
    instagramUrl: "https://www.instagram.com/reel/DXkINWqj5kL/?igsh=MXR3eGU1cHZkNmJ4dg==",
    caption: "Conscious Vagus Nerve Activation. Breathe slowly through the solar plexus & feel deep tranquility set in."
  },
  {
    id: "reel-3",
    thumbnailUrl: "thumbnail/reel3.jpeg",
    instagramUrl: "https://www.instagram.com/reel/DY6LC3vPUxI/?igsh=MWF2d25xbmw2djRrNA==",
    caption: "The Sunset Alignment. Why physical practice during late twilight resets natural melatonin synthesis."
  }
];

export default function SocialPresence() {
  const [activeIdx, setActiveIdx] = useState<number>(1); // default middle one is active

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % REEL_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + REEL_ITEMS.length) % REEL_ITEMS.length);
  };

  // Auto sliding implementation to satisfy user intent completely
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const mapIndexToPosition = (itemIdx: number) => {
    const diff = (itemIdx - activeIdx + REEL_ITEMS.length) % REEL_ITEMS.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section 
      id="social-presence" 
      className="relative py-24 md:py-32 bg-[#FAF6F0] text-dark-text overflow-hidden transition-colors"
    >
      {/* Ornamental Backdrops */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-beige/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-gold/5 rounded-full blur-[120px] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="block font-sans text-xs tracking-[0.25em] text-[#C8A97E] uppercase font-semibold">
            Social Presence
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#6B4F3B] tracking-tight leading-tight">
            Follow our Spiritual Flow
          </h2>
          <p className="font-sans text-xs sm:text-sm text-dark-text/75 leading-relaxed max-w-md mx-auto">
            Discover gentle physical corrections, micro-meditations, and exclusive updates directly on our digital feed.
          </p>
        </div>

        {/* Carousel Visual Area */}
        <div className="relative w-full max-w-4xl h-[480px] sm:h-[550px] flex items-center justify-center mt-4 mb-12">
          
          {/* Navigation Arrows */}
          <div className="absolute left-4 sm:-left-6 lg:-left-12 z-30">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-warm-beige hover:border-soft-gold text-[#6B4F3B] bg-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous Reel"
              id="social-presence-prev-btn"
            >
              <ArrowLeft size={18} />
            </button>
          </div>
          
          <div className="absolute right-4 sm:-right-6 lg:-right-12 z-30">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-warm-beige hover:border-soft-gold text-[#6B4F3B] bg-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next Reel"
              id="social-presence-next-btn"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Cards Frame */}
          <div className="relative w-full h-full flex items-center justify-center" id="social-presence-cards-frame">
            {REEL_ITEMS.map((item, idx) => {
              const pos = mapIndexToPosition(idx);
              const isCenter = pos === "center";
              const isRight = pos === "right";
              const isLeft = pos === "left";

              return (
                <motion.div
                  key={item.id}
                  style={{ originY: 0.5 }}
                  animate={{
                    scale: isCenter ? 1 : 0.82,
                    x: isCenter ? 0 : isRight ? "105%" : "-105%",
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? "blur(0px)" : "blur(3px)",
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 25 }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIdx(idx);
                    } else {
                      window.open(item.instagramUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`absolute w-[240px] sm:w-[270px] md:w-[290px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(107,79,59,0.1)] bg-white/5 backdrop-blur-md border border-[#E8D9C5]/30 flex flex-col justify-between p-4 cursor-pointer transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(107,79,59,0.18)] ${
                    isCenter ? "pointer-events-auto" : "pointer-events-auto"
                  }`}
                  id={`instagram-reel-card-${item.id}`}
                >
                  {/* Aspect ratio background content */}
                  <img
                    src={item.thumbnailUrl}
                    alt="Instagram Reel video preview thumbnail"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40 z-10" />

                  {/* Header metadata inside Card overlay */}
                  <div className="relative z-20 flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FAF6F0]">
                        <Instagram size={14} />
                      </div>
                      <span className="font-mono text-[10px] text-white tracking-widest uppercase font-semibold">reels</span>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ExternalLink size={10} className="text-white" />
                      <span className="font-mono text-[9px] text-[#FAF6F0] font-medium uppercase tracking-wider">open</span>
                    </div>
                  </div>

                  {/* Centered play indicator showing visual promptness */}
                  <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#FAF6F0]/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-[#6B4F3B] z-20 hover:scale-110 active:scale-95 transition-all">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>

                  {/* Footer Caption metadata */}
                  <div className="relative z-20 space-y-3 text-white">
                    <p className="font-sans text-[11px] leading-relaxed text-white/90 line-clamp-2 font-light">
                      {item.caption}
                    </p>

                    <div className="flex items-center gap-4 pt-2.5 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <span className="text-[#C8A97E] text-xs font-semibold">♥</span>
                        <span className="font-mono text-[10px] text-white/80">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-white/60 text-[10px]">💬</span>
                        <span className="font-mono text-[10px] text-white/80">{item.comments}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Button Interaction layout */}
        <div className="text-center space-y-4 pt-4">
          <motion.a
            href="https://www.instagram.com/sadhna_yoga_academy?igsh=YzZwbml3OGo3bDZ6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, backgroundColor: "#6B4F3B", color: "#FAF6F0", borderColor: "#6B4F3B" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#6B4F3B]/60 font-sans text-xs tracking-[0.2em] font-medium text-[#6B4F3B] uppercase transition-all duration-300 bg-transparent shadow-sm hover:shadow-lg cursor-pointer"
            id="follow-on-instagram-link"
          >
            <Instagram size={14} />
            Follow @sadhna.yoga
          </motion.a>
        </div>

      </div>
    </section>
  );
}
