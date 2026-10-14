"use client";

import { useEffect } from "react";
import { MOBILE_QUERY } from "./tokens";
import type { gsap as Gsap } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

export type GsapKit = { gsap: typeof Gsap; ScrollTrigger: typeof ScrollTriggerType };

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
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, st]) => {
    g.gsap.registerPlugin(st.ScrollTrigger);
    return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger };
  });

/** SplitText is only for the opening sequence, so it is a separate chunk that the plain preview never downloads. */
export const loadSplitText = () =>
  Promise.all([loadGsap(), import("gsap/SplitText")]).then(([{ gsap }, { SplitText }]) => {
    gsap.registerPlugin(SplitText);
    return SplitText;
  });

export const loadGsap = () => (kit ??= whenIdle().then(importKit));

/**
 * Runs `setup` once on mount, as soon as GSAP has loaded, inside a gsap.context that is reverted on unmount.
 * Phones skip it entirely: the scroll choreography is a desktop flourish, and not downloading GSAP there is faster.
 * `enabled` is checked first, so a page with nothing to animate never downloads the library.
 */
export function useGsap(setup: (kit: GsapKit) => void | (() => void), enabled: () => boolean = () => true) {
  useEffect(() => {
    if (window.matchMedia(MOBILE_QUERY).matches || !enabled()) return;
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
