import type { Metadata } from "next";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import IntranetNav from "@/components/ai-intranet/IntranetNav";
import { intranetBase } from "@/lib/ai-intranet/format";

export const metadata: Metadata = {
  title: "TD Services — AI Business Intranet (POC)",
  description:
    "Proof-of-concept demonstration of an AI-assisted business intranet using synthetic documents. Not a production system.",
  robots: { index: false, follow: false },
  alternates: { canonical: intranetBase },
};

export default function IntranetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <div
        role="note"
        className="border-b border-amber-400/30 bg-amber-400/10 px-6 py-2 text-center text-xs text-amber-100 sm:text-sm"
      >
        <TriangleAlert
          aria-hidden="true"
          className="mr-2 inline h-4 w-4 align-text-bottom"
        />
        <strong className="font-semibold">Proof of concept.</strong> Synthetic
        content for a fictional company. No login, no real data, not a
        production system.
      </div>
      <header className="border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <Link
            href={intranetBase}
            className="flex items-center gap-3 rounded-sm text-lg font-semibold tracking-tight text-white focus-ring"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-sm bg-sky-400"
            />
            <span>
              TD Services
              <span className="font-normal text-slate-400">
                {" "}
                — AI Business Intranet
              </span>
            </span>
          </Link>
          <IntranetNav />
        </div>
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-8 md:py-14"
      >
        {children}
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <p>
            A TD Services demonstration. “Northbridge Supplies” is a fictional
            company; all documents are synthetic.
          </p>
          <Link href="/" className="text-link">
            Back to thedsouza.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
