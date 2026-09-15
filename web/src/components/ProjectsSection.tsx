"use client";

import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface ProjectsSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProjectsSection({ onOpenQuoteModal }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-[#0A0203] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="tech-label flex items-center gap-2 text-[#CBD5E1]">
            <span className="w-1.5 h-1.5 bg-[#9E1218]" />
            07 / FIELD EXECUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industrial Projects & Installations
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Supplying and assisting with heavy equipment placement, burner integration, utility piping, and plant retrofits.
          </p>
        </div>

        {/* Large Visual Feature Banner */}
        <div className="relative rounded-sm overflow-hidden border border-white/15 bg-[#160608] shadow-2xl group">
          
          {/* Blueprint Corner reticles */}
          <div className="absolute top-4 left-4 z-20 tech-corner-tl" />
          <div className="absolute bottom-4 right-4 z-20 tech-corner-br" />

          <div className="relative h-[420px] sm:h-[550px] w-full">
            <Image
              src="/images/Industrial Projects and Installations.png"
              alt="BS Energy India - Industrial Projects & Installations"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0304] via-[#0D0304]/60 to-transparent" />
          </div>

          {/* Overlay Box */}
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between z-10">
            
            {/* Top Badge */}
            <div className="flex justify-end">
              <span className="bg-[#9E1218] text-white font-mono font-bold text-xs px-3 py-1 rounded-sm uppercase tracking-widest">
                FIELD CAPABILITY
              </span>
            </div>

            {/* Bottom Content & CTAs */}
            <div className="space-y-6 max-w-2xl bg-[#0D0304]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-sm">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  PROJECTS & INSTALLATIONS
                </div>
                <p className="text-sm font-mono text-gray-300">
                  Project details available on request.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={buildWhatsAppLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#9E1218] via-[#B81D24] to-[#7F0C12] hover:from-slate-100 hover:to-slate-200 text-white hover:text-black font-mono font-bold text-xs rounded-sm transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(158,18,24,0.4)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DISCUSS YOUR PROJECT</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal("Project Execution")}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono font-bold text-xs rounded-sm transition-colors flex items-center gap-2"
                >
                  <span>REQUEST PROJECT DOSSIER</span>
                  <ArrowRight className="w-4 h-4 text-[#9E1218]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
