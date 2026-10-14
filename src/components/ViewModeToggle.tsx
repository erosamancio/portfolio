"use client";

import { setViewMode, useViewMode, type ViewMode } from "./viewMode";
import styles from "./ViewModeToggle.module.css";

const options: { mode: ViewMode; label: string }[] = [
  { mode: "preview", label: "Prévia" },
  { mode: "code", label: "Código" },
];

/** Switches the whole site between plain reading and the code view. */
export function ViewModeToggle() {
  const current = useViewMode();

  return (
    <div role="group" aria-label="Modo de leitura" className={styles.group}>
      {options.map(({ mode, label }) => (
        <button
          key={mode}
          type="button"
          className={styles.option}
          aria-pressed={current === mode}
          onClick={() => setViewMode(mode)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
