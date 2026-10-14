import { ChevronRight } from "lucide-react";
import styles from "./Disclosure.module.css";

/** Native <details>: works without JavaScript, and the keyboard and screen readers get it for free. */
export function Disclosure({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className={styles.disclosure}>
      <summary className={styles.summary}>
        <ChevronRight aria-hidden="true" /> {label}
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
