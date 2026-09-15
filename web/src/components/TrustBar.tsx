export default function TrustBar() {
  const trustMetrics = [
    { number: "2007", label: "ESTABLISHED", subtext: "Incorporated Firm" },
    { number: "14+", label: "YEARS EXPERIENCE", subtext: "Engineering Expertise" },
    { number: "MANUFACTURER", label: "& EXPORTER", subtext: "Global & Domestic Supply" },
    { number: "CUSTOMIZED", label: "SOLUTIONS", subtext: "Tailored Fabrication" },
  ];

  return (
    <section id="trust-bar" className="bg-[#0A0203] border-y border-white/10 py-10 px-4 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustMetrics.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-center p-4 border-l-2 border-[#9E1218] bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-r-sm group"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-[#9E1218] transition-colors">
              {item.number}
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono tracking-wider text-[#E2E8F0] uppercase mt-1">
              {item.label}
            </div>
            <div className="text-[11px] font-mono text-gray-400 mt-0.5">
              {item.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
