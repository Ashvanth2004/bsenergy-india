"use client";

import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface LeadGenSectionProps {
  onOpenQuoteModal: () => void;
}

export default function LeadGenSection({ onOpenQuoteModal }: LeadGenSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1624] via-[#0F1D30] to-[#08101C] relative border-b border-white/10 overflow-hidden">
      {/* Background Reticle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6B00]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#FF6B00]/30 px-3.5 py-1.5 rounded-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#FF6B00] uppercase">
            DIRECT ENGINEERING CONSULTATION
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Have an Industrial Requirement?
        </h2>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us about your equipment, heating, fabrication or project requirement.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-sm rounded-sm transition-all duration-200 shadow-[0_0_30px_rgba(255,107,0,0.4)] flex items-center gap-2"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-sm rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>

          <a
            href={buildPhoneLink()}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono font-bold text-sm rounded-sm transition-all duration-200 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FF6B00]" />
            <span>CALL NOW</span>
          </a>
        </div>

      </div>
    </section>
  );
}
