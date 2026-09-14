"use client";

import { use, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA, Product } from "@/data/siteData";
import { buildWhatsAppLink } from "@/config/contact";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Flame, Cpu, Zap, Factory, Layers } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const product: Product | undefined = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const getProductPlaceholderIcon = (slug: string) => {
    switch (slug) {
      case "industrial-chimneys":
        return <Factory className="w-24 h-24 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "hot-water-generators":
        return <Zap className="w-24 h-24 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "heat-recovery-systems":
        return <Layers className="w-24 h-24 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "thermal-fluid-heaters":
        return <Flame className="w-24 h-24 text-[#FF6B00]/40 stroke-[1.5]" />;
      default:
        return <Cpu className="w-24 h-24 text-[#FF6B00]/40 stroke-[1.5]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1624] text-[#F3F5F7] relative">
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Hero Breadcrumb Banner */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#0F1D30] to-[#0B1624] border-b border-white/10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Link href="/" className="hover:text-[#FF6B00] transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#FF6B00] transition-colors">PRODUCTS</Link>
            <span>/</span>
            <span className="text-[#FF6B00] uppercase">{product.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="tech-label">PRODUCT CODE // {product.number}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {product.name}
              </h1>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#FF6B00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO PRODUCTS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Container */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-square w-full bg-[#0F1D30] border border-white/10 rounded-sm overflow-hidden flex items-center justify-center p-8 shadow-2xl">
              {product.hasSuppliedImage && product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3">
                  {getProductPlaceholderIcon(product.slug)}
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    CUSTOM SPECIFICATION UNIT
                  </span>
                </div>
              )}
            </div>

            <div className="bg-[#0F1D30]/60 border border-white/10 p-6 rounded-sm space-y-3 font-mono text-xs text-gray-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>ESTABLISHED FABRICATION</span>
                <span className="text-white font-bold">AHMEDABAD, GUJARAT</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>COMPLIANCE STANDARD</span>
                <span className="text-[#FF6B00] font-bold">INDUSTRIAL GRADE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>DISPATCH / DELIVERY</span>
                <span className="text-emerald-400 font-bold">PAN INDIA & GLOBAL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & CTAs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono">
                System Overview
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-sm font-mono font-bold text-[#FF6B00] uppercase tracking-wider">
                KEY TECHNICAL ADVANTAGES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#0F1D30] border border-white/5 p-3 rounded-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 font-mono">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-sm font-mono font-bold text-[#FF6B00] uppercase tracking-wider">
                TARGET APPLICATIONS
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-mono text-gray-300 rounded-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3.5 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center gap-2"
              >
                <span>REQUEST QUOTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppLink(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP ENQUIRY</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <MobileNav onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={product.name}
      />
    </main>
  );
}
