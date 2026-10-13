"use client";

import { MOBILE_QUERY } from "./tokens";
import { afterFonts, gsap, SplitText, useGSAP } from "./gsap";

const all = <T extends Element>(selector: string) => gsap.utils.toArray<T>(selector);

/**
 * "O editor abre o projeto": the explorer unfolds, the tab opens, the name is typed and perfil.ts writes itself.
 * It plays once per session, only on the home page, and the layout script decides that before first paint
 * (html[data-intro]). The server HTML is already the finished page, so skipping this changes nothing visible.
 */
export function Opening() {
  useGSAP(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "play") return;

    const finish = () => {
      root.dataset.intro = "done";
      try {
        sessionStorage.setItem("intro", "1");
      } catch {}
    };

    let tl: gsap.core.Timeline | undefined;
    let split: SplitText | undefined;
    const skip = () => tl?.progress(1);
    const events = ["pointerdown", "wheel", "keydown", "touchstart"] as const;

    const stop = afterFonts(() => {
      const mobile = window.matchMedia(MOBILE_QUERY).matches;
      const name = document.querySelector<HTMLElement>('[data-i="name"]');

      tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          split?.revert();
          finish();
          // Inline styles go only now: until the page is marked done, the stylesheet still hides these pieces.
          gsap.set(all("[data-i]"), { clearProps: "all" });
          events.forEach((e) => window.removeEventListener(e, skip));
        },
      });
      if (mobile) tl.timeScale(1.4);

      // Explorer: files unfold one by one.
      tl.fromTo(all('[data-i="tree"]'), { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.03 }, 0);
      // Tab opens from the left, like a file being opened.
      tl.fromTo(
        all('[data-i="tab"]'),
        { opacity: 1, clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.4 },
        0.1,
      );

      // The name types itself, one character at a time.
      if (name) {
        gsap.set(name, { opacity: 1 });
        split = SplitText.create(name, { type: "chars", aria: "none" });
        tl.fromTo(split.chars, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01, stagger: 0.042, ease: "none" }, 0.2);
      }

      // perfil.ts writes line by line; each token takes its color as its line lands.
      const rows = all<HTMLElement>('[data-i="row"]');
      rows.forEach((row, i) => {
        const at = 0.3 + i * 0.06;
        tl!.fromTo(
          row,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 0.45 },
          at,
        );
        const tokens = row.querySelectorAll("[data-tok]");
        if (tokens.length)
          tl!.from(tokens, { color: "#6e6e78", duration: 0.5, ease: "power2.out", clearProps: "color" }, at + 0.15);
      });

      // Then the text and buttons arrive.
      tl.fromTo(
        all('[data-i="text"]'),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
        0.75,
      );
      tl.fromTo(all('[data-i="actions"]'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 0.95);

      // The status bar compiles along with the opening and settles on "pronto".
      const label = document.querySelector("[data-build]")?.lastChild;
      if (label) {
        const text = label.textContent;
        label.textContent = " compilando…";
        tl.call(() => (label.textContent = " compilado em 0,8s"), undefined, 0.9);
        tl.call(() => (label.textContent = text), undefined, 2.0);
      }

      events.forEach((e) => window.addEventListener(e, skip, { once: true, passive: true }));
    });

    return () => {
      stop();
      events.forEach((e) => window.removeEventListener(e, skip));
      split?.revert();
    };
  });

  return null;
}
