"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "prefetch">;

/**
 * A Link that fetches its page only when someone shows intent (pointer over it, finger down, keyboard focus).
 * The default viewport prefetch would pull every case study on first load, which is the wrong trade on a phone.
 */
export function IntentLink({ href, onPointerEnter, onFocus, ...props }: Props) {
  const router = useRouter();
  const warm = () => router.prefetch(typeof href === "string" ? href : (href.pathname ?? "/"));
  return (
    <Link
      href={href}
      prefetch={false}
      onPointerEnter={(e) => {
        warm();
        onPointerEnter?.(e);
      }}
      onFocus={(e) => {
        warm();
        onFocus?.(e);
      }}
      {...props}
    />
  );
}
