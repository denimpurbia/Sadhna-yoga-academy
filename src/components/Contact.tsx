import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FAF6F0] text-dark-text overflow-hidden">
      
      {/* Botanical backdrop decoration */}
      <div className="absolute left-[-5%] top-[15%] w-[700px] h-[300px] pointer-events-none opacity-5 animate-float" id="botanical-decoration-contact-1">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-olive-green">
          <path d="M50,0 C65,10 75,30 75,50 C75,70 65,90 50,100 C35,90 25,70 25,50 C25,30 35,10 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Cormorant Garamond */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="block font-sans text-xs tracking-[0.25em] text-[#C8A97E] uppercase font-semibold">
            Inquire & Align
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#6B4F3B] tracking-tight leading-tight">
            Connect with Sadhna Academy
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#2D221C]/80 font-light max-w-lg mx-auto">
            Arrange a private session, enroll in classes, or consult on retreats in Udaipur. Live gracefully.
          </p>
          <div className="w-12 h-[1px] bg-[#C8A97E] mx-auto mt-2" />
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-[#E8D9C5]/60 p-8 md:p-12 shadow-lg space-y-10" id="contact-credentials-block">
          
          <div className="text-center">
            <h3 className="font-serif text-2xl font-light text-[#6B4F3B]">Academy Coordinates</h3>
          </div>

          {/* Direct Details Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#E8D9C5]/30" id="contact-coordinates">
            
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full border border-warm-beige flex items-center justify-center bg-white shadow-sm text-earth-brown transition-colors shrink-0">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-sans tracking-widest uppercase text-dark-text/50 block">Call Concierge</span>
                <a href="tel:+918955128569" className="font-sans text-sm text-dark-text font-semibold hover:text-soft-gold transition-colors block mt-0.5">
                  +91 8955128569
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-start-3 md:row-start-1">
              <div className="w-11 h-11 rounded-full border border-warm-beige flex items-center justify-center bg-white shadow-sm text-earth-brown transition-colors shrink-0">
                <Mail size={16} />
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] font-sans tracking-widest uppercase text-dark-text/50 block">Secure Wire</span>
                <a href="mailto:PURBIA576@gmail.com" className="font-sans text-sm text-dark-text font-semibold hover:text-soft-gold transition-colors block mt-0.1 break-words">
                 PURBIA576@ gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-start-2 md:row-start-1">
              <div className="w-11 h-11 rounded-full border border-warm-beige flex items-center justify-center bg-white shadow-sm text-earth-brown shrink-0">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-sans tracking-widest uppercase text-dark-text/50 block">Address</span>
                <span className="font-sans text-sm text-dark-text font-medium block leading-relaxed mt-0.5">
                  thur, badgoan, Udaipur, Rajasthan, India
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
