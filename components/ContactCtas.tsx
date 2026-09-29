import { contactEmail, emailHref, responseCommitment } from "@/data/contact";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

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
        className={`inline-flex max-w-full justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition [overflow-wrap:anywhere] hover:bg-sky-400 ${focus}`}
      >
        Email {contactEmail}
        <span className="sr-only"> (opens your email app)</span>
      </a>

      <p className="mt-3 text-sm text-slate-400">{responseCommitment}</p>
    </div>
  );
}
