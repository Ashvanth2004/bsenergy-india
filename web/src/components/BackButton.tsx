"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackHref?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  fallbackHref = "/",
  label = "BACK TO PREVIOUS PAGE",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 2) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold text-gray-300 hover:text-black bg-white/5 hover:bg-[#FF6B00] border border-white/10 hover:border-[#FF6B00] rounded-sm transition-all duration-200 group shadow-sm ${className}`}
    >
      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </button>
  );
}
