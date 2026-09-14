"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Flame, ShieldCheck, Activity, Cpu } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("INITIALIZING THERMAL & COMBUSTION MATRIX...");
  const [isFinished, setIsFinished] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const totalDuration = 5000; // 5 seconds
    const intervalTime = 40; // Update every 40ms for smooth 125 steps
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        // Dynamic status updates based on progress percentage
        if (next < 25) {
          setStatusMessage("INITIALIZING THERMAL & COMBUSTION MATRIX...");
        } else if (next < 50) {
          setStatusMessage("CALIBRATING BURNER CONTROL SYSTEMS...");
        } else if (next < 75) {
          setStatusMessage("SYNCHRONIZING PIPELINE INFRASTRUCTURE...");
        } else if (next < 95) {
          setStatusMessage("VERIFYING OPERATIONAL EFFICIENCY PARAMETERS...");
        } else if (next >= 100) {
          setStatusMessage("SYSTEM ONLINE — BS ENERGY INDIA READY");
        }

        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Fade out after 5 seconds
    const finishTimeout = setTimeout(() => {
      setIsFinished(true);
    }, totalDuration);

    // Hide completely after fade-out transition completes (5000ms + 700ms)
    const hideTimeout = setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "auto";
    }, totalDuration + 700);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isHidden) return null;

  const currentPercent = Math.min(100, Math.floor(progress));
  const strokeDashoffset = 377 - (377 * currentPercent) / 100; // 2 * PI * r (r=60 -> circumference ~ 377)

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#060C14] flex flex-col items-center justify-between p-6 sm:p-12 transition-all duration-700 select-none ${
        isFinished ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Industrial Grid & Glowing Radial Orbs */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#FF6B00]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Telemetry Info */}
      <div className="w-full max-w-5xl flex items-center justify-between z-10 relative border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-gray-300 uppercase">
            SYSTEM BOOT // V2.07
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>CORE STATUS: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>SAFETY INTERLOCKS: NOMINAL</span>
          </div>
        </div>
      </div>

      {/* Center Hero Blueprint Loading Core */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full text-center my-auto space-y-8">
        
        {/* Logo / Emblem Container with Glowing Ring */}
        <div className="relative flex items-center justify-center">
          
          {/* Circular Progress Gauge SVG */}
          <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 140 140">
            {/* Background Circle */}
            <circle
              cx="70"
              cy="70"
              r="60"
              className="stroke-white/10"
              strokeWidth="4"
              fill="transparent"
            />
            {/* Animated Progress Circle */}
            <circle
              cx="70"
              cy="70"
              r="60"
              className="stroke-[#FF6B00] transition-all duration-75 ease-linear drop-shadow-[0_0_15px_rgba(255,107,0,0.8)]"
              strokeWidth="5"
              strokeDasharray="377"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Inner Brand Emblem Box */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
            <div className="w-16 h-16 relative bg-[#0F1D30] border border-[#FF6B00]/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.3)]">
              <Image
                src="/images/BS_ENERGY_INDIA_3D_LOGO.jpg"
                alt="BS Energy India Logo"
                width={48}
                height={48}
                className="object-contain rounded-full"
                onError={(e) => {
                  // Fallback icon if logo image path fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Flame className="w-8 h-8 text-[#FF6B00] absolute" style={{ display: 'none' }} />
            </div>
          </div>
        </div>

        {/* Brand Title & Subtitle */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl sm:text-2xl font-black text-white tracking-widest font-mono uppercase">
              BS ENERGY INDIA
            </span>
          </div>
          <p className="text-xs font-mono text-[#FF6B00] tracking-widest uppercase">
            Industrial Heating & Energy Solutions
          </p>
        </div>

        {/* Numeric Counter & Progress Bar */}
        <div className="w-full space-y-3 px-4">
          <div className="flex items-end justify-between font-mono text-xs text-gray-400 border-b border-white/10 pb-1">
            <div className="flex items-center gap-2 text-gray-300">
              <Cpu className="w-3.5 h-3.5 text-[#FF6B00] animate-spin" />
              <span className="truncate max-w-[240px] text-[11px] sm:text-xs">
                {statusMessage}
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-[#FF6B00]">
              {String(currentPercent).padStart(3, "0")}%
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2 bg-white/5 border border-white/10 rounded-sm overflow-hidden p-0.5 relative">
            <div
              className="h-full bg-gradient-to-r from-[#FF6B00]/80 via-[#FF6B00] to-white rounded-xs transition-all duration-75 ease-linear shadow-[0_0_15px_rgba(255,107,0,0.9)]"
              style={{ width: `${currentPercent}%` }}
            />
          </div>
        </div>

        {/* Blueprint Reticle Accent Lines */}
        <div className="flex items-center gap-6 text-[10px] font-mono text-gray-500 pt-2">
          <span>EST. 2007</span>
          <span>•</span>
          <span>HIGH-PERFORMANCE ENGINEERING</span>
          <span>•</span>
          <span>5.0s BOOT</span>
        </div>

      </div>

      {/* Bottom Technical Grid Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[10px] font-mono text-gray-500 z-10 relative border-t border-white/10 pt-4">
        <div>LATENCY: OPTIMAL</div>
        <div className="text-[#FF6B00]">COMMENCING INDUSTRIAL ENGINE</div>
        <div>CONFIDENTIAL // BS ENERGY INDIA</div>
      </div>
    </div>
  );
}
