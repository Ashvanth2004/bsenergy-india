"use client";

import { Phone, MessageSquare, Send } from "lucide-react";
import { buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface MobileNavProps {
  onOpenQuoteModal: () => void;
}

export default function MobileNav({ onOpenQuoteModal }: MobileNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1624]/95 backdrop-blur-xl border-t border-white/15 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL */}
        <a
          href={buildPhoneLink()}
          className="flex flex-col items-center justify-center py-2 bg-white/5 active:bg-white/10 border border-white/10 rounded-sm text-white font-mono text-[11px] font-bold"
        >
          <Phone className="w-4 h-4 text-[#FF6B00] mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={buildWhatsAppLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 bg-emerald-600/20 active:bg-emerald-600/40 border border-emerald-500/40 rounded-sm text-emerald-300 font-mono text-[11px] font-bold"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* ENQUIRE */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 bg-[#FF6B00] active:bg-white text-black rounded-sm font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(255,107,0,0.4)]"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>ENQUIRE</span>
        </button>

      </div>
    </div>
  );
}
