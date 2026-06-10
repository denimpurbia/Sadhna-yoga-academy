import React from "react";

interface SadhnaLogoProps {
  className?: string;
}

export default function SadhnaLogo({ className = "w-[36px] h-[36px] md:w-[46px] md:h-[46px]" }: SadhnaLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} transition-transform duration-500 group-hover:rotate-6`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="sadhna-official-svg-logo"
    >
      {/* Decorative Outer Concentric Dashed Ring - Infinite/Continuous Wholeness */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#ffffff"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.75"
      />

      {/* Elegant Solid Inner Ring */}
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke="#ffffff"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Radiant Sunrise - Fine Radial Ray Lines */}
      <g stroke="#ffffff" strokeWidth="0.8" opacity="0.6">
        <line x1="50" y1="20" x2="50" y2="14" />
        <line x1="68" y1="27" x2="72" y2="23" />
        <line x1="77" y1="41" x2="83" y2="39" />
        <line x1="77" y1="59" x2="83" y2="61" />
        <line x1="68" y1="73" x2="72" y2="77" />
        <line x1="32" y1="27" x2="28" y2="23" />
        <line x1="23" y1="41" x2="17" y2="39" />
        <line x1="23" y1="59" x2="17" y2="61" />
        <line x1="32" y1="73" x2="28" y2="77" />
      </g>

      {/* Central Radiating Sacred Sun Circle */}
      <circle cx="50" cy="36" r="3.5" fill="#ffffff" opacity="0.9" />

      {/* Handcrafted Sacred Lotus flower vector petals */}
      <g fill="#ffffff">
        {/* Core Center Flame/Petal */}
        <path
          d="M50 25 C52.5 35 53.5 48 50 74 C46.5 48 47.5 35 50 25 Z"
          className="fill-earth-brown"
        />

        {/* First Left Wing Petal */}
        <path
          d="M50 35 C42 41 34 52 38 72 C45 61 48 48 50 35 Z"
          fill="#C8A97E"
          opacity="0.95"
        />

        {/* First Right Wing Petal */}
        <path
          d="M50 35 C58 41 66 52 62 72 C55 61 52 48 50 35 Z"
          fill="#C8A97E"
          opacity="0.95"
        />

        {/* Wide Left Outward Petal */}
        <path
          d="M50 46 C36 49 26 58 30 73 C40 68 46 58 50 46 Z"
          fill="#6B4F3B"
        />

        {/* Wide Right Outward Petal */}
        <path
          d="M50 46 C64 49 74 58 70 73 C60 68 54 58 50 46 Z"
          fill="#6B4F3B"
        />

        {/* Bottom Stabilizer Leaves/Base */}
        <path
          d="M26 73 C36 78 64 78 74 73 C62 70 38 70 26 73 Z"
          fill="#6B4F3B"
        />
        
        {/* Underneath Foundation Platform Accent */}
        <path
          d="M34 76 C42 79 58 79 66 76 C58 75 42 75 34 76 Z"
          fill="#C8A97E"
        />
      </g>
    </svg>
  );
}
