"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-8 text-white"
    >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="mb-4 uppercase tracking-[0.3em] text-sky-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I&apos;m Glen
        </motion.p>

        <motion.h1
          className="text-6xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          IT Professional &amp; Hands-On Technical Builder
        </motion.h1>

        <motion.h2
          className="mt-6 text-2xl text-slate-300 md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I design reliable systems and build practical software solutions.
        </motion.h2>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I approach every technical challenge with an owner&apos;s mindset to
          deliver lasting value.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#projects"
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            View Technical Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
