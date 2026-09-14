"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import CapabilitySection from "@/components/CapabilitySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadGenSection from "@/components/LeadGenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export default function AboutPage() {
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
            <span className="text-[#FF6B00]">ABOUT US</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About BS Energy India
          </h1>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            Established in 2007, BS Energy India is a premier industrial heating, combustion, energy recovery, and steel fabrication solutions company based in Sholavaram, Chennai, India.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <span className="text-[#FF6B00] font-bold">14+ YEARS</span>
              <span>EXCELLENCE</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>DOMESTIC & INTERNATIONAL SUPPLIER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial About Section */}
      <AboutSection />

      {/* Engineering Capabilities */}
      <CapabilitySection />

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* Lead Generation Banner */}
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
