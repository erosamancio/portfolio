// Shared timing for every animation on the site, so the whole page moves with the same rhythm.
export const ease = {
  // Same curve as --ease-out in globals.css, in the form each library expects.
  out: [0.16, 1, 0.3, 1] as const,
  outGsap: "expo.out",
  inOut: "power2.inOut",
} as const;

export const duration = {
  micro: 0.16,
  short: 0.28,
  base: 0.5,
  long: 0.8,
} as const;

export const stagger = {
  tight: 0.04,
  base: 0.07,
} as const;

// Phones get a shorter, lighter version of every sequence.
export const MOBILE_QUERY = "(max-width: 63.99rem)";
export const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
