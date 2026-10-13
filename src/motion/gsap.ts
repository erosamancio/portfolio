"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Plugins are registered once, here, so no component has to remember to do it.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText, useGSAP };

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
