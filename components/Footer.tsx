const footerLink =
  "rounded-sm text-sm transition-colors hover:text-white focus-ring";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <h2 className="flex items-center justify-center gap-3 text-lg font-semibold tracking-tight text-white md:justify-start">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-sm bg-sky-400"
            />
            Glen D&apos;Souza
          </h2>

          <p className="mt-2 text-sm">
            Technology Consultant &amp; Engineer · Melbourne, Victoria
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          <a href="#about" className={footerLink}>
            About
          </a>

          <a href="#projects" className={footerLink}>
            Projects
          </a>

          <a href="#contact" className={footerLink}>
            Contact
          </a>

          <a
            href="https://github.com/lbbextreme"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            GitHub
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-slate-400 md:text-left">
        © {new Date().getFullYear()} Glen D&apos;Souza. All rights reserved.
      </p>
    </footer>
  );
}
