"use client";

import type { SplitText as SplitTextType } from "gsap/SplitText";
import { useGsap } from "./gsap";

// "Below the fold" at load: only those pieces start hidden, so nothing flashes on screen.
const belowFold = (el: Element, at = 0.6) => el.getBoundingClientRect().top > window.innerHeight * at;

/**
 * Scroll-driven motion for the home sections, all driven from data attributes in the server markup:
 * titles, the experience timeline, stack.json and contato.ts writing themselves, the signature above Sobre
 * and the "reading" line in este-site.ts. The server HTML is the finished page; this only plays on top of it.
 */
export function SectionMotion() {
  useGsap(({ gsap, ScrollTrigger, SplitText }) => {
    const all = <T extends Element>(selector: string, root: ParentNode = document) =>
      gsap.utils.toArray<T>(selector, root);
    const mm = gsap.matchMedia();

    mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 64rem)" }, (ctx) => {
      const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
      if (!motion) return;

      let alive = true;
      let observer: ResizeObserver | undefined;
      const splits: SplitTextType[] = [];

      document.fonts.ready.then(() => {
        if (!alive) return;
        // Added to the matchMedia context so every trigger created here is cleaned up with it.
        ctx.add(() => {
          // Section titles: "#" lands, then the title rises out of a mask.
          all<HTMLElement>('[data-m="title"]').forEach((title) => {
            if (!belowFold(title, 0.8)) return;
            const hash = title.querySelector("[data-hash]");
            const text = title.querySelector<HTMLElement>("[data-title-text]");
            if (!text) return;
            const split = SplitText.create(text, { type: "lines", mask: "lines", aria: "none" });
            splits.push(split);
            gsap.set(split.lines, { yPercent: 105 });
            if (hash) gsap.set(hash, { opacity: 0, x: -8 });
            const tl = gsap.timeline({
              paused: true,
              defaults: { ease: "expo.out" },
              onComplete: () => split.revert(),
            });
            if (hash) tl.to(hash, { opacity: 1, x: 0, duration: 0.4, clearProps: "all" }, 0);
            tl.to(split.lines, { yPercent: 0, duration: 0.8, stagger: 0.08 }, 0.1);
            ScrollTrigger.create({ trigger: title, start: "top 88%", once: true, onEnter: () => tl.play() });
          });

          // Experience: the timeline line draws with the scroll and the entries step in.
          all<HTMLElement>('[data-m="timeline"]').forEach((list) => {
            gsap.fromTo(
              list,
              { "--draw": 0 },
              {
                "--draw": 1,
                ease: "none",
                scrollTrigger: { trigger: list, start: "top 80%", end: "bottom 60%", scrub: 0.6 },
              },
            );
            const entries = all<HTMLElement>(":scope > li", list);
            entries.forEach((li) => {
              if (belowFold(li, 0.8)) gsap.set(li, { opacity: 0, y: 14 });
            });
            ScrollTrigger.batch(entries, {
              start: "top 88%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "expo.out", clearProps: "all" }),
            });
          });

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

          // Sobre: a line of JSX types itself above the section, then fades as the portrait and text arrive.
          all<HTMLElement>('[data-m="about"]').forEach((section) => {
            const sig = section.querySelector<HTMLElement>("[data-sig]");
            const parts = all<HTMLElement>("[data-about]", section);
            if (!belowFold(section, 0.55) || !sig) return;
            const split = SplitText.create(sig, { type: "chars", aria: "none" });
            splits.push(split);
            gsap.set(split.chars, { autoAlpha: 0 });
            gsap.set(parts, { opacity: 0, y: 14 });
            const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
            tl.to(split.chars, { autoAlpha: 1, duration: 0.01, stagger: 0.028, ease: "none" }, 0);
            tl.to(parts, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, clearProps: "all" }, 0.55);
            tl.to(sig, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 1.9);
            ScrollTrigger.create({ trigger: section, start: "top 78%", once: true, onEnter: () => tl.play() });
          });

          // este-site.ts: a highlighted line walks down the code as the section scrolls past (desktop only).
          if (desktop) {
            all<HTMLElement>('[data-m="reading"]').forEach((code) => {
              const rows = all<HTMLElement>(":scope > span", code);
              if (!rows.length) return;
              let current = -1;
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
                onLeave: () => {
                  rows[current]?.removeAttribute("data-reading");
                  current = -1;
                },
                onLeaveBack: () => {
                  rows[current]?.removeAttribute("data-reading");
                  current = -1;
                },
              });
            });
          }

          ScrollTrigger.refresh();

          // Any later layout shift (images, text re-wrapping, split titles reverting) moves the start points; measure again.
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
        splits.forEach((s) => s.revert());
      };
    });

    return () => mm.revert();
  });

  return null;
}
