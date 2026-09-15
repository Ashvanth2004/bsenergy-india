"use client";

import { ArrowRight, Wrench, ShieldAlert, FileText, Compass, Settings } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";
import { buildWhatsAppLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

export default function ServicesSection() {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Wrench className="w-6 h-6 text-[#9E1218]" />;
      case 1:
        return <Settings className="w-6 h-6 text-[#9E1218]" />;
      case 2:
        return <ShieldAlert className="w-6 h-6 text-[#9E1218]" />;
      case 3:
        return <Compass className="w-6 h-6 text-[#9E1218]" />;
      default:
        return <FileText className="w-6 h-6 text-[#9E1218]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0203] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="tech-label flex items-center gap-2 text-[#CBD5E1]">
            <span className="w-1.5 h-1.5 bg-[#9E1218]" />
            03 / INDUSTRIAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Beyond Equipment Supply
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Full lifecycle engineering support from procurement and fabrication to field assistance and bespoke system customization.
          </p>
        </div>

        {/* Hover Interactive Service List */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, index) => (
            <a
              key={service.number}
              href={buildWhatsAppLink(whatsappMessages.fabrication)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#160608] hover:bg-[#1C080B] border border-white/10 hover:border-[#9E1218]/50 rounded-sm p-6 lg:p-8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Expanding Maroon Accent Line on Left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#9E1218]/30 group-hover:w-2 group-hover:bg-[#9E1218] transition-all duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pl-2">
                
                {/* Left Number & Icon */}
                <div className="lg:col-span-4 flex items-center gap-4">
                  <span className="text-3xl lg:text-4xl font-extrabold font-mono text-[#9E1218]">
                    {service.number}
                  </span>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-[#9E1218]/50 transition-colors">
                    {getServiceIcon(index)}
                  </div>
                  <h3 className="text-lg lg:text-xl font-extrabold text-white group-hover:text-[#9E1218] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Center Description */}
                <div className="lg:col-span-6 space-y-2">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-400 pt-1">
                    {service.features.map((feat, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="text-[#9E1218]">✓</span> {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Hover Arrow */}
                <div className="lg:col-span-2 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-sm bg-white/5 group-hover:bg-[#9E1218] border border-white/10 group-hover:border-[#9E1218] flex items-center justify-center text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
