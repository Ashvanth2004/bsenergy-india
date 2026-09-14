import { WHY_CHOOSE_US_DATA } from "@/data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#08101C] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="tech-label flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
            05 / WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Dependability
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Key competitive pillars defining BS Energy India across domestic and international industrial engineering requirements.
          </p>
        </div>

        {/* Bold Numbered Layout with Thin Technical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.number}
              className="p-8 border-r border-b border-white/10 bg-[#0F1D30]/40 hover:bg-[#0F1D30] transition-colors group relative space-y-4"
            >
              {/* Top blueprint reticle */}
              <div className="text-4xl font-black font-mono text-[#FF6B00]/40 group-hover:text-[#FF6B00] transition-colors">
                {item.number}
              </div>

              <h3 className="text-lg font-extrabold text-white tracking-wider uppercase font-mono group-hover:text-[#FF6B00] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.text}
              </p>

              {/* Accent bottom line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-[#FF6B00] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
