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
    <section className="py-20 bg-[#0B1624] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#0F1D30] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image Section */}
            <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[340px] bg-[#08101C] border-r border-white/10 p-6 flex items-center justify-center">
              <Image
                src="/images/Industrial Pipeline.png"
                alt="BS Energy India - Industrial Pipeline"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute top-4 left-4 tech-corner-tl" />
              <div className="absolute bottom-4 right-4 tech-corner-br" />
            </div>

            {/* Right Copy Section */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="tech-label flex items-center gap-2">
                <GitFork className="w-4 h-4 text-[#FF6B00]" />
                PIPELINE & FLUID HANDLING
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Industrial Pipeline Solutions
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                We provide Industrial Pipeline solutions for industrial applications and process requirements, including pipeline fabrication and related requirements based on project specifications.
              </p>

              <div className="space-y-2 border-y border-white/10 py-4 text-xs font-mono text-gray-300">
                <div className="flex items-center justify-between">
                  <span>SPECIFICATION COMPLIANCE</span>
                  <span className="text-[#FF6B00]">PROJECT DRAWINGS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WELDING & INTEGRITY</span>
                  <span className="text-[#FF6B00]">HIGH PRESSURE CERTIFIED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MATERIAL SCOPE</span>
                  <span className="text-[#FF6B00]">STEAM, GAS, FUEL & CHEMICAL</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWhatsAppLink(whatsappMessages.industrialPipeline)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DISCUSS YOUR PIPELINE PROJECT</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal("Industrial Pipeline")}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2"
                >
                  <span>REQUEST DRAWING REVIEW</span>
                  <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
