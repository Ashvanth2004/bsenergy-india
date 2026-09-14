"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink, contactConfig } from "@/config/contact";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(6, "Valid phone number is required"),
  email: z.string().email("Valid email address is required"),
  product: z.string().min(1, "Please select a product or service"),
  quantity: z.string().min(1, "Quantity or capacity is required"),
  industry: z.string().min(2, "Industry/Application is required"),
  requirement: z.string().min(10, "Please describe your requirement (min 10 characters)"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      product: initialProduct || "Industrial Burner",
      quantity: "1 Unit",
      industry: "Manufacturing",
    },
  });

  const formValues = watch();

  if (!isOpen) return null;

  const productOptions = [
    "Industrial Burner",
    "Industrial Chimney",
    "Burner Controller",
    "Hot Water Generator",
    "Heat Recovery System",
    "Thermal Fluid Heater",
    "Industrial Pipeline",
    "Fabrication Service",
    "Other",
  ];

  const onSubmitForm = async (data: QuoteFormData) => {
    const payload = {
      timestamp: new Date().toISOString(),
      fullName: data.name.trim(),
      companyName: data.company.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      requirement: `${data.product} (${data.quantity} - ${data.industry})`,
      message: data.requirement.trim(),
    };

    try {
      const endpoint = contactConfig.googleAppsScriptUrl;
      if (endpoint && endpoint.startsWith("http")) {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      console.error("Error submitting to Google Apps Script:", err);
    } finally {
      setIsSubmitted(true);
    }
  };

  // Pre-fill WhatsApp message with structured form values
  const buildFormWhatsAppUrl = () => {
    const msg = `Hello BS Energy India, I would like to submit an enquiry:
• Name: ${formValues.name || "-"}
• Company: ${formValues.company || "-"}
• Phone: ${formValues.phone || "-"}
• Email: ${formValues.email || "-"}
• Product/Service: ${formValues.product || "-"}
• Quantity/Capacity: ${formValues.quantity || "-"}
• Industry: ${formValues.industry || "-"}
• Requirement Details: ${formValues.requirement || "-"}`;

    return buildWhatsAppLink(msg);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0B1624] border border-[#FF6B00]/40 rounded-sm max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(255,107,0,0.3)] animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setIsSubmitted(false);
            reset();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 bg-white/5 border border-white/10 rounded-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="tech-label">INDUSTRIAL ENQUIRY FORM</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Engineering Quotation
              </h2>
              <p className="text-xs text-gray-300 font-mono">
                Fill in your project specifications to receive pricing, drawings matching, and lead time details.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">NAME *</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe / Contact Person"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.name && <p className="text-[10px] font-mono text-red-400">{errors.name.message}</p>}
                </div>

                {/* Company */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">COMPANY NAME *</label>
                  <input
                    {...register("company")}
                    placeholder="Acme Industrial Ltd"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.company && <p className="text-[10px] font-mono text-red-400">{errors.company.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">PHONE NUMBER *</label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-[10px] font-mono text-red-400">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">EMAIL ADDRESS *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="purchase@acme.com"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.email && <p className="text-[10px] font-mono text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Product Select */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">PRODUCT / SERVICE *</label>
                  <select
                    {...register("product")}
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B1624] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.product && <p className="text-[10px] font-mono text-red-400">{errors.product.message}</p>}
                </div>

                {/* Quantity */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">QUANTITY / CAPACITY *</label>
                  <input
                    {...register("quantity")}
                    placeholder="e.g. 2 Units / 500 Mkcal"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.quantity && <p className="text-[10px] font-mono text-red-400">{errors.quantity.message}</p>}
                </div>

                {/* Industry */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase">INDUSTRY / APPLICATION *</label>
                  <input
                    {...register("industry")}
                    placeholder="e.g. Textile / Chemical"
                    className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                  />
                  {errors.industry && <p className="text-[10px] font-mono text-red-400">{errors.industry.message}</p>}
                </div>
              </div>

              {/* Requirement Details */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-300 font-bold uppercase">REQUIREMENT SPECIFICATIONS *</label>
                <textarea
                  {...register("requirement")}
                  rows={4}
                  placeholder="Describe your technical requirements, fuel type, temperature specs, or project timeline..."
                  className="w-full bg-[#0F1D30] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors"
                />
                {errors.requirement && <p className="text-[10px] font-mono text-red-400">{errors.requirement.message}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 py-3.5 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND REQUIREMENT</span>
                </button>

                <a
                  href={buildFormWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SEND VIA WHATSAPP</span>
                </a>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Confirmation Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Enquiry Received</h3>
              <p className="text-sm text-gray-300 font-mono max-w-md mx-auto">
                Thank you. Your industrial requirement has been recorded. Our engineering team will review your specifications and contact you promptly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={buildFormWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                FORWARD ENQUIRY TO WHATSAPP
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  reset();
                  onClose();
                }}
                className="py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs rounded-sm"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
