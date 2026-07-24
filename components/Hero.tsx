"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-8 text-white">
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
          Welcome
        </motion.p>

        <motion.h1
          className="text-6xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Glen D&apos;Souza
        </motion.h1>

        <motion.h2
          className="mt-6 text-2xl text-slate-300 md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building technology that makes a difference.
        </motion.h2>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I&apos;m documenting my journey as I build websites, explore AI,
          create digital products and help businesses embrace technology.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400">
            View My Projects
          </button>

          <button className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
