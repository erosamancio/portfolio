"use client";

import { useSyncExternalStore } from "react";

export type ViewMode = "preview" | "code";

const STORAGE_KEY = "view";
const listeners = new Set<() => void>();

const read = (): ViewMode => (document.documentElement.dataset.view === "code" ? "code" : "preview");

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => void listeners.delete(listener);
};

/** Applies the mode to <html>, remembers it for the next visit and tells whoever is listening. */
export function setViewMode(next: ViewMode) {
  const root = document.documentElement;
  if (read() === next) return;
  // data-switched turns on the short entrance animation, which must not play on a page load.
  root.dataset.switched = "";
  root.dataset.view = next;
  // The code panels open one after another: each gets its place in the sequence, capped so a long page stays quick.
  document
    .querySelectorAll<HTMLElement>('[data-only="code"]')
    .forEach((el, i) => el.style.setProperty("--k", String(Math.min(i, 6))));
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  listeners.forEach((l) => l());
  window.dispatchEvent(new Event("viewchange"));
}

/** The reading mode. The layout script has already set data-view before first paint; the server snapshot is "preview". */
export const useViewMode = (): ViewMode => useSyncExternalStore(subscribe, read, () => "preview");
