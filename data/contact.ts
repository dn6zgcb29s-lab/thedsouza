/**
 * Single source for the enquiry path. Every enquiry CTA reads from this file.
 */

export const contactEmail = "glen@thedsouza.com";

const emailSubject = "Technology enquiry";
const emailBody = [
  "Hi Glen,",
  "",
  "What I'm trying to achieve:",
  "",
  "The problem I'd like help with:",
  "",
  "Any relevant context:",
  "",
].join("\r\n");

export const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export const responseCommitment = "I reply to every enquiry within 48 hours.";
export const scopeCommitment =
  "Scope and cost are agreed before any work starts.";
