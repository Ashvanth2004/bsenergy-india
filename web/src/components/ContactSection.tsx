import { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Calendar, UserCheck, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactConfig, companyConfig, buildWhatsAppLink, buildPhoneLink } from "@/config/contact";
import { whatsappMessages } from "@/config/contact";

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export default function ContactSection({ onOpenQuoteModal }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    requirement: "Industrial Burner",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters)";
    }

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      newErrors.companyName = "Please enter your company name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com)";
    }

    const phoneClean = formData.phone.replace(/[^0-9+]/g, "");
    if (!formData.phone.trim() || phoneClean.length < 6) {
      newErrors.phone = "Please enter a valid phone number (at least 6 digits)";
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please enter or select your requirement / subject";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your requirement (min 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName.trim(),
      companyName: formData.companyName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      requirement: formData.requirement.trim(),
      message: formData.message.trim(),
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

      setSubmitStatus("success");
      setStatusMessage(
        "Thank you for contacting BS Energy India. Your enquiry has been submitted successfully. Our team will contact you shortly."
      );
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        requirement: "Industrial Burner",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setStatusMessage(
        "Unable to submit your enquiry at this time. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1624] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="tech-label flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
            10 / DIRECT CONTACT & ENQUIRY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build the Right Industrial Solution
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-mono">
            Fill in the enquiry form below or get in touch directly with our sales and technical team for equipment quotes and custom project discussions.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Details Card (Left 5 cols) */}
          <div className="lg:col-span-5 bg-[#0F1D30] border border-white/10 rounded-sm p-8 space-y-6 flex flex-col justify-between shadow-xl">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
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
                    <div className="text-[10px] text-gray-400 font-mono">ESTABLISHED / EXP</div>
                    <div className="font-bold text-white">{companyConfig.established} ({companyConfig.yearsExperience} Yrs)</div>
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
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
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
            </div>

          </div>

          {/* Interactive Enquiry Form (Right 7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0F1D30] to-[#162438] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-white/10 pb-4 space-y-1">
              <div className="text-xs font-mono font-bold text-[#FF6B00] tracking-widest uppercase">
                DIRECT ENQUIRY FORM
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Submit Your Project Requirement
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Submissions automatically register with our sales desk and log into our central enquiry records.
              </p>
            </div>

            {/* Success Alert */}
            {submitStatus === "success" && (
              <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-sm p-4 text-emerald-300 text-xs font-mono flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-emerald-300 text-sm mb-1">Enquiry Submitted</div>
                  <div>{statusMessage}</div>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {submitStatus === "error" && (
              <div className="bg-red-500/10 border border-red-500/40 rounded-sm p-4 text-red-300 text-xs font-mono flex items-start gap-3 animate-in fade-in duration-300">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-300 text-sm mb-1">Submission Failed</div>
                  <div>{statusMessage}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                    FULL NAME <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.fullName && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                    COMPANY NAME <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Energy Ltd"
                    disabled={isSubmitting}
                    className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.companyName && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.companyName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                    EMAIL ADDRESS <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    disabled={isSubmitting}
                    className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.email && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                    PHONE NUMBER <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99656 62266"
                    disabled={isSubmitting}
                    className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.phone && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.phone}</p>}
                </div>

              </div>

              {/* Requirement / Subject Select */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                  REQUIREMENT / PRODUCT SUBJECT <span className="text-[#FF6B00]">*</span>
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50"
                >
                  <option value="Industrial Burner">Industrial Burners</option>
                  <option value="Industrial Chimney">Industrial Chimneys</option>
                  <option value="Burner Controller">Burner Controllers & Control Panels</option>
                  <option value="Hot Water Generator">Hot Water Generators</option>
                  <option value="Heat Recovery System">Heat Recovery Systems</option>
                  <option value="Thermal Fluid Heater">Thermal Fluid Heaters</option>
                  <option value="Industrial Pipeline">Industrial Pipelines & Fabrication</option>
                  <option value="Other Project Enquiry">Other Project Enquiry</option>
                </select>
                {errors.requirement && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.requirement}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-300 font-bold uppercase block">
                  MESSAGE / REQUIREMENT DETAILS <span className="text-[#FF6B00]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify capacity, fuel type, temperature specs, or project timeline..."
                  disabled={isSubmitting}
                  className="w-full bg-[#08101C] border border-white/15 focus:border-[#FF6B00] text-white text-xs font-mono p-3 rounded-sm outline-none transition-colors disabled:opacity-50 resize-y"
                />
                {errors.message && <p className="text-[10px] font-mono text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#FF6B00] hover:bg-white text-black font-mono font-bold text-xs rounded-sm transition-all duration-200 text-center tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)] disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SUBMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ENQUIRY TO GOOGLE SHEET</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
