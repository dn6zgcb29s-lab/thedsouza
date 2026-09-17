"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
};

export default function FadeIn({ children }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-fade-in
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
