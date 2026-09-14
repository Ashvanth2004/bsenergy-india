import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight, Shield } from "lucide-react";
import { contactConfig, companyConfig, buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08101C] text-gray-400 border-t border-white/10 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FF6B00] flex items-center justify-center font-black text-black text-lg rounded-sm">
                BS
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-widest text-base leading-tight uppercase">
                  {companyConfig.nameShort}
                </span>
                <span className="text-[#FF6B00] text-[9px] font-mono tracking-[0.2em] uppercase font-bold">
                  EQUIPMENTS
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-300 font-mono leading-relaxed">
              {companyConfig.tagline}
            </p>

            <p className="text-xs text-gray-400 leading-relaxed">
              Incorporated in 2007 as a Partnership Firm. Providing industrial combustion burners, burner controllers, thermal heat recovery units, process piping, and fabrication services.
            </p>

            <div className="pt-2 text-[11px] font-mono text-gray-400 space-y-1 border-t border-white/5">
              <div>ESTABLISHED: <span className="text-white font-bold">{companyConfig.established}</span></div>
              <div>EXPERIENCE: <span className="text-white font-bold">{companyConfig.yearsExperience} Years</span></div>
              <div>FIRM TYPE: <span className="text-white font-bold">{companyConfig.firmType}</span></div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-[#FF6B00] tracking-widest uppercase border-b border-white/10 pb-2">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link href="/" className="hover:text-white transition-colors">HOME</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">ABOUT US</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">PRODUCTS</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">SERVICES</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">GALLERY</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-[#FF6B00] tracking-widest uppercase border-b border-white/10 pb-2">
              EQUIPMENT CATALOG
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link href="/products/industrial-burners" className="hover:text-[#FF6B00] transition-colors">Industrial Burners</Link></li>
              <li><Link href="/products/burner-controllers" className="hover:text-[#FF6B00] transition-colors">Burner Controllers</Link></li>
              <li><Link href="/products/industrial-pipelines" className="hover:text-[#FF6B00] transition-colors">Industrial Pipelines</Link></li>
              <li><Link href="/products/industrial-chimneys" className="hover:text-[#FF6B00] transition-colors">Industrial Chimneys</Link></li>
              <li><Link href="/products/hot-water-generators" className="hover:text-[#FF6B00] transition-colors">Hot Water Generators</Link></li>
              <li><Link href="/products/heat-recovery-systems" className="hover:text-[#FF6B00] transition-colors">Heat Recovery Systems</Link></li>
              <li><Link href="/products/thermal-fluid-heaters" className="hover:text-[#FF6B00] transition-colors">Thermal Fluid Heaters</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Config Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-[#FF6B00] tracking-widest uppercase border-b border-white/10 pb-2">
              CONTACT DESK
            </div>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{contactConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contactConfig.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{contactConfig.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{contactConfig.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-300 hover:text-white rounded-sm text-[11px] font-mono font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WHATSAPP SALES DESK
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            © {currentYear} {companyConfig.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>PREMIUM INDUSTRIAL ENGINEERING</span>
            <span>•</span>
            <span>AHMEDABAD, GUJARAT, INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
