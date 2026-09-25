/**
 * Single source for conversion links and commercial placeholders.
 * Replace the placeholders here only — every CTA and price reads from this file.
 */

export const contactEmail = "glen@thedsouza.com";
export const emailHref = `mailto:${contactEmail}?subject=Project%20discussion`;

// TODO(P3): replace with the real Cal.com 15-minute booking URL.
export const bookingUrl = "https://cal.com/PLACEHOLDER";
export const bookingIsPlaceholder = bookingUrl.includes("PLACEHOLDER");

// TODO(P3): replace "$X" values with approved prices before merge.
export const PRICE_PLACEHOLDER = "$X";
export const pricing = {
  healthCheck: `Fixed price · ${PRICE_PLACEHOLDER}`,
  buildSprint: `From ${PRICE_PLACEHOLDER}`,
  projectDelivery: "Quoted by project or milestone",
};

export const isPricePlaceholder = (price: string) =>
  price.includes(PRICE_PLACEHOLDER);
