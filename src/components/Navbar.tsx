import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Compass, Sparkles } from "lucide-react";
import SadhnaLogo from "./SadhnaLogo";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    if (currentPath !== "/") {
      onNavigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentPath !== "/") {
      e.preventDefault();
      onNavigate("/");
      setTimeout(() => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Awards", href: "#awards" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF6F0]/80 backdrop-blur-md shadow-sm border-b border-warm-beige/25 py-3"
            : "bg-transparent py-6"
        }`}
        id="app-navbar-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-[12px] group"
            id="navbar-logo-link"
          >
            <SadhnaLogo />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider font-semibold text-dark-text leading-tight uppercase">
                SADHNA
              </span>
              <span className="text-[9px] font-sans tracking-[0.3em] text-[#6B4F3B] uppercase font-medium">
                Yoga Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10" id="desktop-navigation-container">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#2D221C] hover:text-white transition-colors duration-300 group py-1.5"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden lg:flex items-center" id="desktop-cta-container">
            <button
              onClick={handleContactClick}
              className="px-6 py-2.5 rounded-full border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-[#F5EFE6] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 font-sans shadow-sm cursor-pointer"
              id="desktop-book-session-button"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden items-center gap-3" id="mobile-navigation-trigger">
            <button
              onClick={handleContactClick}
              className="px-4 py-2 rounded-full border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-[#F5EFE6] text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 font-sans cursor-pointer"
              id="mobile-book-session-mini"
            >
              Connect
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-warm-beige/30 transition-colors text-dark-text cursor-pointer"
              aria-label="Toggle navigation menu"
              id="mobile-menu-burger"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-[#FAF6F0] z-30 pt-24 pb-8 px-8 border-b border-warm-beige shadow-lg lg:hidden"
            id="mobile-drawer-menu"
          >
            <div className="flex flex-col space-y-5" id="mobile-nav-links-list">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleLinkClick(e, link.href);
                  }}
                  className="text-sm font-sans font-medium uppercase tracking-widest text-[#2D221C] hover:text-white border-b border-warm-beige/30 pb-2 transition-colors block"
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleContactClick();
                  }}
                  className="w-full bg-earth-brown text-[#FAF6F0] text-center py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:bg-dark-text transition-all duration-300 shadow cursor-pointer"
                  id="mobile-menu-submit-session"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
