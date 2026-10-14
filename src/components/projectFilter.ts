"use client";

import { useSyncExternalStore } from "react";
import type { Tag } from "@/content/site";

/**
 * The technology picked in the code view. It lives on <html> (data-filter) so the CSS can hide the projects that do not
 * match, without any project card becoming a client component. It only applies in the code view.
 */
const listeners = new Set<() => void>();

const read = (): Tag | null => (document.documentElement.dataset.filter as Tag | undefined) ?? null;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => void listeners.delete(listener);
};

export function setProjectFilter(tag: Tag | null) {
  const root = document.documentElement;
  if (tag) root.dataset.filter = tag;
  else delete root.dataset.filter;
  listeners.forEach((l) => l());
}

export const useProjectFilter = (): Tag | null => useSyncExternalStore(subscribe, read, () => null);
