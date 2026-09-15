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

    // Lock scroll during 1.5s loading
    document.body.style.overflow = "hidden";

    const totalDuration = 1500; // 1.5 seconds

    // Fade out after 1.5 seconds
    const finishTimeout = setTimeout(() => {
      setIsFinished(true);
    }, totalDuration);

    // Hide completely after fade-out transition (1500ms + 400ms)
    const hideTimeout = setTimeout(() => {
      setIsHidden(true);
      isInitialSiteLoad = false;
      document.body.style.overflow = "auto";
    }, totalDuration + 400);

    return () => {
      clearTimeout(finishTimeout);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0A0203] flex flex-col items-center justify-center p-6 transition-all duration-500 select-none ${
        isFinished ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Subtle Blueprint Grid & Glowing Radial Orbs */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9E1218]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-md">
        
        {/* Brand Emblem */}
        <div className="w-24 h-24 relative bg-[#160608]/80 border-2 border-[#9E1218]/60 rounded-full flex items-center justify-center p-1 shadow-[0_0_35px_rgba(158,18,24,0.4)] backdrop-blur-md overflow-hidden">
          <Image
            src="/images/bs_energy_logo.png"
            alt="BS Energy India Logo"
            width={96}
            height={96}
            className="object-contain w-full h-full rounded-full drop-shadow-[0_0_10px_rgba(158,18,24,0.6)]"
            priority
          />
        </div>

        {/* Main Welcome Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-widest font-mono uppercase">
            WELCOME TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-[#9E1218]">
              BS ENERGY INDIA
            </span>
          </h1>
          <p className="text-xs font-mono text-slate-300 tracking-wider uppercase">
            Industrial Heating & Energy Solutions
          </p>
        </div>

        {/* 2-Second Circular Loading Spinner */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-3 border-[#9E1218]/30 border-t-[#9E1218] border-r-[#E2E8F0] rounded-full animate-spin shadow-[0_0_20px_rgba(158,18,24,0.5)]" />
          <span className="text-[11px] font-mono text-[#E2E8F0] tracking-widest uppercase animate-pulse">
            LOADING...
          </span>
        </div>

      </div>
    </div>
  );
}
