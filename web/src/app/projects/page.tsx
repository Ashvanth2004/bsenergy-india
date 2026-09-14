"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import LeadGenSection from "@/components/LeadGenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ChevronRight, Wrench, HardHat } from "lucide-react";

export default function ProjectsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(undefined);
  };

  return (
    <main className="min-h-screen bg-[#0B1624] text-[#F3F5F7] relative">
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Page Header / Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1D30] to-[#0B1624] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Link href="/" className="hover:text-[#FF6B00] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#FF6B00]">PROJECTS & FIELD EXECUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Field Executions & Installations
          </h1>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            Excellence in action across industrial sites — dual crane equipment lifts, multi-story plate silos, heavy steel column arrays, 24/7 nighttime crane erections, and certified pressure line welding.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <HardHat className="w-4 h-4 text-[#FF6B00]" />
              <span>FIELD EXECUTION SPECIALISTS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <Wrench className="w-4 h-4 text-[#FF6B00]" />
              <span>CRANE RIGGING & STRUCTURAL HOISTING</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Lead Generation CTA */}
      <LeadGenSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Contact Section */}
      <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <Footer />
      <MobileNav onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={selectedProductForQuote}
      />
    </main>
  );
}
