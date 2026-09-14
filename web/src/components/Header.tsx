"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, ArrowUpRight, Shield } from "lucide-react";
import { contactConfig, companyConfig, buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "SERVICES", href: "/services" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "PROJECTS", href: "/projects" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 lg:px-8",
          isScrolled
            ? "bg-[#0B1624]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-[#0B1624]/90 via-[#0B1624]/40 to-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Professional Text-Based Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center font-black text-black tracking-tighter text-xl rounded-sm group-hover:bg-white transition-colors duration-200 shadow-[0_0_15px_rgba(255,107,0,0.4)]">
              BS
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-widest text-lg leading-tight uppercase group-hover:text-[#FF6B00] transition-colors">
                BS ENERGY
              </span>
              <span className="text-[#FF6B00] text-[10px] font-mono tracking-[0.25em] uppercase font-bold">
                INDIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-mono tracking-wider font-semibold text-gray-300 hover:text-[#FF6B00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* CALL */}
            <a
              href={buildPhoneLink()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-all bg-white/5"
              title="Call Sales Team"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>CALL</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-gray-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 rounded-sm transition-all bg-white/5"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>

            {/* GET A QUOTE (Primary CTA) */}
            <button
              onClick={onOpenQuoteModal}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-black bg-[#FF6B00] hover:bg-white rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-mono font-bold text-black bg-[#FF6B00] rounded-sm"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1624]/98 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between md:hidden border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono tracking-widest text-[#FF6B00] uppercase mb-2 border-b border-white/10 pb-2">
              NAVIGATION / MENU
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold tracking-wider text-gray-200 hover:text-[#FF6B00] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-gray-500">→</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full py-3.5 bg-[#FF6B00] text-black font-mono font-bold text-sm text-center rounded-sm tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              GET A QUOTE
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={buildPhoneLink()}
                className="py-2.5 bg-white/5 border border-white/10 text-white font-mono text-xs font-bold text-center rounded-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                CALL
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs font-bold text-center rounded-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
