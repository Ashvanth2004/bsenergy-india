"use client";

import { Phone, MessageSquare, Mail, MapPin, Building, Calendar, ArrowRight, UserCheck } from "lucide-react";
import { contactConfig, companyConfig, buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export default function ContactSection({ onOpenQuoteModal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-[#0B1624] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="tech-label flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
            10 / DIRECT CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build the Right Industrial Solution
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Get in touch directly with our sales and technical team for equipment quotes, custom fabrication queries, or project discussions.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Company Details Card */}
          <div className="lg:col-span-6 bg-[#0F1D30] border border-white/10 rounded-sm p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <div className="text-2xl font-extrabold text-white tracking-tight uppercase">
                  {companyConfig.name}
                </div>
                <div className="text-xs font-mono text-[#FF6B00] tracking-widest mt-1">
                  {companyConfig.tagline}
                </div>
              </div>

              {/* Key Meta Badges */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-sm border border-white/5">
                  <UserCheck className="w-4 h-4 text-[#FF6B00]" />
                  <div>
                    <div className="text-[10px] text-gray-400">CONTACT PERSON</div>
                    <div className="font-bold text-white">{contactConfig.contactPerson}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-sm border border-white/5">
                  <Calendar className="w-4 h-4 text-[#FF6B00]" />
                  <div>
                    <div className="text-[10px] text-gray-400 font-mono">ESTABLISHED / EXPERIENCE</div>
                    <div className="font-bold text-white">{companyConfig.established} ({companyConfig.yearsExperience} Years)</div>
                  </div>
                </div>
              </div>

              {/* Address / Email / Phone Details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase">LOCATION / ADDRESS</div>
                    <div className="font-semibold text-white">{contactConfig.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Phone className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase">PHONE NUMBER</div>
                    <div className="font-mono font-bold text-white">{contactConfig.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase">WHATSAPP CONTACT</div>
                    <div className="font-mono font-bold text-white">{contactConfig.whatsapp}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Mail className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase">EMAIL ADDRESS</div>
                    <div className="font-mono font-bold text-white">{contactConfig.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <a
                href={buildPhoneLink()}
                className="py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold text-center rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                CALL NOW
              </a>

              <a
                href={buildWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-mono font-bold text-center rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                WHATSAPP
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="py-3 bg-[#FF6B00] hover:bg-white text-black font-mono text-xs font-bold text-center rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                GET A QUOTE
              </button>
            </div>

          </div>

          {/* Quick Notice & Engineering Map / Info Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0F1D30] to-[#162438] border border-white/10 rounded-sm p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#FF6B00] tracking-widest uppercase">
                ENGINEERING QUOTATION PROCESS
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                How We Handle Your Requirement
              </h3>

              <div className="space-y-4 text-xs font-mono text-gray-300">
                <div className="p-4 bg-[#08101C] border border-white/5 rounded-sm flex items-start gap-3">
                  <span className="text-[#FF6B00] font-black text-sm">01.</span>
                  <div>
                    <div className="text-white font-bold mb-0.5">REQUIREMENT REVIEW</div>
                    <div>Submit your capacity, heating application, or drawings. Our team analyzes parameters.</div>
                  </div>
                </div>

                <div className="p-4 bg-[#08101C] border border-white/5 rounded-sm flex items-start gap-3">
                  <span className="text-[#FF6B00] font-black text-sm">02.</span>
                  <div>
                    <div className="text-white font-bold mb-0.5">EQUIPMENT & FABRICATION PROPOSAL</div>
                    <div>We recommend matching burner models, controller units, stack sizing, or pipeline layouts.</div>
                  </div>
                </div>

                <div className="p-4 bg-[#08101C] border border-white/5 rounded-sm flex items-start gap-3">
                  <span className="text-[#FF6B00] font-black text-sm">03.</span>
                  <div>
                    <div className="text-white font-bold mb-0.5">COMMERCIAL QUOTATION & DISPATCH</div>
                    <div>Competitive pricing, delivery timelines, and technical documentation prepared for procurement.</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-4 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 text-center tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <span>SUBMIT REQUIREMENT FORM NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
