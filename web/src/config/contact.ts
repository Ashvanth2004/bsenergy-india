// ============================================================================
// BS ENERGY EQUIPMENTS — Centralized Contact & Business Configuration
// ============================================================================
// Single source of truth for all contact references across the website.
// Update these values once and every phone / WhatsApp / email / address
// reference throughout the site reflects the change automatically.
// ============================================================================

export const contactConfig = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+91 99656 62266",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+91 99656 62266",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "bsenergyindia@gmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "Ahmedabad, Gujarat, India",
  location: "Ahmedabad, Gujarat, India",
  contactPerson: "Balamurugan",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "#",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "#",
} as const;

export const companyConfig = {
  name: "BS Energy India",
  nameShort: "BS ENERGY",
  tagline: "Reliable Industrial Energy & Heating Solutions",
  established: 2007,
  yearsExperience: "14+",
  businessType: "Manufacturer & Exporter",
  firmType: "Partnership Firm",
  location: "Ahmedabad, Gujarat, India",
} as const;

export const whatsappMessages = {
  general: "Hello BS Energy India, I would like to enquire about your industrial equipment and services. Please contact me regarding my requirement.",
  industrialBurner: "Hello BS Energy India, I am interested in your Industrial Burner solutions. Please share suitable options and quotation details. My requirement is:",
  burnerController: "Hello BS Energy India, I am interested in a Burner Controller. Please share suitable options and quotation details. My requirement is:",
  industrialPipeline: "Hello BS Energy India, I am interested in Industrial Pipeline solutions. Please contact me regarding my project requirement.",
  fabrication: "Hello BS Energy India, I am interested in your Industrial Fabrication Services. Please contact me regarding my project.",
  quote: "Hello BS Energy India, I have submitted an enquiry on your website regarding an industrial requirement. Please get in touch with me.",
} as const;

export function isContactConfigured(): boolean {
  return true;
}

/**
 * Builds the wa.me link with encoded message for +91 99656 62266
 */
export function buildWhatsAppLink(message: string = whatsappMessages.general): string {
  const number = contactConfig.whatsapp;
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds tel: link for call buttons (automatically opens device dial pad)
 */
export function buildPhoneLink(): string {
  const number = contactConfig.phone;
  const cleanNumber = number.replace(/[^0-9+]/g, "");
  return `tel:${cleanNumber}`;
}
