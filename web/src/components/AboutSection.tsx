import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0B1624] relative overflow-hidden border-b border-white/10">
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Top Editorial Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="tech-label flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
              01 / ABOUT BS ENERGY INDIA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Experience. <br />
              <span className="text-[#FF6B00]">Industrial Solutions.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              BS Energy India is an established company providing industrial equipment and engineering solutions. Incorporated in 2007, the company operates as a Partnership Firm and serves customers with industrial heating, combustion, fabrication and energy-related products.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              With a focus on quality, engineering and customer satisfaction, the company provides dependable products and professional service for diverse industrial requirements.
            </p>

            <div className="pt-2">
              <Link
                href="#capability"
                className="group inline-flex items-center gap-3 text-sm font-mono font-bold text-[#FF6B00] hover:text-white transition-colors"
              >
                <span>EXPLORE OUR CAPABILITY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Large Supporting Visual Banner with Technical Overlay */}
        <div className="relative rounded-lg overflow-hidden border border-white/15 bg-[#0F1D30] shadow-2xl group">
          
          {/* Corner blueprint brackets */}
          <div className="absolute top-4 left-4 z-20 tech-corner-tl" />
          <div className="absolute bottom-4 right-4 z-20 tech-corner-br" />

          {/* Image Container */}
          <div className="relative h-[340px] sm:h-[450px] w-full">
            <Image
              src="/images/Industrial Projects and Installations.png"
              alt="BS Energy India Industrial Installations & Projects"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0B1624]/40 to-transparent" />
          </div>

          {/* Overlay Overlay Technical Info Box */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#0B1624]/90 backdrop-blur-md border-t border-white/10">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest">
                PROJECT & FIELD CAPABILITY
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">
                Industrial Projects and Installations
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>Heavy Equipment Supply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>Custom Piping & Ductwork</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>On-Site Guidance</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
