import React from "react";
import { Compass, Phone, Mail, MapPin } from "lucide-react";
import SadhnaLogo from "./SadhnaLogo";

interface FooterProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Footer({ currentPath = "/", onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentPath !== "/") {
      e.preventDefault();
      if (onNavigate) {
        onNavigate("/");
        setTimeout(() => {
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Awards", href: "#awards" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Yoga Classes", href: "#about" },
    { name: "Meditation Programs", href: "#about" },
    { name: "Wellness Retreats", href: "#about" },
    { name: "Privacy Policy", href: "#hero" },
    { name: "Terms & Conditions", href: "#hero" }
  ];

  return (
    <footer className="relative bg-[#FAF6F0] text-dark-text border-t border-[#E8D9C5]/45 pt-24 pb-12 sm:pb-16 overflow-hidden select-none" id="app-luxury-footer">
      
      {/* Background delicate decorative plant symbol/leaf */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[400px] h-[400px] pointer-events-none opacity-[0.03] select-none" id="botanical-footer-backdrop">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-olive-green">
          <path d="M50,0 C65,10 75,30 75,50 C75,70 65,90 50,100 C35,90 25,70 25,50 C25,30 35,10 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Three Column Grid inside luxurious spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* LEFT COLUMN: Logo and Coordinates */}
          <div className="md:col-span-5 space-y-6 text-left" id="footer-left-col">
            <div className="flex items-center gap-[12px] group">
              <SadhnaLogo />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold text-dark-text leading-tight uppercase">
                  SADHNA
                </span>
                <span className="text-[9px] font-sans tracking-[0.3em] text-[#6B4F3B] uppercase font-medium">
                  Yoga Academy
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#2D221C]/75 leading-relaxed font-sans font-light max-w-sm">
              An elite sanctuary dedicated to authentic yoga alignment, mindfulness journeys, and bespoke wellness retreats under local Rajasthani heritage aesthetics.
            </p>

            <div className="space-y-3.5 pt-2">
              <a 
                href="tel:+918955128569" 
                className="flex items-center gap-3 text-xs sm:text-sm text-[#2D221C]/85 hover:text-[#C8A97E] transition-colors duration-300 font-sans font-medium hover:underline"
              >
                <Phone size={14} className="text-[#C8A97E]" />
                <span>+91 8955128569</span>
              </a>
              <a 
                href="mailto:contact@sadhnayogaacademy.com" 
                className="flex items-center gap-3 text-xs sm:text-sm text-[#2D221C]/85 hover:text-[#C8A97E] transition-colors duration-300 font-sans hover:underline"
              >
                <Mail size={14} className="text-[#C8A97E]" />
                <span>PURBIA576@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#2D221C]/85 font-sans">
                <MapPin size={14} className="text-[#C8A97E] shrink-0 mt-0.5" />
                <span>Udaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Quick Links */}
          <div className="md:col-span-3 md:col-start-7 space-y-6 text-left" id="footer-center-col">
            <h4 className="font-serif text-sm font-semibold tracking-[0.1em] text-[#6B4F3B] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#2D221C]/70 hover:text-[#C8A97E] transition-colors duration-300 font-sans block tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Resources */}
          <div className="md:col-span-3 space-y-6 text-left" id="footer-right-col">
            <h4 className="font-serif text-sm font-semibold tracking-[0.1em] text-[#6B4F3B] uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#2D221C]/70 hover:text-[#C8A97E] transition-colors duration-300 font-sans block tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM AREA: Faded watermark with very low opacity */}
        <div className="w-full text-center select-none pointer-events-none mt-20 md:mt-24 overflow-hidden" id="footer-watermark-row">
          <h2 className="font-serif text-[3.5vw] font-bold text-[#6B4F3B] opacity-[0.55] tracking-[0.25em] leading-none uppercase whitespace-nowrap">
            Sadhna Yoga Academy
          </h2>
        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="mt-8 pt-8 border-t border-[#E8D9C5]/20 text-center relative z-10" id="footer-copyright-row">
          <p className="text-[10px] sm:text-xs text-[#2D221C]/55 font-sans tracking-widest uppercase">
            &copy; 2026 Sadhna Yoga Academy. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
