import { contactEmail, emailHref } from "@/data/contact";

const location =
  "Melbourne, Victoria · Onsite in Melbourne and remote across Australia";

type ContactDetailsProps = {
  /** Render the address as a mailto text link, for footers without the full CTA. */
  linkEmail?: boolean;
};

/** Trading entity and location lines shared by the contact section and project footers. */
export default function ContactDetails({
  linkEmail = false,
}: ContactDetailsProps) {
  return (
    <>
      <p className="text-sm leading-6 text-slate-400">
        Technology consulting delivered through TD Group of Companies Pty Ltd.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        {linkEmail ? (
          <>
            <a href={emailHref} data-cta="email-footer" className="text-link">
              {contactEmail}
              <span className="sr-only"> (opens your email app)</span>
            </a>
            {` · ${location}`}
          </>
        ) : (
          `${contactEmail} · ${location}`
        )}
      </p>
    </>
  );
}
