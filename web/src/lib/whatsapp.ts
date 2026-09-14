// ============================================================================
// BS ENERGY EQUIPMENTS — WhatsApp Utilities
// ============================================================================
// Centralizes every WhatsApp pre-filled message used on the site so that
// product pages, buttons and the enquiry form all produce consistent,
// correctly URI-encoded messages.
//
// Messaging rules:
//  - Every message opens https://wa.me/<whatsapp>?text=<encoded>
//  - The message is already typed when the chat opens; the customer only
//    needs to press SEND.
//  - The WhatsApp number must be supplied in international format WITHOUT
//    the leading "+" (e.g. "919876543210").
//  - If the number is still a placeholder the helper returns null so the
//    button can be disabled rather than opening a broken link.
// ============================================================================

import { contactConfig } from "@/config/contact";

/** Base URL for WhatsApp messaging. Returns null while placeholder in place. */
function whatsappBaseUrl(): string | null {
  const raw = contactConfig.whatsapp;
  if (!raw || raw.startsWith("[") || raw.includes("[EMAIL]")) {
    return null;
  }
  return `https://wa.me/${raw}`;
}

/**
 * Encodes a message for use in a WhatsApp URL query string.
 * Uses encodeURIComponent so line breaks, spaces and special characters are
 * safely represented.
 */
export function encodeWhatsappMessage(message: string): string {
  return encodeURIComponent(message);
}

/**
 * Builds a complete WhatsApp deep link for a given message body.
 * Returns null when the configured number is not yet set.
 */
export function whatsappUrl(message: string): string | null {
  const base = whatsappBaseUrl();
  if (!base) return null;
  return `${base}?text=${encodeWhatsappMessage(message)}`;
}

// ----------------------------------------------------------------------------
// Message templates
// ----------------------------------------------------------------------------

/** Default / general enquiry message used by generic "WhatsApp" buttons. */
export const GENERAL_MESSAGE = `Hello BS Energy India, I would like to enquire about your industrial equipment and services. Please contact me regarding my requirement.`;

/** Product / page-specific messages. Each keeps the same opening so the
 *  recipient immediately knows the enquiry is about BS Energy India,
 *  then tailors the body to the product context. */

export const PRODUCT_MESSAGES = {
  /** Industrial Burner product page + any burner-specific CTA. */
  industrialBurner: `Hello BS Energy India, I am interested in your Industrial Burner solutions. Please share suitable options and quotation details. My requirement is:`,

  /** Burner Controller product page + any controller-specific CTA. */
  burnerController: `Hello BS Energy India, I am interested in a Burner Controller. Please share suitable options and quotation details. My requirement is:`,

  /** Industrial Pipeline section / product. */
  industrialPipeline: `Hello BS Energy India, I am interested in Industrial Pipeline solutions. Please contact me regarding my project requirement.`,

  /** Fabrication service enquiry. */
  fabrication: `Hello BS Energy India, I am interested in your Industrial Fabrication Services. Please contact me regarding my project.`,
} as const;

export type ProductMessageKey = keyof typeof PRODUCT_MESSAGES;

// ----------------------------------------------------------------------------
// Form-driven WhatsApp message
// ----------------------------------------------------------------------------

/**
 * Builds a WhatsApp message from the enquiry form fields. This is used by
 * the "Send via WhatsApp" secondary CTA on the contact / quote form.
 *
 * NOTE: None of these values are sent to any server. The function only
 * assembles a message string that is handed to the WhatsApp deep link so
 * the customer can review and send it themselves.
 */
export function buildFormWhatsappMessage(form: {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  quantity?: string;
  industry?: string;
  requirement?: string;
}): string {
  const lines: string[] = [PRODUCT_MESSAGES.industrialBurner];

  if (form.name) lines.push(`Name: ${form.name}`);
  if (form.company) lines.push(`Company: ${form.company}`);
  if (form.phone) lines.push(`Phone: ${form.phone}`);
  if (form.email) lines.push(`Email: ${form.email}`);
  if (form.product) lines.push(`Product / Service: ${form.product}`);
  if (form.quantity) lines.push(`Quantity: ${form.quantity}`);
  if (form.industry) lines.push(`Industry / Application: ${form.industry}`);
  if (form.requirement)
    lines.push(`Requirement: ${form.requirement}`);

  return lines.join("\n");
}
