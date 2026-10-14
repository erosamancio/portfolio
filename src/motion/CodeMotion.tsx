"use client";

import { useViewMode } from "@/components/viewMode";
import { useGsap } from "./gsap";

// "Below the fold" at load: only those pieces start hidden, so nothing flashes on screen.
const belowFold = (el: Element, at = 0.6) => el.getBoundingClientRect().top > window.innerHeight * at;

function CodeMotionSetup() {
  useGsap(({ gsap, ScrollTrigger }) => {
    const all = <T extends Element>(selector: string, root: ParentNode = document) =>
      gsap.utils.toArray<T>(selector, root);
    const mm = gsap.matchMedia();

    mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 64rem)" }, (ctx) => {
      const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
      if (!motion) return;

      let alive = true;
      let observer: ResizeObserver | undefined;

      document.fonts.ready.then(() => {
        if (!alive) return;
        // Added to the matchMedia context so every trigger created here is cleaned up with it.
        ctx.add(() => {
          // stack.json and contato.ts write themselves line by line when they scroll in.
          const writers = [
            ...all<HTMLElement>('[data-m="rows"]').map((el) => ({ el, rows: all<HTMLElement>(":scope > li", el) })),
            ...all<HTMLElement>('[data-m="terminal"]').map((el) => ({
              el,
              rows: all<HTMLElement>('[data-prompt], p[class*="row"], ul > li', el),
            })),
          ];
          writers.forEach(({ el, rows }) => {
            if (!belowFold(el, 0.75)) return;
            gsap.set(rows, { opacity: 0, clipPath: "inset(0 100% 0 0)" });
            const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
            rows.forEach((row, i) => {
              const at = i * 0.07;
              tl.to(row, { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 0.5, clearProps: "all" }, at);
              const tokens = row.querySelectorAll("[data-tok]");
              if (tokens.length)
                tl.from(tokens, { color: "#6e6e78", duration: 0.5, ease: "power2.out", clearProps: "color" }, at + 0.1);
            });
            ScrollTrigger.create({ trigger: el, start: "top 80%", once: true, onEnter: () => tl.play() });
          });

          // este-site.ts: a highlighted line walks down the code as the section scrolls past (desktop only).
          if (desktop) {
            all<HTMLElement>('[data-m="reading"]').forEach((code) => {
              const rows = all<HTMLElement>(":scope > span", code);
              if (!rows.length) return;
              let current = -1;
              const clear = () => {
                rows[current]?.removeAttribute("data-reading");
                current = -1;
              };
              ScrollTrigger.create({
                trigger: "#este-site",
                start: "top 55%",
                end: "bottom 55%",
                onUpdate: (self) => {
                  const next = Math.min(rows.length - 1, Math.floor(self.progress * rows.length));
                  if (next === current) return;
                  rows[current]?.removeAttribute("data-reading");
                  rows[next].setAttribute("data-reading", "");
                  current = next;
                },
                onLeave: clear,
                onLeaveBack: clear,
              });
            });
          }

          ScrollTrigger.refresh();

          // Any later layout shift (images, text re-wrapping) moves the start points; measure again.
          let timer = 0;
          let lastHeight = document.body.offsetHeight;
          observer = new ResizeObserver(() => {
            if (document.body.offsetHeight === lastHeight) return;
            lastHeight = document.body.offsetHeight;
            clearTimeout(timer);
            timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
          });
          observer.observe(document.body);
        });
      });

      return () => {
        alive = false;
        observer?.disconnect();
      };
    });

    return () => mm.revert();
  });

  return null;
}

/**
 * Scroll motion that belongs to the code view only: stack.json and contato.ts writing themselves, and the reading line
 * in este-site.ts. In the plain preview none of it mounts, so GSAP is not even requested for it.
 */
export function CodeMotion() {
  return useViewMode() === "code" ? <CodeMotionSetup /> : null;
}
