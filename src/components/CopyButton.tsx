"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Check, Copy } from "lucide-react";
import { duration, ease } from "@/motion/tokens";

type State = "idle" | "copied" | "failed";

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <button type="button" className={className} onClick={copy} data-state={state}>
      {/* The icon swaps with a quick scale and fade, so "copied" registers without the layout moving. */}
      <span style={{ display: "inline-grid", width: "1em", height: "1em" }} aria-hidden="true">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.span
            key={state === "copied" ? "check" : "copy"}
            style={{ display: "grid", placeItems: "center", gridArea: "1 / 1" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: duration.short, ease: ease.out }}
          >
            {state === "copied" ? <Check /> : <Copy />}
          </m.span>
        </AnimatePresence>
      </span>
      <span aria-live="polite">
        {state === "copied"
          ? "E-mail copiado"
          : state === "failed"
            ? "Não copiou: selecione o e-mail"
            : "Copiar e-mail"}
      </span>
    </button>
  );
}
