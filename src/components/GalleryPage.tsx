import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronRight, ChevronLeft, ArrowLeft, Calendar, Compass, Sparkles } from "lucide-react";
import { GALLERY_DATA } from "../data";

interface GalleryPageProps {
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export default function GalleryPage({ onBack, onNavigate }: GalleryPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  // Get unique categories for tab filtering
  const categories = ["All", ...Array.from(new Set(GALLERY_DATA.map((item) => item.category)))];

  const filteredImages = filter === "All" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter((item) => item.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % filteredImages.length;
      setSelectedImageIndex(nextIndex);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const prevIndex = (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImageIndex(prevIndex);
    }
  };

  // Bind keyboard events for the lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") {
        const nextIndex = (selectedImageIndex + 1) % filteredImages.length;
        setSelectedImageIndex(nextIndex);
      }
      if (e.key === "ArrowLeft") {
        const prevIndex = (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImageIndex(prevIndex);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  // Find relative pointer to overall index in GALLERY_DATA
  const getOriginalIndex = (filteredIndex: number) => {
    const item = filteredImages[filteredIndex];
    return GALLERY_DATA.findIndex((g) => g.id === item.id);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF6F0] text-dark-text pt-28 pb-20 overflow-x-hidden font-sans selection:bg-soft-gold" id="gallery-page-root">
      
      {/* Background Zen Accent Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF6F0] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-warm-beige/30 rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Embedded Inner Navbar wrapper */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#FAF6F0]/80 backdrop-blur-md shadow-sm border-b border-warm-beige/25 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#6B4F3B] hover:text-soft-gold transition-colors duration-300 cursor-pointer"
            id="gallery-back-button-nav"
          >
            <ArrowLeft size={14} />
            <span>Back to Academy</span>
          </button>

          <div className="flex items-center gap-2">
            <Compass size={15} className="text-earth-brown" />
            <span className="font-serif text-lg tracking-wider font-semibold text-dark-text uppercase">Sadhna Gallery</span>
          </div>

          <button 
            onClick={() => {
              onNavigate("/");
              setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 150);
            }}
            className="px-5 py-2 rounded-full bg-[#6B4F3B] hover:bg-earth-brown text-white text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 font-sans cursor-pointer"
            id="gallery-contact-button"
          >
            Connect
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Gallery Title & Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4 pt-4">
          <span className="block font-sans text-xs tracking-[0.25em] text-[#C8A97E] uppercase font-semibold">
            THE SADHNA JOURNEY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#6B4F3B] tracking-tight leading-tight" id="gallery-header-title">
            Yoga Excellence in Udaipur
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#2D221C]/80 font-light max-w-lg mx-auto leading-relaxed">
           Explore inspiring moments from yoga workshops, meditation sessions, international retreats, community wellness programs, championships, awards, and student success stories led by Sadhna Yoga Academy.
          </p>
          <div className="w-12 h-[1px] bg-[#C8A97E] mx-auto mt-2" />
        </div>

        {/* Tabbed Interactive Categories Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-serif text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-[#6B4F3B] text-[#FAF6F0] shadow-sm transform -translate-y-0.5"
                  : "bg-white text-[#2D221C] border border-[#E8D9C5]/35 hover:border-soft-gold"
              }`}
              id={`gallery-tab-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style/Flexible Editorial Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="gallery-mansonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] aspect-[4/3] bg-white border border-warm-beige/35 shadow-sm hover:shadow-xl transition-all duration-500"
                id={`gallery-page-item-${item.id}`}
              >
                {/* Lazy-loaded Image optimized for SEO */}
                <img
                  src={item.url}
                  alt={`${item.title} - Sadhna Yoga Academy, Udaipur`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0 brightness-[96%] group-hover:brightness-100"
                />

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-text/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-sans tracking-widest text-[#C8A97E] font-semibold uppercase mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-[#FAF6F0] text-xl font-normal">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-[#2D221C]/50 font-serif italic text-lg">
            No entries found under this focus area.
          </div>
        )}

        {/* Bottom Navigation Row */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="px-8 py-3.5 rounded-full border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-[#FAF6F0] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 font-sans shadow-sm cursor-pointer"
            id="gallery-back-button-bottom"
          >
            ← Back to Homepage
          </button>
        </div>

      </div>

      {/* Immersive Lightbox Modal with Key Event bindings */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
              id="gallery-page-lightbox-backdrop"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-4xl max-h-[85vh] z-10 overflow-hidden flex flex-col items-center justify-center"
              id="gallery-page-lightbox-inner"
            >
              {/* Close Icon button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute right-4 top-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-20 cursor-pointer"
                aria-label="Close Lightbox"
                id="gallery-page-lightbox-close"
              >
                <X size={20} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-20 cursor-pointer"
                aria-label="Previous image"
                id="gallery-page-lightbox-prev"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-20 cursor-pointer"
                aria-label="Next image"
                id="gallery-page-lightbox-next"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Image Frame with original-ratio height optimization */}
              <img
                src={filteredImages[selectedImageIndex].url}
                alt={`${filteredImages[selectedImageIndex].title} - Sadhna Yoga Academy, Udaipur`}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[72vh] object-contain rounded-lg border border-white/10"
                id="gallery-page-lightbox-img"
              />

              {/* Title & Category Label */}
              <div className="text-center mt-5 text-[#FAF6F0] z-20" id="gallery-page-lightbox-caption">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#C8A97E] font-semibold">
                  {filteredImages[selectedImageIndex].category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl mt-1 font-light">
                  {filteredImages[selectedImageIndex].title}
                </h4>
                <p className="text-[10px] font-sans text-white/50 tracking-wide mt-1">
                  Image {selectedImageIndex + 1} of {filteredImages.length} under {filter} focus
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
