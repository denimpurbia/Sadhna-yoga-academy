import React from "react";
import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export default function FloatingSocials() {
  return (
    <>
      {/* Bottom Left: Fixed Instagram Button */}
      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 pointer-events-auto">
        <motion.a
          href="https://www.instagram.com/sadhna_yoga_academy?igsh=YzZwbml3OGo3bDZ6"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -6, 0] 
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: {
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.12,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-[0_8px_30px_rgba(238,42,123,0.35)] hover:shadow-[0_15px_40px_rgba(238,42,123,0.6)] cursor-pointer group transition-shadow duration-300"
          id="floating-instagram"
          aria-label="Follow us on Instagram"
        >
          {/* Pulsing ring background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-100 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
          
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 pointer-events-none" />
          
          {/* Instagram Icon */}
          <Instagram size={24} className="relative z-10 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-6" />
        </motion.a>
      </div>

      {/* Bottom Right Floating Stack */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 items-center pointer-events-auto">
        


        {/* Bottom Right: Fixed WhatsApp Button */}
        <motion.a
          href="https://wa.me/9057756653?text=Hi%20Sadhna%20Yoga%20Academy%2C%20I'd%20love%20to%20learn%20more%20about%20your%20classes."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -6, 0] 
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: {
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.3 // Offset floating animation for staggered look
            }
          }}
          whileHover={{ 
            scale: 1.12,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] cursor-pointer group transition-shadow duration-300"
          id="floating-whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Ring background */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-100 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />
          
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 pointer-events-none" />
          
          {/* Messaging icon */}
          <MessageCircle size={26} className="relative z-10 w-[26px] h-[26px] md:w-8 md:h-8 transition-transform duration-300 group-hover:-rotate-6" fill="currentColor" />
        </motion.a>
      </div>
    </>
  );
}
