"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isFinished, setIsFinished] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock scroll during 2s loading
    document.body.style.overflow = "hidden";

    const totalDuration = 2000; // 2 seconds

    // Fade out after 2 seconds
    const finishTimeout = setTimeout(() => {
      setIsFinished(true);
    }, totalDuration);

    // Hide completely after fade-out transition (2000ms + 500ms)
    const hideTimeout = setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "auto";
    }, totalDuration + 500);

    return () => {
      clearTimeout(finishTimeout);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#060C14] flex flex-col items-center justify-center p-6 transition-all duration-500 select-none ${
        isFinished ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Subtle Blueprint Grid & Glowing Radial Orbs */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-md">
        
        {/* Brand Emblem */}
        <div className="w-16 h-16 relative bg-[#0F1D30] border border-[#FF6B00]/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.3)]">
          <Image
            src="/images/BS_ENERGY_INDIA_3D_LOGO.jpg"
            alt="BS Energy India Logo"
            width={48}
            height={48}
            className="object-contain rounded-full"
          />
        </div>

        {/* Main Welcome Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-widest font-mono uppercase">
            WELCOME TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#FF6B00]">
              BS ENERGY INDIA
            </span>
          </h1>
          <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
            Industrial Heating & Energy Solutions
          </p>
        </div>

        {/* 2-Second Circular Loading Spinner */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-3 border-[#FF6B00]/20 border-t-[#FF6B00] border-r-[#FF6B00] rounded-full animate-spin shadow-[0_0_20px_rgba(255,107,0,0.4)]" />
          <span className="text-[11px] font-mono text-[#FF6B00] tracking-widest uppercase animate-pulse">
            LOADING...
          </span>
        </div>

      </div>
    </div>
  );
}
