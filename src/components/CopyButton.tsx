"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./CopyButton.module.css";

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
      {/* Both icons stay mounted so the swap cross-fades both ways instead of popping. */}
      <span className={styles.icon} data-copied={state === "copied" ? "" : undefined} aria-hidden="true">
        <Copy />
        <Check />
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
