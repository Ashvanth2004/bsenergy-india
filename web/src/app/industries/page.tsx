"use client";

import { useState } from "react";
import Header from "@/components/Header";
import IndustriesSection from "@/components/IndustriesSection";
import LeadGenSection from "@/components/LeadGenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import QuoteModal from "@/components/QuoteModal";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { ChevronRight, Factory, Zap } from "lucide-react";

export default function IndustriesPage() {
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
    <main className="min-h-screen bg-[#0D0304] text-[#F1F5F9] relative">
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Page Header / Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#160608] to-[#0D0304] border-b border-white/10 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-[#9E1218] transition-colors">HOME</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#9E1218]">INDUSTRIES SERVED</span>
            </div>
            <BackButton fallbackHref="/" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Solutions Across Industries
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            Delivering robust combustion, thermal heating, pipeline, and fabrication solutions across chemical, manufacturing, textile, boiler, and heavy engineering sectors.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <Factory className="w-4 h-4 text-[#9E1218]" />
              <span>HEAVY & LIGHT MANUFACTURING</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <Zap className="w-4 h-4 text-[#9E1218]" />
              <span>PROCESS THERMAL & COMBUTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <IndustriesSection />

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
