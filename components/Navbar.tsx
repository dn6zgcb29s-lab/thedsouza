"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <h1 className="text-xl font-bold text-white">Glen D&apos;Souza</h1>

        <ul className="hidden gap-8 text-slate-300 md:flex">
          <li>
            <Link href="/" className="transition hover:text-sky-400">
              Home
            </Link>
          </li>

          <li>
            <a href="#about" className="transition hover:text-sky-400">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-sky-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-sky-400">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-sky-500 px-5 py-2 font-medium text-white transition hover:bg-sky-400 md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-2xl text-white transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5 text-slate-300">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block transition hover:text-sky-400"
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block transition hover:text-sky-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block transition hover:text-sky-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block transition hover:text-sky-400"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 block rounded-lg bg-sky-500 px-5 py-3 text-center font-medium text-white transition hover:bg-sky-400"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
