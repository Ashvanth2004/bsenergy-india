import Image from "next/image";
import { Factory, ShieldCheck, Wrench, Layers } from "lucide-react";

export default function CapabilitySection() {
  const capabilities = [
    { title: "MANUFACTURING", text: "Production and assembly of industrial burner units and heat transfer auxiliaries.", icon: Factory },
    { title: "FABRICATION", text: "Structural metal work, chimney stacks, process piping manifolds, and skid assemblies.", icon: Wrench },
    { title: "QUALITY & INSPECTION", text: "Rigorous visual, pressure, and alignment inspection prior to dispatch.", icon: ShieldCheck },
    { title: "PROJECT SUPPORT", text: "Engineering guidance, drawings compliance review, and installation assistance.", icon: Layers },
  ];

  return (
    <section id="capability" className="py-24 bg-[#0B1624] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="bg-[#0F1D30] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 lg:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="tech-label flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
                  04 / INDUSTRIAL CAPABILITY
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Built Around Industrial Requirements
                </h2>

                <p className="text-gray-300 text-base leading-relaxed">
                  From equipment supply to customized fabrication and project support, our team works with customers to understand application requirements and identify suitable solutions.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#08101C] border border-white/5 hover:border-[#FF6B00]/40 rounded-sm transition-colors space-y-2 group"
                    >
                      <div className="flex items-center gap-2 text-[#FF6B00]">
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#FF6B00]">
                          {cap.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-normal">
                        {cap.text}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full bg-[#08101C]">
              <Image
                src="/images/Industrial Projects and Installations.png"
                alt="BS Energy India - Industrial Capability"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D30] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 tech-corner-tl" />
              <div className="absolute bottom-4 right-4 tech-corner-br" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
