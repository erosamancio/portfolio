"use client";

import { useGsap } from "./gsap";

/**
 * Each project image is revealed once, as it scrolls into view. Desktop only, and only for what is still below
 * the fold, so nothing flashes on load. Driven by [data-diff] and [data-reveal] in the server markup.
 */
export function ProjectsMotion() {
  useGsap(({ gsap, ScrollTrigger }) => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-diff]").filter((el) => el.querySelector("[data-reveal]"));

      items.forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight * 0.9)
          gsap.set(el.querySelector("[data-reveal]"), { opacity: 0 });
      });

      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          batch.forEach((el, i) => {
            const media = el.querySelector("[data-reveal]");
            gsap.to(media, { opacity: 1, duration: 0.5, delay: i * 0.1, ease: "expo.out", clearProps: "all" });
          }),
      });
    });
    return () => mm.revert();
  });

  return null;
}
