export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-8 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <h2 className="text-xl font-bold text-white">Glen D&apos;Souza</h2>

          <p className="mt-2">Technology • AI • Digital Projects</p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#about" className="transition hover:text-sky-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-sky-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-sky-400">
            Contact
          </a>

          <a
            href="https://github.com/lbbextreme"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            GitHub
          </a>
        </nav>

        <p className="text-sm">
          © {new Date().getFullYear()} Glen D&apos;Souza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
