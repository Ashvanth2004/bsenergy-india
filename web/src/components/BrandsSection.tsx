import { BRANDS_DATA } from "@/data/siteData";
import { ShieldAlert } from "lucide-react";

export default function BrandsSection() {
  return (
    <section className="py-20 bg-[#0D0304] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="tech-label flex items-center gap-2 text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 bg-[#9E1218]" />
              08 / COMPONENT LOGISTICS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Supported Component Brands
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-2 rounded-sm max-w-md">
            <ShieldAlert className="w-4 h-4 text-[#9E1218] shrink-0" />
            <span>Brand availability may vary depending on product and project requirements.</span>
          </div>
        </div>

        {/* Clean Monochrome Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="bg-[#160608] border border-white/10 hover:border-[#9E1218]/50 p-6 rounded-sm text-center transition-all duration-200 group flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-xl sm:text-2xl font-black font-mono tracking-widest text-gray-300 group-hover:text-[#9E1218] transition-colors uppercase">
                {brand.name}
              </div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                {brand.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
