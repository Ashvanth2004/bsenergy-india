"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, ChevronDown, Activity, Settings, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { buildWhatsAppLink, buildPhoneLink, companyConfig } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const HERO_SLIDES = [
  {
    src: "/images/Steam Boilers.png",
    title: "HIGH-EFFICIENCY STEAM BOILERS",
    subtitle: "Dependable Industrial Steam Generation Boilers Engineered for Process Heating & Utilities",
    tag: "STEAM GENERATION"
  },
  {
    src: "/images/Pressure Reducing Systems.png",
    title: "PRESSURE REDUCING SYSTEMS (PRS)",
    subtitle: "Precision Steam & Gas Pressure Reduction Skid Stations for Safe Process Line Feed",
    tag: "PRESSURE REGULATION"
  },
  {
    src: "/images/custom Storage Tanks.png",
    title: "INDUSTRIAL STORAGE & PROCESS TANKS",
    subtitle: "Custom Fabricators of Fuel, Chemical, Hot Water Storage Tanks & Pressure Receivers",
    tag: "TANK FABRICATION"
  },
  {
    src: "/images/Heat Recovery Systems.jpg",
    title: "INDUSTRIAL HEAT RECOVERY SYSTEMS",
    subtitle: "Waste Heat Recovery Units & Economizers Engineered for Maximum Fuel Consumption Savings",
    tag: "ENERGY RECOVERY"
  },
  {
    src: "/images/Thermal Fluid Heaters.jpeg",
    title: "THERMAL FLUID HEATER SYSTEMS",
    subtitle: "High-Temperature Thermic Oil Heating Systems Operating at Atmospheric Pressure",
    tag: "THERMIC HEATING"
  },
  {
    src: "/images/Hot Water Generator.png",
    title: "HEAVY-DUTY HOT WATER GENERATORS",
    subtitle: "High-Efficiency Thermal Heating Units Engineered for Industrial Process & Commercial Applications",
    tag: "THERMAL GENERATORS"
  },
  {
    src: "/images/industrial-chimney.jpg",
    title: "TWIN INDUSTRIAL STACK CHIMNEYS",
    subtitle: "Engineered Self-Supporting & Guy-Wired Chimneys with Helical Access Stairs for Exhaust Gas Dispersion",
    tag: "INDUSTRIAL CHIMNEYS"
  },
  {
    src: "/images/project-precision-welding-team.jpg",
    title: "ON-SITE FABRICATION & WELDING",
    subtitle: "Certified Welding Specialists Executing Heavy Steel Deck Fabrication",
    tag: "SITE WELDING"
  },
  {
    src: "/images/project-dual-crane-wall-erection.jpg",
    title: "HEAVY PLATE WALL ERECTION",
    subtitle: "Synchronized Dual Crane Operation Erecting Industrial Structural Plates",
    tag: "CRANE ERECTION"
  },
  {
    src: "/images/project-crane-rigger-install.jpg",
    title: "PRECISION RIGGING & WALL HOIST",
    subtitle: "Mobile Crane Operator & Rigger Positioning Vertical Steel Silo Panel",
    tag: "CRANE RIGGING"
  },
  {
    src: "/images/project-overhead-beam-welding.jpg",
    title: "OVERHEAD BEAM STRUCTURAL WELDING",
    subtitle: "High-Altitude Precision Welding on Heavy Structural Steel Framework",
    tag: "HIGH-ALTITUDE WELDING"
  },
  {
    src: "/images/project-crane-fan-lift.jpg",
    title: "HEAVY EQUIPMENT INSTALLATION",
    subtitle: "Dual Crane Lifting & Placement of Heavy Industrial Blower Fan",
    tag: "FIELD EXECUTION"
  },
  {
    src: "/images/project-crane-wall-erection-wide.jpg",
    title: "MOBILE CRANE HEAVY WALL HOIST",
    subtitle: "Indo Power Heavy Crane Placing Steel Silo Wall Section On Foundation",
    tag: "CRANE ERECTION"
  },
  {
    src: "/images/project-roof-truss-framework.jpg",
    title: "OVERHEAD ROOF TRUSS FRAMEWORK",
    subtitle: "High-Span Structural Steel Roof Truss & Overhead Crane Girders",
    tag: "STEEL TRUSS"
  },
  {
    src: "/images/project-crane-plate-positioning.jpg",
    title: "MOBILE CRANE PLATE POSITIONING",
    subtitle: "Precision Mobile Crane Operation Positioning Industrial Silo Wall Panels",
    tag: "CRANE ERECTION"
  },
  {
    src: "/images/project-steel-tanks-layout.jpg",
    title: "DUAL STEEL STRUCTURES & STACK",
    subtitle: "Heavy Steel Storage Tanks & Stack Scaffold Assembly",
    tag: "PLANT FABRICATION"
  },
  {
    src: "/images/project-silo-wall-array.jpg",
    title: "MULTI-SECTION SILO WALL ARRAY",
    subtitle: "Heavy Fabricated Steel Plate Silo Wall Row Installed On Site",
    tag: "SITE FABRICATION"
  },
  {
    src: "/images/project-site-columns.jpg",
    title: "STRUCTURAL STEEL COLUMNS",
    subtitle: "Fabricated Heavy Structural Steel Columns for Industrial Expansion",
    tag: "SITE FABRICATION"
  },
  {
    src: "/images/project-vertical-plate-stack.jpg",
    title: "VERTICAL SILO PLATE ASSEMBLY",
    subtitle: "Structural Steel Plate Enclosure & Exhaust Stack Scaffold Integration",
    tag: "FIELD ERECTION"
  },
  {
    src: "/images/project-night-girder-install.jpg",
    title: "24/7 FIELD EXECUTION",
    subtitle: "Nighttime High-Altitude Girder Erection with Precision Heavy Cranes",
    tag: "ON-SITE PROJECTS"
  },
  {
    src: "/images/project-ibeam-fabrication-yard.jpg",
    title: "I-BEAM FRAMEWORK FABRICATION",
    subtitle: "Heavy Structural Steel Beams Stacked & Prepared in Assembly Yard",
    tag: "YARD FABRICATION"
  },
  {
    src: "/images/project-crane-steel-panel.jpg",
    title: "HIGH-CAPACITY HEAVY CRANE HOIST",
    subtitle: "Precision Crane Positioning of Heavy Fabricated Steel Wall Panels",
    tag: "CRANE ERECTION"
  },
  {
    src: "/images/project-heavy-steel-structure.jpg",
    title: "INDUSTRIAL SILO & FRAMEWORK",
    subtitle: "Multi-Story Heavy Industrial Plate Silos & Support Structure Assembly",
    tag: "ENGINEERING"
  },
  {
    src: "/images/project-plant-site-aerial.jpg",
    title: "COMPLETE PLANT SITE DEVELOPMENT",
    subtitle: "Large-Scale Industrial Facility Layout & Foundation Infrastructure",
    tag: "TURNKEY PROJECTS"
  },
  {
    src: "/images/Industrial Pipeline.png",
    title: "PROCESS PIPELINE INFRASTRUCTURE",
    subtitle: "Certified Pressure Line Welding & Fluid Distribution Networks",
    tag: "PIPELINE PIPING"
  }
];

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#0D0304] overflow-hidden flex flex-col justify-between pt-28 pb-12 px-4 lg:px-8 border-b border-white/10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0"
      >
        <source src="/videos/HeroVideoBackground.mp4" type="video/mp4" />
      </video>

      {/* Background Animated Tech Grid & Overlay Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0304] via-[#0D0304]/70 to-[#0D0304]/85 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#9E1218]/15 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          
          {/* Top Tech Label */}
          <div className="flex items-center gap-3 bg-white/5 border border-[#9E1218]/40 px-3.5 py-1.5 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#9E1218] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E2E8F0] uppercase">
              INDUSTRIAL ENERGY & HEATING SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Industrial Solutions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-[#9E1218]">
              Lasting Value.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
            At BS Energy India, we deliver reliable, high-performance industrial heating, combustion, and fluid systems engineered to optimize performance and lower operational costs. Beyond equipment supply, we partner with industry leaders to design, fabricate, and integrate custom solutions built for continuous duty and maximum energy efficiency.
          </p>

          {/* Company Indicator Badges */}
          <div className="flex items-center gap-4 text-xs font-mono text-gray-400 py-1">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <span className="text-[#9E1218] font-bold text-sm">ESTABLISHED</span>
              <span className="text-white font-black text-sm">2007</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9E1218]" />
              <span>HIGH-PERFORMANCE ENGINEERING</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 bg-gradient-to-r from-[#9E1218] via-[#B81D24] to-[#7F0C12] hover:from-slate-100 hover:to-slate-200 text-white hover:text-black font-mono font-bold text-sm rounded-sm transition-all duration-200 shadow-[0_0_25px_rgba(158,18,24,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-2"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/5 hover:bg-emerald-500/20 text-white hover:text-emerald-300 border border-white/20 hover:border-emerald-500/50 font-mono font-bold text-sm rounded-sm transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Secondary Phone Call Action */}
          <div className="pt-2">
            <a
              href={buildPhoneLink()}
              className="group inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#9E1218] transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#9E1218]">
                <Phone className="w-3 h-3 text-[#9E1218]" />
              </div>
              <span>CALL OUR TEAM</span>
            </a>
          </div>
        </div>

        {/* Right Side Visual & Auto-Looping Image Slider */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          
          {/* Main Hero Auto-Looping Image Slider Frame */}
          <div 
            className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/11] lg:max-w-none lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#9E1218]/50 bg-[#160608]/90 shadow-[0_0_50px_rgba(158,18,24,0.25)] group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Technical Blueprint Reticle Corner Highlights */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#9E1218] z-20 pointer-events-none rounded-tl-md" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#9E1218] z-20 pointer-events-none rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#9E1218] z-20 pointer-events-none rounded-bl-md" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#9E1218] z-20 pointer-events-none rounded-br-md" />

            {/* Glowing Backdrop Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9E1218]/30 to-transparent blur-xl opacity-50 pointer-events-none" />

            {/* Top Live Badge Indicator */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0D0304]/90 backdrop-blur-md border border-[#9E1218]/40 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#9E1218] animate-ping" />
              <span className="text-[10px] font-mono font-bold text-[#E2E8F0] uppercase tracking-wider">
                {HERO_SLIDES[currentSlide].tag} // SLIDE {String(currentSlide + 1).padStart(2, "0")}/{String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Right-to-Left Sliding Container */}
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {HERO_SLIDES.map((slide, idx) => (
                <div key={idx} className="relative w-full h-full flex-shrink-0 bg-[#0D0304]">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  {/* Subtle Dark Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0304] via-transparent to-black/30 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0D0304]/85 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between gap-2">
              <div className="space-y-0.5 max-w-[70%]">
                <div className="text-xs sm:text-sm font-extrabold text-white font-mono tracking-wider truncate">
                  {HERO_SLIDES[currentSlide].title}
                </div>
                <div className="text-[11px] text-gray-300 truncate">
                  {HERO_SLIDES[currentSlide].subtitle}
                </div>
              </div>

              {/* Slider Dots / Counter for Mobile & Desktop */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-mono font-bold text-[#E2E8F0] bg-black/60 px-2 py-0.5 rounded border border-[#9E1218]/50 sm:hidden">
                  {String(currentSlide + 1).padStart(2, "0")}/{String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
                <div className="hidden sm:flex items-center gap-1 max-w-[140px] overflow-hidden">
                  {HERO_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlide(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentSlide ? "w-4 bg-[#9E1218]" : "w-1 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Manual Navigation Arrows */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0D0304]/80 hover:bg-[#9E1218] border border-white/20 hover:border-[#9E1218] text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0D0304]/80 hover:bg-[#9E1218] border border-white/20 hover:border-[#9E1218] text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Floating Technical Navigation Info Panels */}
          <div className="relative mt-4 w-full flex flex-wrap gap-2 lg:gap-3 justify-center z-20 px-2">
            
            <Link
              href="/products/industrial-burners"
              className="bg-[#160608]/90 hover:bg-[#9E1218] backdrop-blur-md border border-white/10 hover:border-[#9E1218] px-4 py-2.5 rounded-xl text-left transition-all duration-200 group shadow-lg flex items-center gap-3"
            >
              <Flame className="w-4 h-4 text-[#9E1218] group-hover:text-white" />
              <div>
                <div className="text-[10px] font-mono font-bold text-[#CBD5E1] group-hover:text-white">01</div>
                <div className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  INDUSTRIAL BURNERS
                </div>
              </div>
            </Link>

            <Link
              href="/services"
              className="bg-[#160608]/90 hover:bg-[#9E1218] backdrop-blur-md border border-white/10 hover:border-[#9E1218] px-4 py-2.5 rounded-xl text-left transition-all duration-200 group shadow-lg flex items-center gap-3"
            >
              <Activity className="w-4 h-4 text-[#9E1218] group-hover:text-white" />
              <div>
                <div className="text-[10px] font-mono font-bold text-[#CBD5E1] group-hover:text-white">02</div>
                <div className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  ENERGY SOLUTIONS
                </div>
              </div>
            </Link>

            <Link
              href="/services"
              className="bg-[#160608]/90 hover:bg-[#9E1218] backdrop-blur-md border border-white/10 hover:border-[#9E1218] px-4 py-2.5 rounded-xl text-left transition-all duration-200 group shadow-lg flex items-center gap-3"
            >
              <Settings className="w-4 h-4 text-[#9E1218] group-hover:text-white" />
              <div>
                <div className="text-[10px] font-mono font-bold text-[#CBD5E1] group-hover:text-white">03</div>
                <div className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  FABRICATION
                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex justify-center pt-8">
        <a href="#trust-bar" className="flex flex-col items-center text-gray-400 hover:text-[#9E1218] transition-colors gap-1 text-[10px] font-mono tracking-widest">
          <span>SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#9E1218]" />
        </a>
      </div>
    </section>
  );
}
