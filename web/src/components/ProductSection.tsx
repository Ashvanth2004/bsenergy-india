"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Flame, Cpu, GitFork, ShieldAlert, Zap, Factory, Layers } from "lucide-react";
import { PRODUCTS_DATA, Product } from "@/data/siteData";
import { buildWhatsAppLink } from "@/config/contact";

interface ProductSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductSection({ onOpenQuoteModal }: ProductSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Helper icon generator for placeholder renders
  const getProductPlaceholderIcon = (slug: string) => {
    switch (slug) {
      case "industrial-chimneys":
        return <Factory className="w-16 h-16 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "hot-water-generators":
        return <Zap className="w-16 h-16 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "heat-recovery-systems":
        return <Layers className="w-16 h-16 text-[#FF6B00]/40 stroke-[1.5]" />;
      case "thermal-fluid-heaters":
        return <Flame className="w-16 h-16 text-[#FF6B00]/40 stroke-[1.5]" />;
      default:
        return <Cpu className="w-16 h-16 text-[#FF6B00]/40 stroke-[1.5]" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-[#08101C] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="tech-label flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
              02 / PRODUCTS & EQUIPMENT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Engineering Solutions
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-mono">
            High-performance combustion, piping, thermal management and control systems built for demanding industrial duties.
          </p>
        </div>

        {/* Asymmetric Product Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.map((product, index) => {
            const isFeatured = index === 0; // First card is visually prominent
            return (
              <div
                key={product.id}
                className={`group relative bg-[#0F1D30] border border-white/10 hover:border-[#FF6B00]/50 rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0F1D30] to-[#162438]" : ""
                }`}
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-2xl font-black font-mono text-[#FF6B00]">
                    {product.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase bg-white/5 px-2.5 py-1 rounded-sm">
                    {product.hasSuppliedImage ? "VERIFIED PRODUCT" : "ENGINEERING SPECIFICATION"}
                  </span>
                </div>

                {/* Image Visual Container */}
                <div className="relative w-full h-52 mb-6 rounded-sm bg-[#0B1624]/60 border border-white/5 overflow-hidden flex items-center justify-center p-4 group-hover:border-[#FF6B00]/30 transition-colors">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    /* Elegant Neutral Industrial Blueprint Placeholder */
                    <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                      <div className="p-3 bg-white/5 rounded-full border border-white/10">
                        {getProductPlaceholderIcon(product.slug)}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                        NEUTRAL TECHNICAL RENDER
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FF6B00] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-gray-200 hover:text-white rounded-sm transition-colors text-center"
                  >
                    VIEW DETAILS
                  </button>

                  <a
                    href={buildWhatsAppLink(product.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#FF6B00] hover:bg-white text-black text-xs font-mono font-bold rounded-sm transition-colors flex items-center gap-1.5"
                    title="Enquire via WhatsApp"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B1624] border border-[#FF6B00]/40 rounded-sm max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(255,107,0,0.3)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono text-xs border border-white/10 px-2.5 py-1 rounded-sm"
            >
              [CLOSE ESC]
            </button>

            <div className="space-y-2">
              <div className="tech-label">{selectedProduct.number} / PRODUCT SPECIFICATION</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProduct.name}</h3>
            </div>

            {/* Modal Image */}
            {selectedProduct.image ? (
              <div className="relative w-full h-64 bg-[#0F1D30] border border-white/10 rounded-sm p-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="w-full h-40 bg-[#0F1D30] border border-white/10 rounded-sm flex items-center justify-center">
                {getProductPlaceholderIcon(selectedProduct.slug)}
              </div>
            )}

            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedProduct.fullDescription}
            </p>

            {/* Key Features */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-wider">
                KEY TECHNICAL ADVANTAGES
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-sm border border-white/5">
                    <span className="text-[#FF6B00] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-wider">
                TYPICAL INDUSTRIAL APPLICATIONS
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                {selectedProduct.applications.map((app, idx) => (
                  <span key={idx} className="bg-[#162438] border border-white/10 px-2.5 py-1 rounded-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const name = selectedProduct.name;
                  setSelectedProduct(null);
                  onOpenQuoteModal(name);
                }}
                className="w-full sm:w-auto flex-1 py-3 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-colors text-center"
              >
                REQUEST FORM QUOTE FOR THIS PRODUCT
              </button>

              <a
                href={buildWhatsAppLink(selectedProduct.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WHATSAPP ENQUIRY
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
