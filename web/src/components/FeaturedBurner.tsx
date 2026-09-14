"use client";

import Image from "next/image";
import { ArrowRight, MessageSquare, Flame } from "lucide-react";
import { buildWhatsAppLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface FeaturedBurnerProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function FeaturedBurner({ onOpenQuoteModal }: FeaturedBurnerProps) {
  return (
    <section className="py-20 bg-[#0B1624] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#0F1D30] border border-[#FF6B00]/30 rounded-sm p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Background tech reticle grid */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Large Burner Image */}
            <div className="lg:col-span-6 relative flex items-center justify-center bg-[#08101C] border border-white/10 p-8 rounded-sm">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/Industrial Burner.png"
                  alt="BS Energy India - Industrial Burners"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Small Technical Blueprint Reticle Corner */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FF6B00]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FF6B00]" />
            </div>

            {/* Right Column: Copy & Details */}
            <div className="lg:col-span-6 space-y-6 relative pl-0 lg:pl-6">
              
              {/* Small Technical Vertical Line Accent */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FF6B00] via-[#FF6B00]/40 to-transparent" />

              <div className="space-y-2">
                <div className="tech-label flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FF6B00]" />
                  FEATURED COMBUSTION SYSTEM
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  INDUSTRIAL BURNERS
                </h2>
                <div className="text-sm font-mono text-[#FF6B00] font-semibold">
                  Reliable combustion solutions for industrial heating applications.
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Our Industrial Burners are designed for industrial heating applications where reliable and efficient combustion is required. We provide burner solutions suitable for different industrial heating systems and applications.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B00] font-bold">▪</span> High Thermal Efficiency
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B00] font-bold">▪</span> Continuous Industrial Duty
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B00] font-bold">▪</span> Flame Stability Control
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B00] font-bold">▪</span> Multi-Fuel Compatibility
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenQuoteModal("Industrial Burner")}
                  className="px-6 py-3 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <span>VIEW PRODUCT / QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppLink(whatsappMessages.industrialBurner)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 hover:bg-emerald-500/20 text-white hover:text-emerald-300 border border-white/15 hover:border-emerald-500/50 font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>ENQUIRE NOW</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
