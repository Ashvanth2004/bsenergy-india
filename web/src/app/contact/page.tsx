"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { contactConfig, companyConfig, buildWhatsAppLink, buildPhoneLink } from "@/config/contact";

export default function ContactPage() {
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
            <span className="text-[#FF6B00]">CONTACT & QUOTATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Contact Engineering Team
          </h1>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            Get in touch for custom pricing, drawings matching, combustion parameter review, or equipment supply enquiries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <a
              href={buildPhoneLink()}
              className="flex items-center gap-3 bg-[#0F1D30] border border-white/10 p-4 rounded-sm hover:border-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase">DIRECT PHONE</div>
                <div className="text-sm font-mono font-bold text-white">{contactConfig.phone}</div>
              </div>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0F1D30] border border-white/10 p-4 rounded-sm hover:border-emerald-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase">WHATSAPP CHAT</div>
                <div className="text-sm font-mono font-bold text-emerald-400">CONNECT ON WHATSAPP</div>
              </div>
            </a>

            <a
              href={`mailto:${contactConfig.email}`}
              className="flex items-center gap-3 bg-[#0F1D30] border border-white/10 p-4 rounded-sm hover:border-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase">EMAIL ENQUIRIES</div>
                <div className="text-xs font-mono font-bold text-white truncate max-w-[180px]">{contactConfig.email}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section Form */}
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
