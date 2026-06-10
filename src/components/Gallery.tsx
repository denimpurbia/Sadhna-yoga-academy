import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronRight, ChevronLeft, Image as ImageIcon } from "lucide-react";
import { GALLERY_DATA } from "../data";

interface GalleryProps {
  onViewFullGallery?: () => void;
}

export default function Gallery({ onViewFullGallery }: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const featuredImages = GALLERY_DATA.slice(0, 6);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % featuredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + featuredImages.length) % featuredImages.length
      );
    }
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-brand-bg text-dark-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-xl space-y-4 text-left">
            <span className="font-sans text-xs tracking-[0.25em] text-soft-gold uppercase font-semibold">
              Ethereal Captures
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-dark-text">
              Our Fine Art Gallery
            </h2>
            <p className="font-sans text-sm text-dark-text/75">
              Explore the moments of raw presence, silent organic setups and breathing flow recorded at our custom worldwide retreats.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex items-center gap-2">
            <ImageIcon size={16} className="text-earth-brown" />
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#66785F]">
              6 Masterworks
            </span>
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-image-grid">
          {featuredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] aspect-[4/3] bg-[#FAF6F0] border border-warm-beige/35 shadow-md hover:shadow-xl transition-all duration-500"
              id={`gallery-item-${item.id}`}
            >
              {/* Image Frame */}
              <img
                src={item.url}
                alt={`${item.title} - Sadhna Yoga Academy, Udaipur`}
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
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Center Button */}
        <div className="flex justify-center mt-12 md:mt-16" id="gallery-footer-action">
          <button
            onClick={onViewFullGallery}
            className="px-8 py-4 rounded-full border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-[#FAF6F0] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 font-sans shadow-sm cursor-pointer"
            id="view-full-gallery-button"
          >
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
              id="lightbox-backdrop"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] z-10 overflow-hidden flex flex-col items-center justify-center"
              id="lightbox-inner"
            >
              {/* Close Icon button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute right-4 top-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors z-20"
                aria-label="Close Lightbox"
                id="lightbox-close-button"
              >
                <X size={20} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors z-20"
                aria-label="Previous image"
                id="lightbox-prev-button"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors z-20"
                aria-label="Next image"
                id="lightbox-next-button"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Image */}
              <img
                src={featuredImages[selectedImageIndex].url}
                alt={`${featuredImages[selectedImageIndex].title} - Sadhna Yoga Academy, Udaipur`}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
                id="lightbox-main-img"
              />

              {/* Caption */}
              <div className="text-center mt-4 text-[#FAF6F0] z-20" id="lightbox-label-row">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-soft-gold font-semibold">
                  {featuredImages[selectedImageIndex].category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl mt-1 font-light">
                  {featuredImages[selectedImageIndex].title}
                </h4>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
