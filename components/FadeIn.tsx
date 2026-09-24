"use client";

import { ReactNode, useEffect, useRef } from "react";

type FadeInProps = {
  children: ReactNode;
};

/**
 * Progressive-enhancement reveal.
 *
 * Content is server-rendered fully visible. Only after hydration, and only
 * for sections that are still below the viewport, is the pending state
 * applied — so a visitor can never see hidden content: no-JS, slow
 * hydration and reduced-motion all leave it visible.
 */
export default function FadeIn({ children }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen (or above it): leave untouched.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      delete el.dataset.reveal;
    };
  }, []);

  return (
    <div ref={ref} data-fade-in>
      {children}
    </div>
  );
}
