"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Filter } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "@/data/siteData";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ["ALL", "PRODUCTS", "PROJECTS", "EQUIPMENT", "PIPELINE", "CONTROLS"];

  const filteredItems = activeFilter === "ALL"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#08101C] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="tech-label flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
              09 / VISUAL ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industrial Equipment Gallery
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0F1D30] border border-white/10 p-1.5 rounded-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-sm transition-all ${
                  activeFilter === filter
                    ? "bg-[#FF6B00] text-black shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative bg-[#0F1D30] border border-white/10 hover:border-[#FF6B00]/50 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-[#08101C] p-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Hover Overlay */}
              <div className="p-4 bg-[#0B1624] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF6B00] tracking-widest block uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-white group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-[#FF6B00] flex items-center justify-center text-white group-hover:text-black transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0B1624] border border-[#FF6B00]/40 rounded-sm p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase">
                  {activeLightboxItem.category} / LIGHTBOX VIEW
                </span>
                <h3 className="text-xl font-extrabold text-white">{activeLightboxItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-2 text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[60vh] bg-[#08101C] rounded-sm border border-white/5 flex items-center justify-center p-6">
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                className="object-contain p-4"
              />
            </div>

            <p className="text-sm text-gray-300 font-mono">
              {activeLightboxItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
