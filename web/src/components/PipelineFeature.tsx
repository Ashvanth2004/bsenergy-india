"use client";

import Image from "next/image";
import { MessageSquare, GitFork, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface PipelineFeatureProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function PipelineFeature({ onOpenQuoteModal }: PipelineFeatureProps) {
  return (
    <section className="py-20 bg-[#0D0304] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#160608] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image Section */}
            <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[340px] bg-[#0A0203] border-r border-white/10 p-6 flex items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src="/images/Industrial Pipeline.png"
                alt="BS Energy India - Industrial Pipeline"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-500 rounded-xl"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute top-4 left-4 tech-corner-tl" />
              <div className="absolute bottom-4 right-4 tech-corner-br" />
            </div>

            {/* Right Copy Section */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="tech-label flex items-center gap-2 text-slate-300">
                <GitFork className="w-4 h-4 text-[#9E1218]" />
                PIPELINE & FLUID HANDLING
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Industrial Pipeline Solutions
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                We provide Industrial Pipeline solutions for industrial applications and process requirements, including pipeline fabrication and related requirements based on project specifications.
              </p>

              <div className="space-y-2 border-y border-white/10 py-4 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between">
                  <span>SPECIFICATION COMPLIANCE</span>
                  <span className="text-[#9E1218] font-semibold">PROJECT DRAWINGS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WELDING & INTEGRITY</span>
                  <span className="text-[#9E1218] font-semibold">HIGH PRESSURE CERTIFIED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MATERIAL SCOPE</span>
                  <span className="text-[#9E1218] font-semibold">STEAM, GAS, FUEL & CHEMICAL</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWhatsAppLink(whatsappMessages.industrialPipeline)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#9E1218] via-[#B81D24] to-[#7F0C12] hover:brightness-110 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(158,18,24,0.35)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DISCUSS YOUR PIPELINE PROJECT</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal("Industrial Pipeline")}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2"
                >
                  <span>REQUEST DRAWING REVIEW</span>
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
