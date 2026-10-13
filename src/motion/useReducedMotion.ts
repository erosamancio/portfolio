"use client";

import { useSyncExternalStore } from "react";
import { MOBILE_QUERY, REDUCED_QUERY } from "./tokens";

function useMedia(query: string, server: boolean) {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => server,
  );
}

// The server render has the final content on screen; animations only start after hydration.
export const usePrefersReducedMotion = () => useMedia(REDUCED_QUERY, false);
export const useIsMobile = () => useMedia(MOBILE_QUERY, false);
