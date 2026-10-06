"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-sm text-lg font-semibold tracking-tight text-white focus-ring"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 shrink-0 rounded-sm bg-sky-400"
          />
          Glen D&apos;Souza
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium text-slate-300 md:flex lg:gap-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2.5 py-2 transition-colors hover:bg-white/5 hover:text-white focus-ring lg:px-3"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex"
        >
          Discuss Your Project
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-xl text-white transition-colors hover:bg-white/5 focus-ring md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 px-6 pb-8 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-white/5 text-lg font-medium text-slate-200">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-sm py-4 transition-colors hover:text-sky-400 focus-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary mt-6 flex w-full"
          >
            Discuss Your Project
          </a>
        </div>
      )}
    </nav>
  );
}
