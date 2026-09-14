"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Module-level variable persists across client-side SPA route transitions in Next.js,
// but resets on initial page load or browser refresh (F5/Reload).
let isInitialSiteLoad = true;

export default function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(!isInitialSiteLoad);
  const [isFinished, setIsFinished] = useState(!isInitialSiteLoad);

  useEffect(() => {
    if (!isInitialSiteLoad) return;

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
      isInitialSiteLoad = false;
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
        <div className="w-24 h-24 relative bg-[#0F1D30]/80 border-2 border-[#FF6B00]/50 rounded-2xl flex items-center justify-center p-3 shadow-[0_0_35px_rgba(255,107,0,0.35)] backdrop-blur-md">
          <Image
            src="/images/alogoasgreen.png"
            alt="BS Energy India Logo"
            width={80}
            height={80}
            className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            priority
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
