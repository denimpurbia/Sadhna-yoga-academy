import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need prior yoga experience to join?",
    answer: "No prior experience is required whatsoever. Our classes are carefully designed to accommodate all levels, from absolute beginners to advanced practitioners. Sadhna's gentle, warm guidance offers personalized adjustments and specific alternative postures tailored for every physical composition."
  },
  {
    id: "faq-2",
    question: "What should I bring to class?",
    answer: "We recommend wearing comfortable, breathable physical wear. We provide everything else for your peaceful journey—including premium eco-friendly alignment mats, organic cotton bolsters, cooling lavender towels, and supportive props. You are only invited to bring a personal water flask."
  },
  {
    id: "faq-3",
    question: "Do you offer online yoga sessions?",
    answer: "Yes, we offer exquisite, high-fidelity live interactive private classes and live-streamed virtual workshops. These online experiences are designed to bring the deep sensory calm of our physical sanctuary directly into the ease and comfort of your home."
  },
  {
    id: "faq-4",
    question: "Can yoga help reduce stress and anxiety?",
    answer: "Absolutely. Beyond physiological flexibility, our teachings prioritize conscious vagus nerve activation, sensory withdrawal, and deliberate pranayama breathing. This holistic, mindful physical therapy is highly effective for resetting the nervous system, reducing chronic cortisol, and clearing mental clutter."
  },
  {
    id: "faq-5",
    question: "How many classes should I attend per week?",
    answer: "For profound, lasting physical alignment and sustainable cognitive calm, we recommend attending 2 to 3 custom-focused sessions per week. However, even a single, deeply intentional weekly class serves as an invaluable anchor for your mental health."
  },
  {
    id: "faq-6",
    question: "Do you provide personal yoga training?",
    answer: "Yes, we specialize in high-touch, one-on-one private mentorship and therapeutic physical programs. These personalized sessions are custom-built around your body's specific alignment needs, energy levels, personal schedules, and spiritual aspirations."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#F6F0E8] text-dark-text overflow-hidden transition-colors"
    >
      {/* Structural & Ornamental Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-warm-beige/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-soft-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-warm-beige/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" id="faq-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header Left Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-start lg:sticky lg:top-28 h-fit" id="faq-left-column">
            <span className="font-sans text-xs tracking-[0.25em] text-soft-gold uppercase font-semibold">
              Curated Guidance
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-earth-brown leading-[1.1] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-sm md:text-base text-dark-text/75 leading-relaxed max-w-md">
              Find physical alignment and spiritual focus. If your questions aren't addressed here, please connect with Sadhna directly for a personalized curation session.
            </p>
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-earth-brown border-b border-earth-brown/40 pb-1 hover:border-soft-gold hover:text-soft-gold transition-all duration-300"
                id="faq-ask-custom-question"
              >
                Ask a custom question
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4" id="faq-right-column">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className={`rounded-2xl border transition-all duration-300 shadow-[0_4px_24px_rgba(107,79,59,0.02)] ${
                    isOpen
                      ? "bg-white/60 backdrop-blur-md border-warm-beige shadow-[0_12px_40px_rgba(107,79,59,0.05)]"
                      : "bg-white/40 backdrop-blur-sm border-warm-beige/30 hover:border-warm-beige hover:bg-white/50"
                  }`}
                  id={`faq-accordion-card-${item.id}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left py-6 px-6 sm:px-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-content-${item.id}`}
                    id={`faq-btn-${item.id}`}
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-earth-brown group-hover:text-soft-gold transition-colors duration-300 leading-tight">
                      {item.question}
                    </span>
                    <span 
                      className={`w-8 h-8 rounded-full border border-warm-beige flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-earth-brown text-white border-earth-brown rotate-90" : "bg-white text-earth-brown hover:bg-warm-beige/30"
                      }`}
                      id={`faq-icon-holder-${item.id}`}
                    >
                      {isOpen ? (
                        <Minus size={15} strokeWidth={2} />
                      ) : (
                        <Plus size={15} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-content-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 text-sm text-dark-text/80 leading-relaxed font-inter font-light border-t border-warm-beige/20 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
