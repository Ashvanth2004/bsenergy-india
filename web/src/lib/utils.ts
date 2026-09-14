import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Encodes a message for WhatsApp URL scheme
 */
export function getWhatsAppUrl(whatsappNumber: string, message: string): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

/**
 * Checks if phone number is available for call tel link
 */
export function getTelUrl(phone: string): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  return `tel:${cleanPhone}`;
}
