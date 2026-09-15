"use client";

import Image from "next/image";
import { MessageSquare, Cpu, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface BurnerControllerFeatureProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function BurnerControllerFeature({ onOpenQuoteModal }: BurnerControllerFeatureProps) {
  return (
    <section className="py-20 bg-[#0A0203] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-[#160608] to-[#1C080B] border border-white/10 rounded-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="tech-label flex items-center gap-2 text-[#CBD5E1]">
                <Cpu className="w-4 h-4 text-[#9E1218]" />
                AUTOMATED BURNER MANAGEMENT
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Control Your Combustion System
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Burner Controllers are essential for controlling and managing burner operation. We supply reliable burner control solutions suitable for industrial combustion systems.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-300">
                <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-sm">
                  ✓ Sequence Ignition Control
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-sm">
                  ✓ Flame Safeguard Monitoring
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-sm">
                  ✓ Emergency Interlock Shut-Off
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWhatsAppLink(whatsappMessages.burnerController)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#9E1218] via-[#B81D24] to-[#7F0C12] hover:from-slate-100 hover:to-slate-200 text-white hover:text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(158,18,24,0.4)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENQUIRE ABOUT CONTROLLERS</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal("Burner Controller")}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2"
                >
                  <span>SUBMIT SPECIFICATION</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9E1218]" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center bg-[#0D0304] border border-white/10 p-6 rounded-2xl overflow-hidden">
              <div className="relative w-full h-72 sm:h-80">
                <Image
                  src="/images/Burner Controller.png"
                  alt="BS Energy India - Burner Controller"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500 rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
