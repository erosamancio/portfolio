"use client";

import { useEffect } from "react";
import type { gsap as Gsap } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import type { SplitText as SplitTextType } from "gsap/SplitText";

export type GsapKit = { gsap: typeof Gsap; ScrollTrigger: typeof ScrollTriggerType; SplitText: typeof SplitTextType };

let kit: Promise<GsapKit> | undefined;

// GSAP loads after the page is interactive, in its own chunk, so it never delays hydration. The server HTML is
// already the finished page; every animation here plays on top of it once the library arrives.
// While the opening sequence is about to play it loads at once; otherwise it waits for an idle moment.
const whenIdle = () =>
  new Promise<void>((resolve) => {
    if (document.documentElement.dataset.intro === "play" || !("requestIdleCallback" in window)) return resolve();
    window.requestIdleCallback(() => resolve(), { timeout: 2000 });
  });

const importKit = () =>
  Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("gsap/SplitText")]).then(([g, st, sp]) => {
    g.gsap.registerPlugin(st.ScrollTrigger, sp.SplitText);
    return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger, SplitText: sp.SplitText };
  });

export const loadGsap = () => (kit ??= whenIdle().then(importKit));

/** Runs `setup` once on mount, as soon as GSAP has loaded, inside a gsap.context that is reverted on unmount. */
export function useGsap(setup: (kit: GsapKit) => void | (() => void)) {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | void;
    let ctx: ReturnType<GsapKit["gsap"]["context"]> | undefined;
    loadGsap().then((loaded) => {
      if (cancelled) return;
      ctx = loaded.gsap.context(() => {
        cleanup = setup(loaded);
      });
    });
    return () => {
      cancelled = true;
      cleanup?.();
      ctx?.revert();
    };
    // Setup runs once per mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// Runs `setup` after the web fonts are measured, because SplitText and layout-based tweens need final glyph sizes.
export const afterFonts = (setup: () => void) => {
  let cancelled = false;
  document.fonts.ready.then(() => {
    if (!cancelled) setup();
  });
  return () => {
    cancelled = true;
  };
};
