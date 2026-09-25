import { bookingIsPlaceholder, bookingUrl, emailHref } from "@/data/contact";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export function PlaceholderTag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-xs font-medium text-amber-300">
      {children}
    </span>
  );
}

type ContactCtasProps = {
  align?: "center" | "start";
  stack?: boolean;
};

/** Primary conversion pair: book a free call (primary) + email (secondary). */
export default function ContactCtas({
  align = "center",
  stack = false,
}: ContactCtasProps) {
  const layout = stack
    ? "flex flex-col gap-4"
    : `flex flex-col gap-4 sm:flex-row ${align === "center" ? "sm:justify-center" : ""}`;

  return (
    <div>
      <div className={layout}>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="book-call"
          className={`inline-flex justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 ${focus}`}
        >
          Book a free 15-minute call
          <span className="sr-only"> (opens booking page in a new tab)</span>
        </a>

        <a
          href={emailHref}
          data-cta="email"
          className={`inline-flex justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 ${focus}`}
        >
          Email me
          <span className="sr-only"> at glen@thedsouza.com</span>
        </a>
      </div>

      {bookingIsPlaceholder && (
        <p
          className={`mt-3 text-sm ${align === "center" && !stack ? "text-center" : ""}`}
        >
          <PlaceholderTag>
            Placeholder: booking link not yet live
          </PlaceholderTag>
        </p>
      )}
    </div>
  );
}
