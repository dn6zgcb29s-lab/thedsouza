import { contactEmail, emailHref, responseCommitment } from "@/data/contact";

type ContactCtasProps = {
  align?: "center" | "start";
};

/** Primary enquiry CTA: email, with the response commitment beneath. */
export default function ContactCtas({ align = "center" }: ContactCtasProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <a
        href={emailHref}
        data-cta="email"
        className="btn-primary max-w-full text-center [overflow-wrap:anywhere]"
      >
        Email {contactEmail}
        <span className="sr-only"> (opens your email app)</span>
      </a>

      <p className="mt-3 text-sm text-slate-400">{responseCommitment}</p>
    </div>
  );
}
