"use client";

import { MOBILE_QUERY } from "./tokens";
import { useGsap } from "./gsap";

/** Each project reads like a hunk of a diff: it is "added" as it scrolls into view. Driven by [data-diff] in the server markup. */
export function ProjectsMotion() {
  useGsap(({ gsap, ScrollTrigger }) => {
    const mm = gsap.matchMedia();
    mm.add({ motion: "(prefers-reduced-motion: no-preference)", mobile: MOBILE_QUERY }, (ctx) => {
      const { motion, mobile } = ctx.conditions as { motion: boolean; mobile: boolean };
      if (!motion) return;
      const items = gsap.utils.toArray<HTMLElement>("[data-diff]");
      const parts = (el: Element) => el.querySelectorAll("[data-reveal]");

      // Only what is still below the fold starts hidden, so nothing flashes on load.
      items.forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight * 0.9) gsap.set(parts(el), { opacity: 0 });
      });

      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((el, i) => {
            const [media, ...text] = parts(el);
            const tl = gsap.timeline({ delay: i * 0.1, defaults: { ease: "expo.out" } });
            if (media)
              tl.fromTo(
                media,
                mobile ? { opacity: 0, y: 14 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" },
                mobile
                  ? { opacity: 1, y: 0, duration: 0.5 }
                  : { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.8 },
                0,
              );
            if (text.length)
              tl.fromTo(text, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 0.15);
            tl.set([media, ...text].filter(Boolean), { clearProps: "all" });
          });
        },
      });
    });
    return () => mm.revert();
  });

  return null;
}
