import React from "react";

export default function MarqueeBanner() {
  const words = [
    "Yoga Classes",
    "Meditation",
    "Wellness",
    "Mindfulness",
    "Healing",
    "Retreats",
    "Personal Coaching"
  ];

  // Repeat the core words 4 times to construct a long, continuous seamless sequence
  const repeatedItems = [...words, ...words, ...words, ...words];

  return (
    <section 
      className="w-full bg-[#111111] py-6 sm:py-7 overflow-hidden border-y border-white/10 select-none relative z-20 flex items-center"
      id="academy-marquee-sec"
    >
      <div className="relative flex whitespace-nowrap">
        {/* Animated text track */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 sm:gap-16 shrink-0">
              <span className="font-serif text-lg sm:text-2xl text-white tracking-[0.15em] font-light">
                {item}
              </span>
              <span className="text-[#C8A97E] text-base sm:text-xl font-light">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
