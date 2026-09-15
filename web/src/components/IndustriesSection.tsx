"use client";

import { Factory, Cpu, Wrench, Flame, Gauge, Building2, Thermometer, Zap, Recycle, Layers } from "lucide-react";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/siteData";

export default function IndustriesSection() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-5 h-5 text-[#9E1218]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#9E1218]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#9E1218]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#9E1218]" />;
      case "Gauge":
        return <Gauge className="w-5 h-5 text-[#9E1218]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#9E1218]" />;
      case "Thermometer":
        return <Thermometer className="w-5 h-5 text-[#9E1218]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#9E1218]" />;
      case "Recycle":
        return <Recycle className="w-5 h-5 text-[#9E1218]" />;
      default:
        return <Layers className="w-5 h-5 text-[#9E1218]" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0D0304] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="tech-label flex items-center gap-2 text-[#CBD5E1]">
            <span className="w-1.5 h-1.5 bg-[#9E1218]" />
            06 / INDUSTRIES SERVED
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Solutions Across Industrial Applications
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Supplying tailored combustion, piping, thermal generators, and energy recovery systems across core industrial sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#160608] hover:bg-[#1C080B] border border-white/10 hover:border-[#9E1218]/50 p-5 rounded-sm transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:border-[#9E1218] transition-colors">
                  {getIndustryIcon(ind.iconName)}
                </div>

                <h3 className="text-sm font-extrabold text-white group-hover:text-[#9E1218] transition-colors uppercase font-mono">
                  {ind.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="text-[10px] font-mono text-gray-400 group-hover:text-[#9E1218] transition-colors pt-2 border-t border-white/5">
                SECTOR SPECIFICATION →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
